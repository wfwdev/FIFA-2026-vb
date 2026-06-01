// FIFA Világbajnokság 2026 – Meccsadatok
// Csoportkör + Kieséses szakasz

window.WC_PHASES = [
  { id: 'group', label: '🔵 Csoportkör' },
  { id: 'r32',   label: '⚡ R32' },
  { id: 'r16',   label: '🔥 R16' },
  { id: 'qf',    label: '💥 Negyed' },
  { id: 'sf',    label: '🌟 Elődöntő' },
  { id: 'final', label: '🏆 Döntő' },
];

window.WC_MATCHES = [
  // ===== CSOPORT A =====
  { id:'m001', phase:'group', group:'A', date:'2026-06-11', time:'20:00', home:'Mexikó 🇲🇽',     away:'Dél-Afrika 🇿🇦',  venue:'México City' },
  { id:'m002', phase:'group', group:'A', date:'2026-06-12', time:'15:00', home:'Lengyelország 🇵🇱', away:'Szaúd-Arábia 🇸🇦', venue:'Dallas' },
  { id:'m003', phase:'group', group:'A', date:'2026-06-16', time:'18:00', home:'Mexikó 🇲🇽',     away:'Lengyelország 🇵🇱', venue:'Dallas' },
  { id:'m004', phase:'group', group:'A', date:'2026-06-16', time:'21:00', home:'Dél-Afrika 🇿🇦',  away:'Szaúd-Arábia 🇸🇦', venue:'Houston' },
  { id:'m005', phase:'group', group:'A', date:'2026-06-20', time:'20:00', home:'Mexikó 🇲🇽',     away:'Szaúd-Arábia 🇸🇦', venue:'Los Angeles' },
  { id:'m006', phase:'group', group:'A', date:'2026-06-20', time:'20:00', home:'Lengyelország 🇵🇱', away:'Dél-Afrika 🇿🇦',  venue:'Seattle' },

  // ===== CSOPORT B =====
  { id:'m007', phase:'group', group:'B', date:'2026-06-12', time:'12:00', home:'Argentína 🇦🇷',  away:'Albánia 🇦🇱',      venue:'Dallas' },
  { id:'m008', phase:'group', group:'B', date:'2026-06-12', time:'18:00', home:'Nigéria 🇳🇬',    away:'Ukrajna 🇺🇦',      venue:'Miami' },
  { id:'m009', phase:'group', group:'B', date:'2026-06-16', time:'15:00', home:'Argentína 🇦🇷',  away:'Nigéria 🇳🇬',      venue:'Kansas City' },
  { id:'m010', phase:'group', group:'B', date:'2026-06-17', time:'12:00', home:'Albánia 🇦🇱',    away:'Ukrajna 🇺🇦',      venue:'Atlanta' },
  { id:'m011', phase:'group', group:'B', date:'2026-06-21', time:'20:00', home:'Argentína 🇦🇷',  away:'Ukrajna 🇺🇦',      venue:'New York' },
  { id:'m012', phase:'group', group:'B', date:'2026-06-21', time:'20:00', home:'Albánia 🇦🇱',    away:'Nigéria 🇳🇬',      venue:'Boston' },

  // ===== CSOPORT C =====
  { id:'m013', phase:'group', group:'C', date:'2026-06-12', time:'21:00', home:'USA 🇺🇸',        away:'Kanada 🇨🇦',       venue:'Los Angeles' },
  { id:'m014', phase:'group', group:'C', date:'2026-06-13', time:'12:00', home:'Uruguaj 🇺🇾',    away:'Panama 🇵🇦',       venue:'Atlanta' },
  { id:'m015', phase:'group', group:'C', date:'2026-06-17', time:'15:00', home:'USA 🇺🇸',        away:'Uruguaj 🇺🇾',      venue:'New York' },
  { id:'m016', phase:'group', group:'C', date:'2026-06-17', time:'18:00', home:'Kanada 🇨🇦',     away:'Panama 🇵🇦',       venue:'Toronto' },
  { id:'m017', phase:'group', group:'C', date:'2026-06-21', time:'20:00', home:'USA 🇺🇸',        away:'Panama 🇵🇦',       venue:'Kansas City' },
  { id:'m018', phase:'group', group:'C', date:'2026-06-21', time:'20:00', home:'Kanada 🇨🇦',     away:'Uruguaj 🇺🇾',      venue:'Vancouver' },

  // ===== CSOPORT D =====
  { id:'m019', phase:'group', group:'D', date:'2026-06-13', time:'15:00', home:'Brazília 🇧🇷',   away:'Marokkó 🇲🇦',      venue:'New York' },
  { id:'m020', phase:'group', group:'D', date:'2026-06-13', time:'18:00', home:'Horvátország 🇭🇷', away:'Japán 🇯🇵',        venue:'San Francisco' },
  { id:'m021', phase:'group', group:'D', date:'2026-06-17', time:'21:00', home:'Brazília 🇧🇷',   away:'Horvátország 🇭🇷',  venue:'Seattle' },
  { id:'m022', phase:'group', group:'D', date:'2026-06-18', time:'12:00', home:'Marokkó 🇲🇦',    away:'Japán 🇯🇵',        venue:'Denver' },
  { id:'m023', phase:'group', group:'D', date:'2026-06-22', time:'20:00', home:'Brazília 🇧🇷',   away:'Japán 🇯🇵',        venue:'Dallas' },
  { id:'m024', phase:'group', group:'D', date:'2026-06-22', time:'20:00', home:'Horvátország 🇭🇷', away:'Marokkó 🇲🇦',      venue:'New York' },

  // ===== CSOPORT E =====
  { id:'m025', phase:'group', group:'E', date:'2026-06-14', time:'12:00', home:'Németország 🇩🇪', away:'Skócia 🏴󠁧󠁢󠁳󠁣󠁴󠁿',      venue:'Miami' },
  { id:'m026', phase:'group', group:'E', date:'2026-06-14', time:'15:00', home:'Hollandia 🇳🇱',  away:'Kelet-Timor 🇹🇱',  venue:'Houston' },
  { id:'m027', phase:'group', group:'E', date:'2026-06-18', time:'15:00', home:'Németország 🇩🇪', away:'Hollandia 🇳🇱',    venue:'Philadelphia' },
  { id:'m028', phase:'group', group:'E', date:'2026-06-18', time:'18:00', home:'Skócia 🏴󠁧󠁢󠁳󠁣󠁴󠁿',    away:'Kelet-Timor 🇹🇱',  venue:'Seattle' },
  { id:'m029', phase:'group', group:'E', date:'2026-06-22', time:'20:00', home:'Németország 🇩🇪', away:'Kelet-Timor 🇹🇱',  venue:'Kansas City' },
  { id:'m030', phase:'group', group:'E', date:'2026-06-22', time:'20:00', home:'Hollandia 🇳🇱',  away:'Skócia 🏴󠁧󠁢󠁳󠁣󠁴󠁿',      venue:'Houston' },

  // ===== CSOPORT F =====
  { id:'m031', phase:'group', group:'F', date:'2026-06-14', time:'18:00', home:'Spanyolország 🇪🇸', away:'Zöld-foki-sz. 🇨🇻', venue:'Atlanta' },
  { id:'m032', phase:'group', group:'F', date:'2026-06-14', time:'21:00', home:'Szerbia 🇷🇸',    away:'Ecuador 🇪🇨',      venue:'Denver' },
  { id:'m033', phase:'group', group:'F', date:'2026-06-18', time:'21:00', home:'Spanyolország 🇪🇸', away:'Szerbia 🇷🇸',      venue:'Dallas' },
  { id:'m034', phase:'group', group:'F', date:'2026-06-19', time:'12:00', home:'Zöld-foki-sz. 🇨🇻', away:'Ecuador 🇪🇨',    venue:'Philadelphia' },
  { id:'m035', phase:'group', group:'F', date:'2026-06-23', time:'20:00', home:'Spanyolország 🇪🇸', away:'Ecuador 🇪🇨',      venue:'Miami' },
  { id:'m036', phase:'group', group:'F', date:'2026-06-23', time:'20:00', home:'Szerbia 🇷🇸',    away:'Zöld-foki-sz. 🇨🇻', venue:'Boston' },

  // ===== CSOPORT G =====
  { id:'m037', phase:'group', group:'G', date:'2026-06-15', time:'12:00', home:'Franciaország 🇫🇷', away:'Szenegál 🇸🇳',     venue:'New York' },
  { id:'m038', phase:'group', group:'G', date:'2026-06-15', time:'15:00', home:'Dánia 🇩🇰',      away:'Vietnám 🇻🇳',      venue:'Los Angeles' },
  { id:'m039', phase:'group', group:'G', date:'2026-06-19', time:'15:00', home:'Franciaország 🇫🇷', away:'Dánia 🇩🇰',        venue:'Seattle' },
  { id:'m040', phase:'group', group:'G', date:'2026-06-19', time:'18:00', home:'Szenegál 🇸🇳',   away:'Vietnám 🇻🇳',      venue:'Dallas' },
  { id:'m041', phase:'group', group:'G', date:'2026-06-23', time:'20:00', home:'Franciaország 🇫🇷', away:'Vietnám 🇻🇳',      venue:'Kansas City' },
  { id:'m042', phase:'group', group:'G', date:'2026-06-23', time:'20:00', home:'Dánia 🇩🇰',      away:'Szenegál 🇸🇳',     venue:'Boston' },

  // ===== CSOPORT H =====
  { id:'m043', phase:'group', group:'H', date:'2026-06-15', time:'18:00', home:'Portugália 🇵🇹', away:'Zimbabve 🇿🇼',      venue:'Atlanta' },
  { id:'m044', phase:'group', group:'H', date:'2026-06-15', time:'21:00', home:'Kolumbia 🇨🇴',   away:'Görögország 🇬🇷',   venue:'San Francisco' },
  { id:'m045', phase:'group', group:'H', date:'2026-06-19', time:'21:00', home:'Portugália 🇵🇹', away:'Kolumbia 🇨🇴',      venue:'New York' },
  { id:'m046', phase:'group', group:'H', date:'2026-06-20', time:'12:00', home:'Zimbabve 🇿🇼',   away:'Görögország 🇬🇷',   venue:'Dallas' },
  { id:'m047', phase:'group', group:'H', date:'2026-06-24', time:'20:00', home:'Portugália 🇵🇹', away:'Görögország 🇬🇷',   venue:'Houston' },
  { id:'m048', phase:'group', group:'H', date:'2026-06-24', time:'20:00', home:'Kolumbia 🇨🇴',   away:'Zimbabve 🇿🇼',      venue:'Seattle' },

  // ===== CSOPORT I =====
  { id:'m049', phase:'group', group:'I', date:'2026-06-16', time:'12:00', home:'Anglia 🏴󠁧󠁢󠁥󠁮󠁧󠁿',     away:'Csád 🇹🇩',         venue:'New York' },
  { id:'m050', phase:'group', group:'I', date:'2026-06-16', time:'15:00', home:'Mexikó 🇲🇽',     away:'Szenegál 🇸🇳',     venue:'México City' },
  { id:'m051', phase:'group', group:'I', date:'2026-06-20', time:'15:00', home:'Anglia 🏴󠁧󠁢󠁥󠁮󠁧󠁿',     away:'Mexikó 🇲🇽',       venue:'Dallas' },
  { id:'m052', phase:'group', group:'I', date:'2026-06-20', time:'18:00', home:'Csád 🇹🇩',       away:'Szenegál 🇸🇳',     venue:'Atlanta' },
  { id:'m053', phase:'group', group:'I', date:'2026-06-24', time:'20:00', home:'Anglia 🏴󠁧󠁢󠁥󠁮󠁧󠁿',     away:'Szenegál 🇸🇳',     venue:'San Francisco' },
  { id:'m054', phase:'group', group:'I', date:'2026-06-24', time:'20:00', home:'Mexikó 🇲🇽',     away:'Csád 🇹🇩',         venue:'Guadalajara' },

  // ===== CSOPORT J =====
  { id:'m055', phase:'group', group:'J', date:'2026-06-16', time:'18:00', home:'Dél-Korea 🇰🇷',  away:'Australia 🇦🇺',     venue:'Seattle' },
  { id:'m056', phase:'group', group:'J', date:'2026-06-16', time:'21:00', home:'Ausztria 🇦🇹',   away:'Chile 🇨🇱',        venue:'Philadelphia' },
  { id:'m057', phase:'group', group:'J', date:'2026-06-20', time:'21:00', home:'Dél-Korea 🇰🇷',  away:'Ausztria 🇦🇹',     venue:'Kansas City' },
  { id:'m058', phase:'group', group:'J', date:'2026-06-21', time:'12:00', home:'Australia 🇦🇺',  away:'Chile 🇨🇱',        venue:'Los Angeles' },
  { id:'m059', phase:'group', group:'J', date:'2026-06-25', time:'20:00', home:'Dél-Korea 🇰🇷',  away:'Chile 🇨🇱',        venue:'Houston' },
  { id:'m060', phase:'group', group:'J', date:'2026-06-25', time:'20:00', home:'Ausztria 🇦🇹',   away:'Australia 🇦🇺',    venue:'New York' },

  // ===== CSOPORT K =====
  { id:'m061', phase:'group', group:'K', date:'2026-06-17', time:'12:00', home:'Belgium 🇧🇪',     away:'Ukrajna 🇺🇦',      venue:'Miami' },
  { id:'m062', phase:'group', group:'K', date:'2026-06-17', time:'21:00', home:'Svájc 🇨🇭',      away:'Kamerun 🇨🇲',      venue:'Los Angeles' },
  { id:'m063', phase:'group', group:'K', date:'2026-06-21', time:'15:00', home:'Belgium 🇧🇪',     away:'Svájc 🇨🇭',        venue:'Dallas' },
  { id:'m064', phase:'group', group:'K', date:'2026-06-22', time:'12:00', home:'Ukrajna 🇺🇦',    away:'Kamerun 🇨🇲',      venue:'Seattle' },
  { id:'m065', phase:'group', group:'K', date:'2026-06-25', time:'20:00', home:'Belgium 🇧🇪',     away:'Kamerun 🇨🇲',      venue:'Boston' },
  { id:'m066', phase:'group', group:'K', date:'2026-06-25', time:'20:00', home:'Svájc 🇨🇭',      away:'Ukrajna 🇺🇦',      venue:'Atlanta' },

  // ===== CSOPORT L =====
  { id:'m067', phase:'group', group:'L', date:'2026-06-17', time:'18:00', home:'Olaszország 🇮🇹', away:'Ecuador 🇪🇨',      venue:'Houston' },
  { id:'m068', phase:'group', group:'L', date:'2026-06-18', time:'12:00', home:'Törökország 🇹🇷', away:'Kongó DR 🇨🇩',     venue:'New York' },
  { id:'m069', phase:'group', group:'L', date:'2026-06-22', time:'15:00', home:'Olaszország 🇮🇹', away:'Törökország 🇹🇷',  venue:'San Francisco' },
  { id:'m070', phase:'group', group:'L', date:'2026-06-22', time:'18:00', home:'Ecuador 🇪🇨',    away:'Kongó DR 🇨🇩',     venue:'Denver' },
  { id:'m071', phase:'group', group:'L', date:'2026-06-26', time:'20:00', home:'Olaszország 🇮🇹', away:'Kongó DR 🇨🇩',     venue:'Philadelphia' },
  { id:'m072', phase:'group', group:'L', date:'2026-06-26', time:'20:00', home:'Törökország 🇹🇷', away:'Ecuador 🇪🇨',      venue:'Miami' },

  // ===== KIESÉSES SZAKASZ (TBD) =====
  { id:'r32-1',  phase:'r32',   group:null, date:'2026-06-29', time:'18:00', home:'1A', away:'3BCDE', venue:'TBD' },
  { id:'r32-2',  phase:'r32',   group:null, date:'2026-06-29', time:'21:00', home:'1C', away:'3ABDF', venue:'TBD' },
  { id:'r32-3',  phase:'r32',   group:null, date:'2026-06-30', time:'18:00', home:'1B', away:'3ACDE', venue:'TBD' },
  { id:'r32-4',  phase:'r32',   group:null, date:'2026-06-30', time:'21:00', home:'1D', away:'3ABCF', venue:'TBD' },
  { id:'r32-5',  phase:'r32',   group:null, date:'2026-07-01', time:'18:00', home:'1E', away:'3ABCG', venue:'TBD' },
  { id:'r32-6',  phase:'r32',   group:null, date:'2026-07-01', time:'21:00', home:'1F', away:'3ABCH', venue:'TBD' },
  { id:'r32-7',  phase:'r32',   group:null, date:'2026-07-02', time:'18:00', home:'1G', away:'2H',    venue:'TBD' },
  { id:'r32-8',  phase:'r32',   group:null, date:'2026-07-02', time:'21:00', home:'1H', away:'2G',    venue:'TBD' },
  { id:'r32-9',  phase:'r32',   group:null, date:'2026-07-03', time:'18:00', home:'1I', away:'2J',    venue:'TBD' },
  { id:'r32-10', phase:'r32',   group:null, date:'2026-07-03', time:'21:00', home:'1J', away:'2I',    venue:'TBD' },
  { id:'r32-11', phase:'r32',   group:null, date:'2026-07-04', time:'18:00', home:'1K', away:'2L',    venue:'TBD' },
  { id:'r32-12', phase:'r32',   group:null, date:'2026-07-04', time:'21:00', home:'1L', away:'2K',    venue:'TBD' },
  { id:'r32-13', phase:'r32',   group:null, date:'2026-07-05', time:'18:00', home:'2A', away:'2B',    venue:'TBD' },
  { id:'r32-14', phase:'r32',   group:null, date:'2026-07-05', time:'21:00', home:'2C', away:'2D',    venue:'TBD' },
  { id:'r32-15', phase:'r32',   group:null, date:'2026-07-06', time:'18:00', home:'2E', away:'2F',    venue:'TBD' },
  { id:'r32-16', phase:'r32',   group:null, date:'2026-07-06', time:'21:00', home:'3FGHIJ', away:'3FGHIK', venue:'TBD' },

  { id:'r16-1',  phase:'r16',   group:null, date:'2026-07-09', time:'18:00', home:'R32W1', away:'R32W2', venue:'TBD' },
  { id:'r16-2',  phase:'r16',   group:null, date:'2026-07-09', time:'21:00', home:'R32W3', away:'R32W4', venue:'TBD' },
  { id:'r16-3',  phase:'r16',   group:null, date:'2026-07-10', time:'18:00', home:'R32W5', away:'R32W6', venue:'TBD' },
  { id:'r16-4',  phase:'r16',   group:null, date:'2026-07-10', time:'21:00', home:'R32W7', away:'R32W8', venue:'TBD' },
  { id:'r16-5',  phase:'r16',   group:null, date:'2026-07-11', time:'18:00', home:'R32W9', away:'R32W10', venue:'TBD' },
  { id:'r16-6',  phase:'r16',   group:null, date:'2026-07-11', time:'21:00', home:'R32W11', away:'R32W12', venue:'TBD' },
  { id:'r16-7',  phase:'r16',   group:null, date:'2026-07-12', time:'18:00', home:'R32W13', away:'R32W14', venue:'TBD' },
  { id:'r16-8',  phase:'r16',   group:null, date:'2026-07-12', time:'21:00', home:'R32W15', away:'R32W16', venue:'TBD' },

  { id:'qf-1',  phase:'qf',    group:null, date:'2026-07-14', time:'18:00', home:'R16W1', away:'R16W2', venue:'TBD' },
  { id:'qf-2',  phase:'qf',    group:null, date:'2026-07-14', time:'21:00', home:'R16W3', away:'R16W4', venue:'TBD' },
  { id:'qf-3',  phase:'qf',    group:null, date:'2026-07-15', time:'18:00', home:'R16W5', away:'R16W6', venue:'TBD' },
  { id:'qf-4',  phase:'qf',    group:null, date:'2026-07-15', time:'21:00', home:'R16W7', away:'R16W8', venue:'TBD' },

  { id:'sf-1',  phase:'sf',    group:null, date:'2026-07-17', time:'21:00', home:'QFW1',  away:'QFW2',  venue:'Atlanta' },
  { id:'sf-2',  phase:'sf',    group:null, date:'2026-07-18', time:'21:00', home:'QFW3',  away:'QFW4',  venue:'Dallas' },

  { id:'final', phase:'final', group:null, date:'2026-07-19', time:'21:00', home:'SFW1',  away:'SFW2',  venue:'MetLife Stadium, New York' },
];
