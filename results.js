// ============================================================
// WFW Tippelő 2026 – Automatikus eredmény szinkronizáció
// Forrás 1: football-data.org API (élő eredmények)
// Forrás 2: openfootball/worldcup.json (fallback)
// Forrás 3: Firestore manuális felülírás (admin)
// ============================================================

const FDORG_BASE = 'https://api.football-data.org/v4';
const OPENFOOTBALL_URL = 'https://raw.githubusercontent.com/openfootball/worldcup.json/master/2026/worldcup.json';

// Meccs ID megfeleltetés: football-data.org ID → mi meccs ID-nk
// Ez a VB kezdete után töltődik fel valódi ID-kkal
// Addig az openfootball dátum+csapat alapú egyeztetést használunk
let fdOrgMatchMap = {};

// ============================================================
// FŐ SYNC FÜGGVÉNY
// Hívd meg ezt amikor az app betölt és meccs után
// ============================================================
async function syncResults(apiKey) {
  const results = {};

  // 1. Próbálkozás: football-data.org (ha van API kulcs)
  if (apiKey && apiKey !== 'FDORG_API_KEY') {
    try {
      const fdResults = await fetchFDOrg(apiKey);
      Object.assign(results, fdResults);
      console.log('[WFW] football-data.org szinkron OK, ' + Object.keys(fdResults).length + ' eredmény');
    } catch(e) {
      console.warn('[WFW] football-data.org hiba, fallback-re váltás:', e.message);
    }
  }

  // 2. Fallback: openfootball
  if (Object.keys(results).length === 0) {
    try {
      const ofResults = await fetchOpenFootball();
      Object.assign(results, ofResults);
      console.log('[WFW] openfootball szinkron OK, ' + Object.keys(ofResults).length + ' eredmény');
    } catch(e) {
      console.warn('[WFW] openfootball hiba:', e.message);
    }
  }

  // 3. Firestore manuális felülírások mindig felülírnak mindent
  try {
    const manualResults = await fetchManualOverrides();
    const overrideCount = Object.keys(manualResults).length;
    Object.assign(results, manualResults);
    if (overrideCount > 0) console.log('[WFW] ' + overrideCount + ' manuális felülírás alkalmazva');
  } catch(e) {
    console.warn('[WFW] Firestore override hiba:', e.message);
  }

  // Mentés localStorage-ba + Firebase-be (hogy mindenki lássa)
  if (Object.keys(results).length > 0) {
    localStorage.setItem('wfw_results', JSON.stringify(results));
    await pushResultsToFirestore(results);
  }

  return results;
}

// ============================================================
// FOOTBALL-DATA.ORG FETCH
// ============================================================
async function fetchFDOrg(apiKey) {
  const res = await fetch(FDORG_BASE + '/competitions/WC/matches?status=FINISHED', {
    headers: { 'X-Auth-Token': apiKey }
  });
  if (!res.ok) throw new Error('HTTP ' + res.status);
  const data = await res.json();

  const results = {};
  (data.matches || []).forEach(m => {
    const score = m.score?.fullTime;
    if (!score || score.home === null) return;

    // Egyeztetés csapat nevek alapján
    const matchId = findMatchIdByTeams(
      m.homeTeam?.name || '',
      m.awayTeam?.name || '',
      m.utcDate?.substring(0, 10)
    );
    if (matchId) {
      results[matchId] = { home: score.home, away: score.away, source: 'fdorg', updatedAt: Date.now() };
    }
  });
  return results;
}

// ============================================================
// OPENFOOTBALL FETCH
// ============================================================
async function fetchOpenFootball() {
  const res = await fetch(OPENFOOTBALL_URL);
  if (!res.ok) throw new Error('HTTP ' + res.status);
  const data = await res.json();

  const results = {};
  (data.matches || []).forEach(m => {
    if (!m.score) return; // Még nem játszották le

    const home = m.score[0] ?? m.score?.ft?.[0];
    const away = m.score[1] ?? m.score?.ft?.[1];
    if (home === undefined || away === undefined) return;

    const matchId = findMatchIdByTeams(
      m.team1 || '',
      m.team2 || '',
      m.date
    );
    if (matchId) {
      results[matchId] = { home: parseInt(home), away: parseInt(away), source: 'openfootball', updatedAt: Date.now() };
    }
  });
  return results;
}

// ============================================================
// FIRESTORE MANUÁLIS FELÜLÍRÁSOK
// ============================================================
async function fetchManualOverrides() {
  if (!window.db || !window.fsUtils) return {};
  const { collection, getDocs } = window.fsUtils;
  const snap = await getDocs(collection(window.db, 'results'));
  const results = {};
  snap.forEach(d => {
    const r = d.data();
    if (r.home !== undefined && r.away !== undefined) {
      results[d.id] = { home: r.home, away: r.away, source: 'manual', updatedAt: r.updatedAt || Date.now() };
    }
  });
  return results;
}

// ============================================================
// EREDMÉNYEK PUSHÁLÁSA FIRESTORE-BA (hogy minden user lássa)
// ============================================================
async function pushResultsToFirestore(results) {
  if (!window.db || !window.fsUtils) return;
  const { doc, setDoc } = window.fsUtils;
  const entries = Object.entries(results).filter(([, v]) => v.source !== 'manual');
  // Batch-szerűen, de nem egyszerre az összes
  for (const [matchId, result] of entries) {
    try {
      await setDoc(doc(window.db, 'results', matchId), result, { merge: true });
    } catch(e) { /* silent */ }
    await new Promise(r => setTimeout(r, 50)); // rate limit
  }
}

// ============================================================
// CSAPAT NÉV → MECCS ID EGYEZTETÉS
// ============================================================
const TEAM_ALIASES = {
  // Angol → Magyar nevek (ahogy a matches.js-ben szerepelnek)
  'mexico': 'Mexikó', 'south africa': 'Dél-Afrika', 'poland': 'Lengyelország',
  'saudi arabia': 'Szaúd-Arábia', 'argentina': 'Argentína', 'albania': 'Albánia',
  'nigeria': 'Nigéria', 'ukraine': 'Ukrajna', 'united states': 'USA', 'usa': 'USA',
  'canada': 'Kanada', 'uruguay': 'Uruguaj', 'panama': 'Panama',
  'brazil': 'Brazília', 'morocco': 'Marokkó', 'croatia': 'Horvátország',
  'japan': 'Japán', 'germany': 'Németország', 'scotland': 'Skócia',
  'netherlands': 'Hollandia', 'spain': 'Spanyolország', 'serbia': 'Szerbia',
  'ecuador': 'Ecuador', 'france': 'Franciaország', 'senegal': 'Szenegál',
  'denmark': 'Dánia', 'vietnam': 'Vietnám', 'portugal': 'Portugália',
  'colombia': 'Kolumbia', 'greece': 'Görögország', 'england': 'Anglia',
  'south korea': 'Dél-Korea', 'australia': 'Australia', 'austria': 'Ausztria',
  'chile': 'Chile', 'belgium': 'Belgium', 'switzerland': 'Svájc',
  'cameroon': 'Kamerun', 'italy': 'Olaszország', 'turkey': 'Törökország',
  'dr congo': 'Kongó DR', 'cape verde': 'Zöld-foki-sz.',
  'zimbabwe': 'Zimbabve', 'chad': 'Csád',
};

function normalizeTeam(name) {
  const lower = name.toLowerCase().replace(/[^\w\s]/g, '').trim();
  return TEAM_ALIASES[lower] || name;
}

function findMatchIdByTeams(homeName, awayName, date) {
  const homeNorm = normalizeTeam(homeName);
  const awayNorm = normalizeTeam(awayName);

  for (const m of window.WC_MATCHES || []) {
    const mHome = m.home.replace(/\s*[🇦-🇿]{1,4}\s*/g, '').trim();
    const mAway = m.away.replace(/\s*[🇦-🇿]{1,4}\s*/g, '').trim();

    const homeMatch = mHome.toLowerCase().includes(homeNorm.toLowerCase()) ||
                      homeNorm.toLowerCase().includes(mHome.toLowerCase());
    const awayMatch = mAway.toLowerCase().includes(awayNorm.toLowerCase()) ||
                      awayNorm.toLowerCase().includes(mAway.toLowerCase());
    const dateMatch = !date || m.date === date;

    if (homeMatch && awayMatch && dateMatch) return m.id;
    // Dátum nélkül is próbáljuk
    if (homeMatch && awayMatch && !date) return m.id;
  }
  return null;
}

// ============================================================
// AUTO-SYNC IDŐZÍTŐ
// VB alatt: 5 percenként frissít
// VB előtt/után: 1 óránként
// ============================================================
function startAutoSync(apiKey) {
  const now = new Date();
  const vbStart = new Date('2026-06-11T00:00:00Z');
  const vbEnd = new Date('2026-07-20T00:00:00Z');
  const duringVB = now >= vbStart && now <= vbEnd;

  const interval = duringVB ? 5 * 60 * 1000 : 60 * 60 * 1000;

  // Azonnal szinkronizál
  syncResults(apiKey).then(results => {
    window.dispatchEvent(new CustomEvent('results-updated', { detail: results }));
  });

  // Aztán időközönként
  setInterval(async () => {
    const results = await syncResults(apiKey);
    window.dispatchEvent(new CustomEvent('results-updated', { detail: results }));
  }, interval);

  console.log('[WFW] Auto-sync indítva, ' + (duringVB ? '5 perces' : '60 perces') + ' időközzel');
}

window.WFWResults = { syncResults, startAutoSync, fetchManualOverrides };
