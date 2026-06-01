// ============================================================
// WFW Tippelő 2026 – Main App
// ============================================================

const EMOJIS = ['⚽','🦁','🐯','🦅','🐉','🦊','🐺','🦈','🔥','⚡','🌟','💎','🎯','🚀','🏆','🎲'];
const VB_START = new Date('2026-06-11T00:00:00Z');

let currentUser = null;
let currentLeague = null;
let myLeagues = [];
let activeView = 'home';
let activePhase = 'group';
let deferredInstallPrompt = null;

window.addEventListener('firebase-ready', () => { initApp(); });

// Amikor új eredmény érkezik, frissíti a meccslistát és tabellát
window.addEventListener('results-updated', () => {
  if (activeView === 'matches') renderMatches();
  if (activeView === 'ranking' && currentLeague) loadRanking(currentLeague, document.getElementById('ranking-content'));
});

function initApp() {
  loadUser();
  setupNav();
  setupModals();
  setupCountdown();
  renderMatches();
  if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(console.warn);

  // Auto-szinkron indítása (football-data.org + openfootball fallback)
  const savedApiKey = localStorage.getItem('wfw_fdorg_key') || '';
  const trySync = () => {
    if (window.WFWResults) {
      window.WFWResults.startAutoSync(savedApiKey);
    } else {
      setTimeout(trySync, 200);
    }
  };
  trySync();
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault(); deferredInstallPrompt = e;
    document.getElementById('btn-install').classList.remove('hidden');
  });
  document.getElementById('btn-install').addEventListener('click', () => {
    if (deferredInstallPrompt) { deferredInstallPrompt.prompt(); deferredInstallPrompt = null; document.getElementById('btn-install').classList.add('hidden'); }
  });
  document.getElementById('btn-join-or-create').addEventListener('click', () => {
    if (!currentUser) { openModal('modal-auth'); return; }
    openModal('modal-league');
  });
  setTimeout(() => {
    document.getElementById('splash').classList.add('fade-out');
    setTimeout(() => { document.getElementById('splash').classList.add('hidden'); document.getElementById('app').classList.remove('hidden'); }, 500);
  }, 1800);
}

// ---- USER ----
function loadUser() {
  const stored = localStorage.getItem('wfw_user');
  if (stored) { currentUser = JSON.parse(stored); updateUserBadge(); loadMyLeagues(); }
}

function saveUser(name, emoji) {
  currentUser = { id: localStorage.getItem('wfw_uid') || generateId(12), name, emoji };
  localStorage.setItem('wfw_uid', currentUser.id);
  localStorage.setItem('wfw_user', JSON.stringify(currentUser));
  updateUserBadge(); loadMyLeagues();
}

function updateUserBadge() {
  const badge = document.getElementById('user-badge');
  if (currentUser) {
    badge.textContent = currentUser.emoji + ' ' + currentUser.name;
    badge.classList.remove('hidden');
    badge.onclick = () => openModal('modal-auth');
    document.getElementById('matches-login-hint').textContent = '';
  } else {
    badge.classList.add('hidden');
    document.getElementById('matches-login-hint').textContent = 'Belépés szükséges a tippeléshez';
  }
}

// ---- NAV ----
function setupNav() {
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      switchView(btn.dataset.view);
      document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
}

function switchView(view) {
  activeView = view;
  document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
  document.getElementById('view-' + view).classList.remove('hidden');
  if (view === 'league') renderLeagueView();
  if (view === 'ranking') renderRankingView();
  if (view === 'matches') renderMatches();
}

// ---- COUNTDOWN ----
function setupCountdown() {
  function tick() {
    const diff = VB_START - new Date();
    if (diff <= 0) { document.getElementById('countdown').innerHTML = '<span class="cd-live">🔴 A VB ELKEZDŐDÖTT!</span>'; return; }
    const d = Math.floor(diff/86400000), h = Math.floor((diff%86400000)/3600000), m = Math.floor((diff%3600000)/60000), s = Math.floor((diff%60000)/1000);
    document.getElementById('cd-d').textContent = String(d).padStart(2,'0');
    document.getElementById('cd-h').textContent = String(h).padStart(2,'0');
    document.getElementById('cd-m').textContent = String(m).padStart(2,'0');
    document.getElementById('cd-s').textContent = String(s).padStart(2,'0');
  }
  tick(); setInterval(tick, 1000);
}

// ---- MATCHES ----
function renderMatches() {
  const myTips = getMyTips();
  const tabsEl = document.getElementById('phase-tabs');
  tabsEl.innerHTML = '';
  WC_PHASES.forEach(ph => {
    const btn = document.createElement('button');
    btn.className = 'phase-tab' + (ph.id === activePhase ? ' active' : '');
    btn.textContent = ph.label;
    btn.onclick = () => { activePhase = ph.id; document.querySelectorAll('.phase-tab').forEach(t => t.classList.remove('active')); btn.classList.add('active'); renderMatchList(myTips); };
    tabsEl.appendChild(btn);
  });
  renderMatchList(myTips);
}

function renderMatchList(myTips) {
  const list = document.getElementById('matches-list');
  list.innerHTML = '';
  const matches = WC_MATCHES.filter(m => m.phase === activePhase);
  const byDate = {};
  matches.forEach(m => { if (!byDate[m.date]) byDate[m.date] = []; byDate[m.date].push(m); });

  Object.entries(byDate).forEach(([date, dayMatches]) => {
    const dh = document.createElement('div');
    dh.className = 'date-header';
    dh.textContent = formatDate(date);
    list.appendChild(dh);

    dayMatches.forEach(m => {
      const tip = myTips[m.id];
      const locked = isMatchLocked(m);
      const card = document.createElement('div');
      card.className = 'match-card' + (tip ? ' tipped' : '') + (locked ? ' locked' : '');
      card.innerHTML =
        '<div class="match-meta">' + (m.group ? 'Csoport ' + m.group + ' • ' : '') + m.time + ' • ' + m.venue + '</div>' +
        '<div class="match-teams">' +
          '<div class="team home">' + m.home + '</div>' +
          '<div class="match-vs">' +
            (tip ? '<div class="tip-score">' + tip.home + ' – ' + tip.away + '</div>' : '<div class="vs-text">VS</div>') +
            (m.result ? '<div class="result-score">' + m.result.home + '–' + m.result.away + '</div>' : '') +
          '</div>' +
          '<div class="team away">' + m.away + '</div>' +
        '</div>' +
        (tip ? '<div class="tip-pts">' + getTipLabel(tip, m.result) + '</div>' : '') +
        '<button class="btn-tip' + (locked ? ' disabled' : '') + '" data-id="' + m.id + '">' +
          (locked ? '🔒 Lezárva' : tip ? '✏️ Módosítás' : '✏️ Tipp leadása') + '</button>';
      if (!locked) card.querySelector('.btn-tip').onclick = () => openTipModal(m);
      list.appendChild(card);
    });
  });
}

function isMatchLocked(match) {
  const mt = new Date(match.date + 'T' + match.time + ':00Z');
  return new Date() >= mt;
}

function getTipLabel(tip, result) {
  if (!result) return '<span class="pts-pending">⏳ Folyamatban</span>';
  const pts = calcPoints(tip, result);
  if (pts === 5) return '<span class="pts-5">🎯 +5 pont – Telitalálat!</span>';
  if (pts === 3) return '<span class="pts-3">🔥 +3 pont</span>';
  if (pts === 1) return '<span class="pts-1">✅ +1 pont</span>';
  return '<span class="pts-0">❌ 0 pont</span>';
}

// ---- TIP MODAL ----
function openTipModal(match) {
  if (!currentUser) { openModal('modal-auth'); return; }
  const myTips = getMyTips();
  const existing = myTips[match.id] || { home: '', away: '' };
  const content = document.getElementById('tip-modal-content');
  content.innerHTML =
    '<h3>✏️ Tipp leadása</h3>' +
    '<div class="tip-match-info">' + (match.group ? 'Csoport ' + match.group + ' • ' : '') + formatDate(match.date) + ' ' + match.time + '<br><small>📍 ' + match.venue + '</small></div>' +
    '<div class="tip-teams-row">' +
      '<div class="tip-team"><div class="tip-team-name">' + match.home + '</div><input type="number" id="tip-home" min="0" max="20" value="' + existing.home + '" placeholder="0" class="tip-input" /></div>' +
      '<div class="tip-dash">–</div>' +
      '<div class="tip-team"><div class="tip-team-name">' + match.away + '</div><input type="number" id="tip-away" min="0" max="20" value="' + existing.away + '" placeholder="0" class="tip-input" /></div>' +
    '</div>' +
    '<div class="tip-scoring-hint"><span>🎯 Pontos = <strong>5p</strong></span><span>🔥 Győztes+különbség = <strong>3p</strong></span><span>✅ Kimenetel = <strong>1p</strong></span></div>' +
    '<button class="btn-primary" id="btn-save-tip">💾 Tipp mentése</button>';
  document.getElementById('btn-save-tip').onclick = () => saveTip(match.id);
  openModal('modal-tip');
}

async function saveTip(matchId) {
  const home = parseInt(document.getElementById('tip-home').value);
  const away = parseInt(document.getElementById('tip-away').value);
  if (isNaN(home) || isNaN(away) || home < 0 || away < 0) { showToast('⚠️ Adj meg érvényes eredményt!'); return; }
  const tip = { home, away, savedAt: Date.now() };
  saveMyTip(matchId, tip);
  for (const league of myLeagues) {
    try {
      const { doc, setDoc } = window.fsUtils;
      await setDoc(doc(window.db, 'leagues', league.id, 'tips', currentUser.id + '_' + matchId), {
        userId: currentUser.id, userName: currentUser.name, userEmoji: currentUser.emoji, matchId, home, away, savedAt: Date.now()
      });
    } catch(e) { console.warn('Firebase save error', e); }
  }
  closeModal('modal-tip'); renderMatches(); showToast('✅ Tipp elmentve!');
}

function getMyTips() { return JSON.parse(localStorage.getItem('wfw_tips') || '{}'); }
function saveMyTip(id, tip) { const t = getMyTips(); t[id] = tip; localStorage.setItem('wfw_tips', JSON.stringify(t)); }

// ---- POINTS ----
function calcPoints(tip, result) {
  if (!result) return 0;
  const th = +tip.home, ta = +tip.away, rh = +result.home, ra = +result.away;
  if (th === rh && ta === ra) return 5;
  if ((th - ta) === (rh - ra) && Math.sign(th-ta) === Math.sign(rh-ra)) return 3;
  if (Math.sign(th-ta) === Math.sign(rh-ra)) return 1;
  return 0;
}

// ---- LEAGUE ----
function setupLeagueButtons() {
  document.getElementById('btn-create-league').addEventListener('click', createLeague);
  document.getElementById('btn-join-league').addEventListener('click', joinLeague);
}

async function createLeague() {
  if (!currentUser) { showToast('Előbb lépj be!'); return; }
  const name = document.getElementById('input-league-name').value.trim();
  if (!name) { showToast('⚠️ Add meg a liga nevét!'); return; }
  const code = generateCode(), leagueId = 'league_' + Date.now();
  const league = { id: leagueId, name, code, createdBy: currentUser.id, members: [{ id: currentUser.id, name: currentUser.name, emoji: currentUser.emoji }], createdAt: Date.now() };
  try {
    const { doc, setDoc } = window.fsUtils;
    await setDoc(doc(window.db, 'leagues', leagueId), league);
    addMyLeague(league); closeModal('modal-league'); showShareModal(league);
    switchView('league'); renderLeagueView(); showToast('🏆 Liga létrehozva: ' + name);
  } catch(e) { showToast('❌ Hiba: ' + e.message); }
}

async function joinLeague() {
  if (!currentUser) { showToast('Előbb lépj be!'); return; }
  const code = document.getElementById('input-league-code').value.trim().toUpperCase();
  if (!code) { showToast('⚠️ Add meg a liga kódját!'); return; }
  try {
    const { collection, query, where, getDocs, doc, updateDoc, arrayUnion } = window.fsUtils;
    const q = query(collection(window.db, 'leagues'), where('code', '==', code));
    const snap = await getDocs(q);
    if (snap.empty) { showToast('❌ Nem találtam ilyen ligát!'); return; }
    const ld = snap.docs[0];
    const league = { id: ld.id, ...ld.data() };
    if (!league.members?.some(m => m.id === currentUser.id)) {
      await updateDoc(doc(window.db, 'leagues', league.id), { members: arrayUnion({ id: currentUser.id, name: currentUser.name, emoji: currentUser.emoji }) });
      league.members = [...(league.members||[]), { id: currentUser.id, name: currentUser.name, emoji: currentUser.emoji }];
    }
    addMyLeague(league); closeModal('modal-league'); switchView('league'); renderLeagueView(); showToast('✅ Csatlakoztál: ' + league.name);
  } catch(e) { showToast('❌ Hiba: ' + e.message); }
}

function addMyLeague(league) {
  const i = myLeagues.findIndex(l => l.id === league.id);
  if (i >= 0) myLeagues[i] = league; else myLeagues.push(league);
  localStorage.setItem('wfw_leagues', JSON.stringify(myLeagues));
}

function loadMyLeagues() { myLeagues = JSON.parse(localStorage.getItem('wfw_leagues') || '[]'); }

// ---- LEAGUE VIEW ----
function renderLeagueView() {
  const el = document.getElementById('league-content');
  if (!currentUser) {
    el.innerHTML = '<div class="empty-state"><div class="empty-icon">👤</div><p>Lépj be a ligák kezeléséhez!</p><button class="btn-primary" onclick="openModal(\'modal-auth\')">Belépés</button></div>'; return;
  }
  if (myLeagues.length === 0) {
    el.innerHTML = '<div class="empty-state"><div class="empty-icon">🏆</div><p>Még nincs ligád. Hozz létre egyet!</p><button class="btn-primary" onclick="openModal(\'modal-league\')">+ Liga kezelése</button></div>'; return;
  }
  el.innerHTML = '<div class="league-list">' + myLeagues.map(l =>
    '<div class="league-item"><div class="league-item-header"><div><div class="league-item-name">🏆 ' + l.name + '</div>' +
    '<div class="league-item-code">Kód: <strong>' + l.code + '</strong> • ' + (l.members?.length || 1) + ' játékos</div></div>' +
    '<div class="league-item-actions"><button class="btn-sm" onclick=\'showShareModal(' + JSON.stringify(l).replace(/'/g, "\\'") + ')\'>📤</button>' +
    '<button class="btn-sm btn-sm-primary" onclick="switchView(\'ranking\')">📊 Tabella</button></div></div>' +
    '<div class="league-members">' + (l.members||[]).map(m => '<span class="member-chip">' + m.emoji + ' ' + m.name + '</span>').join('') + '</div></div>'
  ).join('') + '</div><div style="text-align:center;margin-top:1.5rem"><button class="btn-secondary" onclick="openModal(\'modal-league\')">+ Új liga / Csatlakozás</button></div>';
}

// ---- RANKING ----
async function renderRankingView() {
  const el = document.getElementById('ranking-content');
  if (!currentUser || myLeagues.length === 0) {
    el.innerHTML = '<div class="empty-state"><div class="empty-icon">📊</div><p>Csatlakozz egy ligához!</p><button class="btn-primary" onclick="openModal(\'modal-league\')">Liga kezelése</button></div>'; return;
  }
  const wrap = document.getElementById('league-selector-wrap');
  if (myLeagues.length > 1) {
    wrap.innerHTML = '<select class="league-select" id="ranking-league-select">' + myLeagues.map((l,i) => '<option value="' + i + '">' + l.name + '</option>').join('') + '</select>';
    document.getElementById('ranking-league-select').onchange = (e) => { currentLeague = myLeagues[+e.target.value]; loadRanking(currentLeague, el); };
  }
  if (!currentLeague) currentLeague = myLeagues[0];
  loadRanking(currentLeague, el);
}

async function loadRanking(league, el) {
  el.innerHTML = '<div class="loading">⏳ Tabella betöltése...</div>';
  try {
    const { collection, getDocs } = window.fsUtils;
    const snap = await getDocs(collection(window.db, 'leagues', league.id, 'tips'));
    const userTips = {};
    snap.forEach(d => { const t = d.data(); if (!userTips[t.userId]) userTips[t.userId] = { name: t.userName, emoji: t.userEmoji, tips: {} }; userTips[t.userId].tips[t.matchId] = { home: t.home, away: t.away }; });
    const results = JSON.parse(localStorage.getItem('wfw_results') || '{}');
    const ranking = Object.entries(userTips).map(([uid, data]) => {
      let pts = 0, exact = 0; const tipCount = Object.keys(data.tips).length;
      Object.entries(data.tips).forEach(([mid, tip]) => { const res = results[mid]; if (res) { const p = calcPoints(tip, res); pts += p; if (p === 5) exact++; } });
      return { uid, name: data.name, emoji: data.emoji, pts, exact, tipCount };
    }).sort((a,b) => b.pts - a.pts || b.exact - a.exact);

    const medals = ['🥇','🥈','🥉'];
    el.innerHTML = '<div class="ranking-league-name">🏆 ' + league.name + '</div>' +
      '<div class="ranking-table"><div class="ranking-header"><span>#</span><span>Játékos</span><span>Tippek</span><span>🎯</span><span>Pont</span></div>' +
      (ranking.length ? ranking.map((r,i) =>
        '<div class="ranking-row' + (r.uid === currentUser?.id ? ' me' : '') + (i < 3 ? ' pos-' + i : '') + '">' +
        '<span class="rank-pos">' + (medals[i] || (i+1)) + '</span>' +
        '<span class="rank-player">' + r.emoji + ' ' + r.name + '</span>' +
        '<span class="rank-tips">' + r.tipCount + '</span>' +
        '<span class="rank-exact">' + r.exact + '</span>' +
        '<span class="rank-pts">' + r.pts + '</span></div>'
      ).join('') : '<div class="ranking-empty">Még nincs tipp a ligában.</div>') +
      '</div>' +
      '<div class="wfw-cta" style="margin-top:2rem"><div class="wfw-cta-inner"><div class="wfw-cta-icon">💡</div><div class="wfw-cta-text"><strong>Ilyen rendszert szeretnél?</strong><p>Egyedi webapplikáció – wfw.hu</p></div><a href="https://wfw.hu#contact" target="_blank" class="btn-wfw">Ajánlatot kérek →</a></div></div>';
  } catch(e) { el.innerHTML = '<div class="error-state">❌ ' + e.message + '</div>'; }
}

// ---- SHARE ----
function showShareModal(league) {
  const url = location.href.split('?')[0] + '?liga=' + league.code;
  document.getElementById('share-code-display').textContent = league.code;
  document.getElementById('share-url-input').value = url;
  document.getElementById('btn-copy-link').onclick = () => navigator.clipboard.writeText(url).then(() => showToast('📋 Link másolva!'));
  document.getElementById('btn-share-fb').onclick = () => window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url));
  document.getElementById('btn-share-wa').onclick = () => window.open('https://wa.me/?text=' + encodeURIComponent('Csatlakozz a VB tippelős ligámhoz! 🏆⚽ ' + url));
  openModal('modal-share');
}

// ---- MODALS ----
function setupModals() {
  setupLeagueButtons();
  const picker = document.getElementById('emoji-picker');
  EMOJIS.forEach(e => {
    const btn = document.createElement('button');
    btn.className = 'emoji-btn'; btn.textContent = e;
    btn.onclick = () => { document.querySelectorAll('.emoji-btn').forEach(b => b.classList.remove('selected')); btn.classList.add('selected'); };
    picker.appendChild(btn);
  });
  picker.querySelector('.emoji-btn').classList.add('selected');

  document.getElementById('btn-save-user').addEventListener('click', () => {
    const name = document.getElementById('input-username').value.trim();
    if (!name) { showToast('⚠️ Adj meg egy becenevet!'); return; }
    const sel = picker.querySelector('.emoji-btn.selected');
    saveUser(name, sel ? sel.textContent : '⚽');
    closeModal('modal-auth'); showToast('👋 Üdv, ' + (sel ? sel.textContent : '⚽') + ' ' + name + '!');
    if (activeView === 'league') renderLeagueView();
  });

  if (currentUser) {
    document.getElementById('input-username').value = currentUser.name;
    picker.querySelectorAll('.emoji-btn').forEach(b => { b.classList.toggle('selected', b.textContent === currentUser.emoji); });
  }

  document.querySelectorAll('.modal-close').forEach(btn => btn.addEventListener('click', () => closeModal(btn.dataset.close)));
  document.getElementById('modal-overlay').addEventListener('click', e => { if (e.target === document.getElementById('modal-overlay')) closeAllModals(); });

  const urlParams = new URLSearchParams(location.search);
  const inviteCode = urlParams.get('liga');
  if (inviteCode) {
    setTimeout(() => {
      document.getElementById('input-league-code').value = inviteCode.toUpperCase();
      if (!currentUser) { showToast('🔗 Meghívó érkezett! Lépj be.'); openModal('modal-auth'); }
      else openModal('modal-league');
    }, 2200);
  }
}

function openModal(id) { document.getElementById('modal-overlay').classList.remove('hidden'); document.querySelectorAll('.modal').forEach(m => m.classList.add('hidden')); document.getElementById(id).classList.remove('hidden'); }
function closeModal(id) { document.getElementById(id).classList.add('hidden'); document.getElementById('modal-overlay').classList.add('hidden'); }
function closeAllModals() { document.querySelectorAll('.modal').forEach(m => m.classList.add('hidden')); document.getElementById('modal-overlay').classList.add('hidden'); }

// ---- TOAST ----
function showToast(msg) {
  const t = document.getElementById('toast'); t.textContent = msg; t.classList.remove('hidden'); t.classList.add('show');
  setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.classList.add('hidden'), 300); }, 3000);
}

// ---- UTILS ----
function generateId(len) { return Math.random().toString(36).substring(2, 2+len); }
function generateCode() { const c='ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; return Array.from({length:6},()=>c[Math.floor(Math.random()*c.length)]).join(''); }
function formatDate(ds) { return new Date(ds+'T12:00:00Z').toLocaleDateString('hu-HU',{month:'long',day:'numeric',weekday:'long'}); }

window.openModal = openModal;
window.closeModal = closeModal;
window.showShareModal = showShareModal;
window.switchView = switchView;
