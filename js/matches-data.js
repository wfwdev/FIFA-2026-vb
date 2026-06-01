// WFW Tippelő – FIFA VB 2026 Meccsadatok
// Forrás: FIFA hivatalos menetrend

window.ROUNDS = [
  "A csoport", "B csoport", "C csoport", "D csoport",
  "E csoport", "F csoport", "G csoport", "H csoport",
  "I csoport", "J csoport", "K csoport", "L csoport",
  "Egyenes kiesés"
];

window.MATCHES = [
  // ── A CSOPORT ──────────────────────────────
  { id:"a1",  round:"A csoport", date:"2026-06-11", home:"Mexikó",        homeFlag:"🇲🇽", away:"Dél-Afrika",    awayFlag:"🇿🇦", result:null },
  { id:"a2",  round:"A csoport", date:"2026-06-12", home:"Kamerun",       homeFlag:"🇨🇲", away:"Horvátország",  awayFlag:"🇭🇷", result:null },
  { id:"a3",  round:"A csoport", date:"2026-06-16", home:"Dél-Afrika",    awayFlag:"🇲🇽", away:"Kamerun",       homeFlag:"🇿🇦", result:null },
  { id:"a4",  round:"A csoport", date:"2026-06-16", home:"Horvátország",  homeFlag:"🇭🇷", away:"Mexikó",        awayFlag:"🇲🇽", result:null },
  { id:"a5",  round:"A csoport", date:"2026-06-20", home:"Horvátország",  homeFlag:"🇭🇷", away:"Dél-Afrika",    awayFlag:"🇿🇦", result:null },
  { id:"a6",  round:"A csoport", date:"2026-06-20", home:"Kamerun",       homeFlag:"🇨🇲", away:"Mexikó",        awayFlag:"🇲🇽", result:null },

  // ── B CSOPORT ──────────────────────────────
  { id:"b1",  round:"B csoport", date:"2026-06-12", home:"Argentína",     homeFlag:"🇦🇷", away:"Albánia",       awayFlag:"🇦🇱", result:null },
  { id:"b2",  round:"B csoport", date:"2026-06-12", home:"Ukrajna",       homeFlag:"🇺🇦", away:"Irak",          awayFlag:"🇮🇶", result:null },
  { id:"b3",  round:"B csoport", date:"2026-06-16", home:"Albánia",       homeFlag:"🇦🇱", away:"Ukrajna",       awayFlag:"🇺🇦", result:null },
  { id:"b4",  round:"B csoport", date:"2026-06-16", home:"Irak",          homeFlag:"🇮🇶", away:"Argentína",     awayFlag:"🇦🇷", result:null },
  { id:"b5",  round:"B csoport", date:"2026-06-20", home:"Irak",          homeFlag:"🇮🇶", away:"Albánia",       awayFlag:"🇦🇱", result:null },
  { id:"b6",  round:"B csoport", date:"2026-06-20", home:"Argentína",     homeFlag:"🇦🇷", away:"Ukrajna",       awayFlag:"🇺🇦", result:null },

  // ── C CSOPORT ──────────────────────────────
  { id:"c1",  round:"C csoport", date:"2026-06-13", home:"USA",           homeFlag:"🇺🇸", away:"Panama",        awayFlag:"🇵🇦", result:null },
  { id:"c2",  round:"C csoport", date:"2026-06-13", home:"Szerbia",       homeFlag:"🇷🇸", away:"Zöld-foki-szk.",awayFlag:"🇨🇻", result:null },
  { id:"c3",  round:"C csoport", date:"2026-06-17", home:"Panama",        homeFlag:"🇵🇦", away:"Szerbia",       awayFlag:"🇷🇸", result:null },
  { id:"c4",  round:"C csoport", date:"2026-06-17", home:"Zöld-foki-szk.",homeFlag:"🇨🇻", away:"USA",           awayFlag:"🇺🇸", result:null },
  { id:"c5",  round:"C csoport", date:"2026-06-22", home:"Szerbia",       homeFlag:"🇷🇸", away:"USA",           awayFlag:"🇺🇸", result:null },
  { id:"c6",  round:"C csoport", date:"2026-06-22", home:"Panama",        homeFlag:"🇵🇦", away:"Zöld-foki-szk.",awayFlag:"🇨🇻", result:null },

  // ── D CSOPORT ──────────────────────────────
  { id:"d1",  round:"D csoport", date:"2026-06-13", home:"Brazília",      homeFlag:"🇧🇷", away:"Marokkó",       awayFlag:"🇲🇦", result:null },
  { id:"d2",  round:"D csoport", date:"2026-06-13", home:"Japán",         homeFlag:"🇯🇵", away:"Ausztrália",    awayFlag:"🇦🇺", result:null },
  { id:"d3",  round:"D csoport", date:"2026-06-17", home:"Marokkó",       homeFlag:"🇲🇦", away:"Japán",         awayFlag:"🇯🇵", result:null },
  { id:"d4",  round:"D csoport", date:"2026-06-18", home:"Ausztrália",    homeFlag:"🇦🇺", away:"Brazília",      awayFlag:"🇧🇷", result:null },
  { id:"d5",  round:"D csoport", date:"2026-06-22", home:"Ausztrália",    homeFlag:"🇦🇺", away:"Marokkó",       awayFlag:"🇲🇦", result:null },
  { id:"d6",  round:"D csoport", date:"2026-06-22", home:"Brazília",      homeFlag:"🇧🇷", away:"Japán",         awayFlag:"🇯🇵", result:null },

  // ── E CSOPORT ──────────────────────────────
  { id:"e1",  round:"E csoport", date:"2026-06-14", home:"Hollandia",     homeFlag:"🇳🇱", away:"Szenegál",      awayFlag:"🇸🇳", result:null },
  { id:"e2",  round:"E csoport", date:"2026-06-14", home:"Norvégia",      homeFlag:"🇳🇴", away:"Szaúd-Arábia",  awayFlag:"🇸🇦", result:null },
  { id:"e3",  round:"E csoport", date:"2026-06-18", home:"Szenegál",      homeFlag:"🇸🇳", away:"Norvégia",      awayFlag:"🇳🇴", result:null },
  { id:"e4",  round:"E csoport", date:"2026-06-18", home:"Szaúd-Arábia",  homeFlag:"🇸🇦", away:"Hollandia",     awayFlag:"🇳🇱", result:null },
  { id:"e5",  round:"E csoport", date:"2026-06-22", home:"Szaúd-Arábia",  homeFlag:"🇸🇦", away:"Szenegál",      awayFlag:"🇸🇳", result:null },
  { id:"e6",  round:"E csoport", date:"2026-06-22", home:"Hollandia",     homeFlag:"🇳🇱", away:"Norvégia",      awayFlag:"🇳🇴", result:null },

  // ── F CSOPORT ──────────────────────────────
  { id:"f1",  round:"F csoport", date:"2026-06-14", home:"Portugália",    homeFlag:"🇵🇹", away:"Angola",        awayFlag:"🇦🇴", result:null },
  { id:"f2",  round:"F csoport", date:"2026-06-14", home:"Csehország",    homeFlag:"🇨🇿", away:"Costa Rica",    awayFlag:"🇨🇷", result:null },
  { id:"f3",  round:"F csoport", date:"2026-06-18", home:"Angola",        homeFlag:"🇦🇴", away:"Csehország",    awayFlag:"🇨🇿", result:null },
  { id:"f4",  round:"F csoport", date:"2026-06-18", home:"Costa Rica",    homeFlag:"🇨🇷", away:"Portugália",    awayFlag:"🇵🇹", result:null },
  { id:"f5",  round:"F csoport", date:"2026-06-23", home:"Costa Rica",    homeFlag:"🇨🇷", away:"Angola",        awayFlag:"🇦🇴", result:null },
  { id:"f6",  round:"F csoport", date:"2026-06-23", home:"Portugália",    homeFlag:"🇵🇹", away:"Csehország",    awayFlag:"🇨🇿", result:null },

  // ── G CSOPORT ──────────────────────────────
  { id:"g1",  round:"G csoport", date:"2026-06-15", home:"Spanyolország", homeFlag:"🇪🇸", away:"Zöld-foki-szk.",awayFlag:"🇨🇻", result:null },
  { id:"g2",  round:"G csoport", date:"2026-06-15", home:"Csehország",    homeFlag:"🇨🇿", away:"Dél-Afrika",    awayFlag:"🇿🇦", result:null },
  { id:"g3",  round:"G csoport", date:"2026-06-19", home:"Dél-Afrika",    homeFlag:"🇿🇦", away:"Spanyolország", awayFlag:"🇪🇸", result:null },
  { id:"g4",  round:"G csoport", date:"2026-06-19", home:"Zöld-foki-szk.",homeFlag:"🇨🇻", away:"Csehország",    awayFlag:"🇨🇿", result:null },
  { id:"g5",  round:"G csoport", date:"2026-06-23", home:"Zöld-foki-szk.",homeFlag:"🇨🇻", away:"Dél-Afrika",    awayFlag:"🇿🇦", result:null },
  { id:"g6",  round:"G csoport", date:"2026-06-23", home:"Spanyolország", homeFlag:"🇪🇸", away:"Csehország",    awayFlag:"🇨🇿", result:null },

  // ── H CSOPORT ──────────────────────────────
  { id:"h1",  round:"H csoport", date:"2026-06-15", home:"Franciaország", homeFlag:"🇫🇷", away:"Szenegál",      awayFlag:"🇸🇳", result:null },
  { id:"h2",  round:"H csoport", date:"2026-06-15", home:"Ekvádor",       homeFlag:"🇪🇨", away:"Üzbegisztán",   awayFlag:"🇺🇿", result:null },
  { id:"h3",  round:"H csoport", date:"2026-06-19", home:"Szenegál",      homeFlag:"🇸🇳", away:"Ekvádor",       awayFlag:"🇪🇨", result:null },
  { id:"h4",  round:"H csoport", date:"2026-06-19", home:"Üzbegisztán",   homeFlag:"🇺🇿", away:"Franciaország", awayFlag:"🇫🇷", result:null },
  { id:"h5",  round:"H csoport", date:"2026-06-23", home:"Üzbegisztán",   homeFlag:"🇺🇿", away:"Szenegál",      awayFlag:"🇸🇳", result:null },
  { id:"h6",  round:"H csoport", date:"2026-06-23", home:"Franciaország", homeFlag:"🇫🇷", away:"Ekvádor",       awayFlag:"🇪🇨", result:null },

  // ── I CSOPORT ──────────────────────────────
  { id:"i1",  round:"I csoport", date:"2026-06-16", home:"Németország",   homeFlag:"🇩🇪", away:"Szaúd-Arábia",  awayFlag:"🇸🇦", result:null },
  { id:"i2",  round:"I csoport", date:"2026-06-16", home:"Kolumbia",      homeFlag:"🇨🇴", away:"Kongó DR",      awayFlag:"🇨🇩", result:null },
  { id:"i3",  round:"I csoport", date:"2026-06-20", home:"Szaúd-Arábia",  homeFlag:"🇸🇦", away:"Kolumbia",      awayFlag:"🇨🇴", result:null },
  { id:"i4",  round:"I csoport", date:"2026-06-20", home:"Kongó DR",      homeFlag:"🇨🇩", away:"Németország",   awayFlag:"🇩🇪", result:null },
  { id:"i5",  round:"I csoport", date:"2026-06-24", home:"Kongó DR",      homeFlag:"🇨🇩", away:"Szaúd-Arábia",  awayFlag:"🇸🇦", result:null },
  { id:"i6",  round:"I csoport", date:"2026-06-24", home:"Németország",   homeFlag:"🇩🇪", away:"Kolumbia",      awayFlag:"🇨🇴", result:null },

  // ── J CSOPORT ──────────────────────────────
  { id:"j1",  round:"J csoport", date:"2026-06-16", home:"Anglia",        homeFlag:"🏴󠁧󠁢󠁥󠁮󠁧󠁿", away:"Panama",        awayFlag:"🇵🇦", result:null },
  { id:"j2",  round:"J csoport", date:"2026-06-16", home:"Tunézia",       homeFlag:"🇹🇳", away:"Guatemala",     awayFlag:"🇬🇹", result:null },
  { id:"j3",  round:"J csoport", date:"2026-06-20", home:"Panama",        homeFlag:"🇵🇦", away:"Tunézia",       awayFlag:"🇹🇳", result:null },
  { id:"j4",  round:"J csoport", date:"2026-06-20", home:"Guatemala",     homeFlag:"🇬🇹", away:"Anglia",        awayFlag:"🏴󠁧󠁢󠁥󠁮󠁧󠁿", result:null },
  { id:"j5",  round:"J csoport", date:"2026-06-24", home:"Guatemala",     homeFlag:"🇬🇹", away:"Panama",        awayFlag:"🇵🇦", result:null },
  { id:"j6",  round:"J csoport", date:"2026-06-24", home:"Anglia",        homeFlag:"🏴󠁧󠁢󠁥󠁮󠁧󠁿", away:"Tunézia",       awayFlag:"🇹🇳", result:null },

  // ── K CSOPORT ──────────────────────────────
  { id:"k1",  round:"K csoport", date:"2026-06-17", home:"Kanada",        homeFlag:"🇨🇦", away:"Curacao",       awayFlag:"🇨🇼", result:null },
  { id:"k2",  round:"K csoport", date:"2026-06-17", home:"Lengyelország",  homeFlag:"🇵🇱", away:"Jordánia",      awayFlag:"🇯🇴", result:null },
  { id:"k3",  round:"K csoport", date:"2026-06-21", home:"Curacao",       homeFlag:"🇨🇼", away:"Lengyelország",  awayFlag:"🇵🇱", result:null },
  { id:"k4",  round:"K csoport", date:"2026-06-21", home:"Jordánia",      homeFlag:"🇯🇴", away:"Kanada",        awayFlag:"🇨🇦", result:null },
  { id:"k5",  round:"K csoport", date:"2026-06-25", home:"Jordánia",      homeFlag:"🇯🇴", away:"Curacao",       awayFlag:"🇨🇼", result:null },
  { id:"k6",  round:"K csoport", date:"2026-06-25", home:"Kanada",        homeFlag:"🇨🇦", away:"Lengyelország",  awayFlag:"🇵🇱", result:null },

  // ── L CSOPORT ──────────────────────────────
  { id:"l1",  round:"L csoport", date:"2026-06-17", home:"Belgium",       homeFlag:"🇧🇪", away:"Ukrajna",       awayFlag:"🇺🇦", result:null },
  { id:"l2",  round:"L csoport", date:"2026-06-17", home:"Olaszország",   homeFlag:"🇮🇹", away:"Egyenlítői-Guineai",awayFlag:"🇬🇶", result:null },
  { id:"l3",  round:"L csoport", date:"2026-06-21", home:"Ukrajna",       homeFlag:"🇺🇦", away:"Olaszország",   awayFlag:"🇮🇹", result:null },
  { id:"l4",  round:"L csoport", date:"2026-06-21", home:"Egyenlítői-Guineai",homeFlag:"🇬🇶", away:"Belgium",   awayFlag:"🇧🇪", result:null },
  { id:"l5",  round:"L csoport", date:"2026-06-25", home:"Egyenlítői-Guineai",homeFlag:"🇬🇶", away:"Ukrajna",   awayFlag:"🇺🇦", result:null },
  { id:"l6",  round:"L csoport", date:"2026-06-25", home:"Belgium",       homeFlag:"🇧🇪", away:"Olaszország",   awayFlag:"🇮🇹", result:null },

  // ── EGYENES KIESÉS (pl. – a párok majd kiegészülnek) ──
  { id:"r32_1", round:"Egyenes kiesés", date:"2026-06-29", home:"TBD",   homeFlag:"🏳", away:"TBD",            awayFlag:"🏳", result:null },
  { id:"r32_2", round:"Egyenes kiesés", date:"2026-06-29", home:"TBD",   homeFlag:"🏳", away:"TBD",            awayFlag:"🏳", result:null },
  { id:"r32_3", round:"Egyenes kiesés", date:"2026-06-30", home:"TBD",   homeFlag:"🏳", away:"TBD",            awayFlag:"🏳", result:null },
  { id:"r32_4", round:"Egyenes kiesés", date:"2026-06-30", home:"TBD",   homeFlag:"🏳", away:"TBD",            awayFlag:"🏳", result:null },
  { id:"r32_5", round:"Egyenes kiesés", date:"2026-07-01", home:"TBD",   homeFlag:"🏳", away:"TBD",            awayFlag:"🏳", result:null },
  { id:"r32_6", round:"Egyenes kiesés", date:"2026-07-01", home:"TBD",   homeFlag:"🏳", away:"TBD",            awayFlag:"🏳", result:null },
];
