const profilesDB = {
  IPE200: { Iz: 1940, It: 24.9, Iw: 143000, Wpl: 357, h: 200, b: 100, tf: 8.5, tw: 5.6, c: 45.75 },
  IPE240: { Iz: 3890, It: 50.1, Iw: 392000, Wpl: 629, h: 240, b: 120, tf: 9.8, tw: 6.2, c: 55.2 },
  IPE270: { Iz: 5790, It: 74.5, Iw: 702000, Wpl: 878, h: 270, b: 135, tf: 10.2, tw: 6.6, c: 62.4 },
  IPE300: { Iz: 8560, It: 110, Iw: 1250000, Wpl: 1260, h: 300, b: 150, tf: 10.7, tw: 7.1, c: 69.3 },
  IPE330: { Iz: 11800, It: 150, Iw: 1960000, Wpl: 1640, h: 330, b: 160, tf: 11.5, tw: 7.5, c: 74.5 },
  IPE360: { Iz: 16300, It: 210, Iw: 3130000, Wpl: 2160, h: 360, b: 170, tf: 12.7, tw: 8.0, c: 79.6 },
  IPE400: { Iz: 23100, It: 290, Iw: 5140000, Wpl: 2900, h: 400, b: 180, tf: 13.5, tw: 8.6, c: 86.5 },
  IPE450: { Iz: 33700, It: 410, Iw: 8610000, Wpl: 4040, h: 450, b: 190, tf: 14.6, tw: 9.4, c: 95.4 },
  IPE500: { Iz: 48200, It: 570, Iw: 13900000, Wpl: 5550, h: 500, b: 200, tf: 16.0, tw: 10.2, c: 100 },
  HEA200: { Iz: 3690, It: 44.9, Iw: 349000, Wpl: 515, h: 190, b: 200, tf: 10, tw: 6.5, c: 90 },
  HEA240: { Iz: 7760, It: 88.7, Iw: 915000, Wpl: 937, h: 230, b: 240, tf: 12, tw: 7.5, c: 108 },
  HEA280: { Iz: 13600, It: 157, Iw: 2020000, Wpl: 1520, h: 270, b: 280, tf: 13, tw: 8, c: 127 },
  HEA300: { Iz: 18300, It: 215, Iw: 2960000, Wpl: 1950, h: 290, b: 300, tf: 14, tw: 8.5, c: 136 },
  HEA320: { Iz: 22900, It: 275, Iw: 4020000, Wpl: 2420, h: 310, b: 300, tf: 15.5, tw: 9, c: 134.5 },
  HEA340: { Iz: 28300, It: 343, Iw: 5390000, Wpl: 2950, h: 330, b: 300, tf: 16.5, tw: 9.5, c: 133.5 },
  HEA360: { Iz: 34700, It: 423, Iw: 7150000, Wpl: 3560, h: 350, b: 300, tf: 17.5, tw: 10, c: 132.5 },
  HEB200: { Iz: 5700, It: 70.1, Iw: 502000, Wpl: 754, h: 200, b: 200, tf: 15, tw: 9, c: 85 },
  HEB240: { Iz: 11200, It: 140, Iw: 1240000, Wpl: 1330, h: 240, b: 240, tf: 17, tw: 10, c: 103 },
  HEB280: { Iz: 19300, It: 244, Iw: 2590000, Wpl: 2190, h: 280, b: 280, tf: 18, tw: 10.5, c: 122 },
  HEB300: { Iz: 25200, It: 325, Iw: 3920000, Wpl: 2790, h: 300, b: 300, tf: 19, tw: 11, c: 131 },
  HEB320: { Iz: 30800, It: 403, Iw: 5190000, Wpl: 3390, h: 320, b: 300, tf: 20.5, tw: 11.5, c: 129.5 },
  HEB340: { Iz: 36700, It: 487, Iw: 6640000, Wpl: 4000, h: 340, b: 300, tf: 21.5, tw: 12, c: 128.5 },
  HEB360: { Iz: 43200, It: 582, Iw: 8390000, Wpl: 4680, h: 360, b: 300, tf: 22.5, tw: 12.5, c: 127.5 },
  IPN200: { Iz: 2140, It: 32.2, Iw: 115000, Wpl: 321, h: 200, b: 90, tf: 10, tw: 7.1, c: 35 },
  IPN240: { Iz: 4250, It: 65.5, Iw: 299000, Wpl: 570, h: 240, b: 106, tf: 11.8, tw: 8.3, c: 41.2 },
  IPN280: { Iz: 7590, It: 119, Iw: 678000, Wpl: 943, h: 280, b: 122, tf: 13.7, tw: 9.5, c: 47.4 },
  IPN300: { Iz: 9800, It: 155, Iw: 977000, Wpl: 1180, h: 300, b: 130, tf: 14.6, tw: 10.1, c: 50.4 },
  IPN320: { Iz: 12500, It: 198, Iw: 1370000, Wpl: 1470, h: 320, b: 138, tf: 15.5, tw: 10.7, c: 53.5 },
  IPN340: { Iz: 15700, It: 250, Iw: 1870000, Wpl: 1810, h: 340, b: 146, tf: 16.5, tw: 11.3, c: 56.5 },
  IPN360: { Iz: 19600, It: 312, Iw: 2540000, Wpl: 2220, h: 360, b: 154, tf: 17.5, tw: 11.9, c: 59.5 }
};

let momentChart = null;
let shearChart = null;
let deflectionChart = null;
let chiChart = null;
let currentLang = 'fr';

Chart.defaults.font.family = "'Inter', sans-serif";
Chart.defaults.color = "#475569";

const coefficientsEC3 = {
  simply: {
    udl: { C1: 1.132, C2: 0.459, C3: 0.525 },
    point: { C1: 1.365, C2: 0.553, C3: 1.730 },
    point_third: { C1: 1.285, C2: 1.562, C3: 0.753 },
    point_end: { C1: 1.565, C2: 1.267, C3: 2.640 },
    triangular: { C1: 1.285, C2: 0.562, C3: 0.753 },
    moment: { C1: 1.000, C2: 0.000, C3: 0.000 }
  },
  fixed: {
    udl: { C1: 1.050, C2: 0.420, C3: 0.480 },
    point: { C1: 1.200, C2: 0.500, C3: 1.500 },
    point_end: { C1: 1.400, C2: 1.100, C3: 2.200 },
    moment: { C1: 1.000, C2: 0.000, C3: 0.000 }
  },
  mixed: {
    udl: { C1: 1.090, C2: 0.440, C3: 0.500 },
    point: { C1: 1.280, C2: 0.520, C3: 1.600 },
    moment: { C1: 1.000, C2: 0.000, C3: 0.000 }
  },
  cantilever: {
    udl: { C1: 1.350, C2: 0.550, C3: 0.600 },
    point_end: { C1: 1.040, C2: 0.420, C3: 0.550 }
  },
  doublecantilever: {
    udl: { C1: 1.132, C2: 0.459, C3: 0.525 }
  },
  continuous: {
    udl: { C1: 1.120, C2: 0.450, C3: 0.510 }
  }
};

/* =========================================================
   UTILITIES
   ========================================================= */
function getValue(id) { return parseFloat(document.getElementById(id).value); }

function formatNumber(n, decimals=1) {
  if(isNaN(n) || !isFinite(n) || n === 0) return "-";
  return n.toLocaleString(currentLang === 'fr' ? "fr-FR" : "en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
}

function getCoefficients() {
  const support = document.getElementById('support').value;
  const loading = document.getElementById('loading').value;
  const defaultCoeff = { C1: 1.132, C2: 0.459, C3: 0.525 };
  if(coefficientsEC3[support] && coefficientsEC3[support][loading]) return coefficientsEC3[support][loading];
  if(coefficientsEC3.simply && coefficientsEC3.simply[loading]) return coefficientsEC3.simply[loading];
  return defaultCoeff;
}

function updateCoefficientsDisplay() {
  const { C1, C2, C3 } = getCoefficients();
  document.getElementById('c1Display').innerHTML = C1.toFixed(3);
  document.getElementById('c2Display').innerHTML = C2.toFixed(3);
  document.getElementById('c3Display').innerHTML = C3.toFixed(3);
}

function updateProfile() {
  const profile = document.getElementById('profile').value;
  const data = profilesDB[profile];
  if(data) {
    document.getElementById('pillProfile').innerHTML = profile;
    document.getElementById('iz').innerHTML = formatNumber(data.Iz, 0) + " cm⁴";
    document.getElementById('it').innerHTML = formatNumber(data.It, 1) + " cm⁴";
    document.getElementById('iw').innerHTML = formatNumber(data.Iw, 0) + " cm⁶";
    document.getElementById('wpl').innerHTML = formatNumber(data.Wpl, 0) + " cm³";
  }
  calculate();
}

function updateSteel() { calculate(); }
function updateSupport() { updateCoefficientsDisplay(); calculate(); }
function updateLoading() { updateCoefficientsDisplay(); calculate(); }

function switchTab(tabName) {
  document.getElementById('tabDiagram').classList.remove('active');
  document.getElementById('tabDeformed').classList.remove('active');
  document.getElementById('tab-diagram').classList.remove('active');
  document.getElementById('tab-deformed').classList.remove('active');
  
  if(tabName === 'diagram') {
    document.getElementById('tabDiagram').classList.add('active');
    document.getElementById('tab-diagram').classList.add('active');
  } else {
    document.getElementById('tabDeformed').classList.add('active');
    document.getElementById('tab-deformed').classList.add('active');
  }
}

/* =========================================================
   MECHANIC CALCULATIONS
   ========================================================= */
function getBetaW(sectionClass) {
  if(sectionClass === 1 || sectionClass === 2) return 1.0;
  if(sectionClass === 3) return 0.92;
  return 0.85;
}

function getSupportK(support) {
  switch(support) {
    case 'simply': return 1.0;
    case 'fixed': return 0.5;
    case 'mixed': return 0.7;
    case 'cantilever': return 2.1;
    case 'doublecantilever': return 1.0;
    case 'continuous': return 0.85;
    default: return 1.0;
  }
}

function getMomentMax(L, loading, support, qElu) {
  let Mmax = 0;
  if(support === 'cantilever') {
    if(loading === 'udl') Mmax = qElu * L * L / 2;
    else if(loading === 'point_end') Mmax = (qElu * L) * L;
    else Mmax = qElu * L * L / 8;
  } else if(support === 'doublecantilever') {
    Mmax = qElu * L * L / 12;
  } else if(support === 'continuous') {
    Mmax = qElu * L * L / 12;
  } else if(support === 'mixed') {
    if(loading === 'udl') Mmax = qElu * L * L / 8;
    else Mmax = qElu * L * L / 4;
  } else {
    if(loading === 'udl') Mmax = qElu * L * L / 8;
    else if(loading === 'point') Mmax = qElu * L * L / 4;
    else if(loading === 'point_third') Mmax = qElu * L * L / 5.5;
    else if(loading === 'moment') Mmax = qElu * L;
    else Mmax = qElu * L * L / 8;
  }
  return Mmax;
}

function getDeflection(L, loading, support, qEls, profileData) {
  if(!profileData) return 0;
  const E = 210000;
  const Iz = profileData.Iz * 1e4;
  const L_mm = L * 1000;
  let deflection = 0;
  if(support === 'cantilever') {
    if(loading === 'udl') deflection = qEls * Math.pow(L_mm, 4) / (8 * E * Iz);
    else deflection = (qEls * L) * Math.pow(L_mm, 3) / (3 * E * Iz);
  } else if(support === 'doublecantilever') {
    deflection = qEls * Math.pow(L_mm, 4) / (384 * E * Iz);
  } else {
    if(loading === 'udl') deflection = 5 * qEls * Math.pow(L_mm, 4) / (384 * E * Iz);
    else if(loading === 'point') deflection = (qEls * L) * Math.pow(L_mm, 3) / (48 * E * Iz);
    else deflection = 5 * qEls * Math.pow(L_mm, 4) / (384 * E * Iz);
  }
  return deflection;
}

function calculateMcrParams(L, support, zg, data) {
  const E = 210000, G = 80769;
  const Iz = data.Iz * 1e4, It = data.It * 1e4, Iw = data.Iw * 1e6;
  const k = getSupportK(support);
  const { C1, C2, C3 } = getCoefficients();
  const L_mm = L * 1000;
  const kL = k * L_mm;
  const pi2 = Math.PI * Math.PI;
  const term1 = (C1 * pi2 * E * Iz) / (kL * kL);
  const term2 = (k / 1.0) * (k / 1.0) * (Iw / Iz);
  const term3 = (G * It * kL * kL) / (pi2 * E * Iz);
  const term4 = (C2 * zg) * (C2 * zg);
  return (term1 * Math.sqrt(term2 + term3 + term4)) / 1e6;
}

function calculateMcr() {
  const L = getValue('L');
  const profile = document.getElementById('profile').value;
  const support = document.getElementById('support').value;
  const zg = getValue('zg');
  const data = profilesDB[profile];
  if(!data) return 0;
  const k = getSupportK(support);
  document.getElementById('kCoeff').innerHTML = k.toFixed(2);
  return calculateMcrParams(L, support, zg, data);
}

/* =========================================================
   MAIN CALCULATE FUNCTION
   ========================================================= */
let lastCalcData = null;

function calculate(skipSave = false) {
  const profile = document.getElementById('profile').value;
  const fy = getValue('steel');
  const alphaLT = getValue('alphaLT');
  const L = getValue('L');
  const support = document.getElementById('support').value;
  const loading = document.getElementById('loading').value;
  const sectionClass = parseInt(document.getElementById('sectionClass').value);
  const Gk = getValue('Gk'), Qk = getValue('Qk');
  const zg = getValue('zg');
  const data = profilesDB[profile];
  if(!data) return;

  const qElu = 1.35 * Gk + 1.5 * Qk;
  const qEls = Gk + Qk;
  const MEd = getMomentMax(L, loading, support, qElu);
  
  document.getElementById('pillMmax').innerHTML = formatNumber(MEd, 1);
  const supportEl = document.getElementById('support');
  document.getElementById('pillSupport').innerHTML = supportEl.options[supportEl.selectedIndex].text;
  const loadingEl = document.getElementById('loading');
  document.getElementById('pillLoading').innerHTML = loadingEl.options[loadingEl.selectedIndex].text;

  const betaW = getBetaW(sectionClass);
  document.getElementById('betaW').innerHTML = betaW.toFixed(2);
  
  const Mcr = calculateMcr();
  const lambdaLT = Math.sqrt((data.Wpl * 1000 * fy * betaW) / (Mcr * 1e6));
  const phiLT = 0.5 * (1 + alphaLT * (lambdaLT - 0.2) + lambdaLT * lambdaLT);
  let chiLT = 1 / (phiLT + Math.sqrt(Math.max(phiLT * phiLT - lambdaLT * lambdaLT, 0)));
  chiLT = Math.min(chiLT, 1.0);
  const MbRd = chiLT * data.Wpl * 1000 * fy * betaW / 1e6;
  
  document.getElementById('med').innerHTML = formatNumber(MEd, 1) + " kN.m";
  document.getElementById('mcr').innerHTML = formatNumber(Mcr, 1) + " kN.m";
  document.getElementById('lambda').innerHTML = formatNumber(lambdaLT, 3);
  document.getElementById('chi').innerHTML = formatNumber(chiLT, 3);
  document.getElementById('mbRd').innerHTML = formatNumber(MbRd, 1) + " kN.m";
  
  const verifELU = MEd <= MbRd;
  const eluDiv = document.getElementById('verificationELU');
  const tV = currentLang === 'fr' ? 'VÉRIFIÉ' : 'VERIFIED';
  const tNV = currentLang === 'fr' ? 'NON VÉRIFIÉ' : 'NOT VERIFIED';
  if(verifELU) {
    eluDiv.innerHTML = `<span class="status-title">${tV}</span><span>MEd = ${formatNumber(MEd,1)} kN.m &le; Mb,Rd = ${formatNumber(MbRd,1)} kN.m</span>`;
    eluDiv.className = 'verification-box verified-badge';
  } else {
    eluDiv.innerHTML = `<span class="status-title">${tNV}</span><span>MEd = ${formatNumber(MEd,1)} kN.m &gt; Mb,Rd = ${formatNumber(MbRd,1)} kN.m</span>`;
    eluDiv.className = 'verification-box failed-badge';
  }
  
  const deflection = getDeflection(L, loading, support, qEls, data);
  const deflectionLimit = L * 1000 / 250;
  const deflectionRel = deflection > 0 ? (L * 1000 / deflection).toFixed(0) : 0;
  document.getElementById('deflection').innerHTML = formatNumber(deflection, 1) + " mm";
  document.getElementById('deflectionRel').innerHTML = "L/" + deflectionRel;
  document.getElementById('deflectionLimit').innerHTML = formatNumber(deflectionLimit, 1) + " mm";
  document.getElementById('deltaRatio').innerHTML = "1/" + (L * 1000 / deflection).toFixed(0);
  
  const verifELS = deflection <= deflectionLimit;
  const elsDiv = document.getElementById('verificationELS');
  if(verifELS) {
    elsDiv.innerHTML = `<span class="status-title">${tV}</span><span>${currentLang==='fr'?'Flèche':'Deflection'} = ${formatNumber(deflection,1)} mm &le; L/250 = ${formatNumber(deflectionLimit,1)} mm</span>`;
    elsDiv.className = 'verification-box verified-badge';
  } else {
    elsDiv.innerHTML = `<span class="status-title">${tNV}</span><span>${currentLang==='fr'?'Flèche':'Deflection'} = ${formatNumber(deflection,1)} mm &gt; L/250 = ${formatNumber(deflectionLimit,1)} mm</span>`;
    elsDiv.className = 'verification-box failed-badge';
  }

  // Save for modal and URL
  lastCalcData = { profile, L, lambdaLT, chiLT, MEd, MbRd, verifELU, verifELS };
  
  drawDiagrams();
  drawDeflectionDiagram();
  drawSupportDiagram();
  if(!document.getElementById('chiModal').style.display || document.getElementById('chiModal').style.display !== 'none') {
    drawChiLTCurve();
  }
  
  // Suggest optimal
  findOptimalProfile(L, support, loading, Gk, Qk, zg, fy, alphaLT, sectionClass);

  if(!skipSave) {
    saveToHistory();
    if(document.getElementById('comparePanel').style.display === 'block') {
      compareProfiles();
    }
  }
}

/* =========================================================
   DIAGRAMS
   ========================================================= */
function drawDiagrams() {
  const L = getValue('L'), support = document.getElementById('support').value, loading = document.getElementById('loading').value;
  const Gk = getValue('Gk'), Qk = getValue('Qk');
  const qElu = 1.35 * Gk + 1.5 * Qk;
  const Mmax = getMomentMax(L, loading, support, qElu);
  const x = [], M = [], V = [], steps = 300;
  for(let i = 0; i <= steps; i++) {
    const xi = i * L / steps;
    x.push(xi);
    let moment = 0, shear = 0;
    const px = xi / L; // ratio [0, 1]
    
    if(support === 'cantilever') {
      if(loading === 'udl') { moment = - Mmax * Math.pow(1 - px, 2); shear = (2 * Mmax / L) * (1 - px); }
      else { moment = - Mmax * (1 - px); shear = Mmax / L; }
    } else if(support === 'fixed') {
      if(loading === 'udl') { moment = - Mmax + 6 * Mmax * px - 6 * Mmax * px * px; shear = (2 * Mmax / L) * (0.5 - px); }
      else { moment = 4 * Mmax * px * (1 - px); shear = 0; /* approx for other loads if needed */ }
    } else if(support === 'mixed') {
      if(loading === 'udl') { moment = - Mmax + 5 * Mmax * px - 4 * Mmax * px * px; shear = (2 * Mmax / L) * (0.625 - px); }
      else { moment = 4 * Mmax * px * (1 - px); shear = 0; }
    } else {
      // simply supported default
      if(loading === 'udl') { moment = 4 * Mmax * px * (1 - px); shear = (4 * Mmax / L) * (0.5 - px); }
      else if(loading === 'point') { 
        if(px <= 0.5) { moment = 2 * Mmax * px; shear = 2 * Mmax / L; } 
        else { moment = 2 * Mmax * (1 - px); shear = - 2 * Mmax / L; } 
      }
      else if(loading === 'point_end') { moment = - Mmax * (1 - px); shear = Mmax / L; } // fallback
      else if(loading === 'moment') { moment = - Mmax * (1 - px); shear = Mmax / L; } // applied moment at left
      else { moment = 4 * Mmax * px * (1 - px); shear = (4 * Mmax / L) * (0.5 - px); }
    }
    M.push(moment); V.push(shear);
  }
  const textColor = document.documentElement.getAttribute('data-theme') === 'dark' ? '#94a3b8' : '#475569';
  
  const momentCtx = document.getElementById('momentChart').getContext('2d');
  if(momentChart) momentChart.destroy();
  momentChart = new Chart(momentCtx, {
    type: 'line',
    data: { datasets: [{ label: currentLang==='fr'?'Moment fléchissant M(x) [kN.m]':'Bending Moment M(x) [kN.m]', data: x.map((xi, index) => ({ x: xi, y: M[index] })), borderColor: '#ef4444', backgroundColor: 'rgba(239,68,68,0.12)', borderWidth: 2.5, fill: 'origin', tension: 0.25, pointRadius: 0 }] },
    options: { responsive: true, color: textColor, scales: { x: { type: 'linear', min: 0, max: L, position: 'top', ticks:{color:textColor} }, y: { reverse: true, title: { display: true, text: 'M(x) [kN.m]', color: textColor }, ticks:{color:textColor} } } }
  });
  const shearCtx = document.getElementById('shearChart').getContext('2d');
  if(shearChart) shearChart.destroy();
  shearChart = new Chart(shearCtx, {
    type: 'line',
    data: { datasets: [{ label: currentLang==='fr'?'Effort tranchant V(x) [kN]':'Shear Force V(x) [kN]', data: x.map((xi, index) => ({ x: xi, y: V[index] })), borderColor: '#3b82f6', backgroundColor: 'rgba(59,130,246,0.10)', borderWidth: 2.5, fill: true, tension: 0.15, pointRadius: 0 }] },
    options: { responsive: true, color: textColor, scales: { x: { type: 'linear', min: 0, max: L, ticks:{color:textColor} }, y: { title: { display: true, text: 'V(x) [kN]', color:textColor }, ticks:{color:textColor} } } }
  });
}

function drawDeflectionDiagram() {
  const L = getValue('L'), profile = document.getElementById('profile').value;
  const data = profilesDB[profile]; if(!data) return;
  const E = 210000, Iz = data.Iz * 1e4, qEls = getValue('Gk') + getValue('Qk'), L_mm = L * 1000;
  const x = [], w = [], steps = 300;
  for(let i = 0; i <= steps; i++) {
    const xi = i * L / steps; x.push(xi);
    let deflection = 0;
    if(document.getElementById('support').value === 'cantilever') {
      deflection = qEls * Math.pow(L_mm, 4) / (8 * E * Iz) * Math.pow(1 - Math.pow(xi/L, 2), 2);
    } else {
      deflection = 5 * qEls * Math.pow(L_mm, 4) / (384 * E * Iz) * (1 - 2 * Math.pow(xi/L, 2) + Math.pow(xi/L, 4));
    }
    w.push(deflection);
  }
  const maxDeflection = Math.max(...w);
  const textColor = document.documentElement.getAttribute('data-theme') === 'dark' ? '#94a3b8' : '#475569';
  
  const ctx = document.getElementById('deflectionChart').getContext('2d');
  if(deflectionChart) deflectionChart.destroy();
  deflectionChart = new Chart(ctx, {
    type: 'line',
    data: { datasets: [{ label: currentLang==='fr'?'Déformée (amplifiée)':'Deformed shape (amplified)', data: x.map((xi, index) => ({ x: xi, y: w[index] / maxDeflection * 100 })), borderColor: '#22c55e', backgroundColor: 'rgba(34,197,94,0.1)', borderWidth: 2.5, fill: true, tension: 0.3, pointRadius: 0 }] },
    options: { responsive: true, color:textColor, scales: { x: { type: 'linear', min: 0, max: L, ticks:{color:textColor} }, y: { reverse: true, ticks:{display:false} } } }
  });
}

function drawSupportDiagram() {
  const support = document.getElementById('support').value;
  const div = document.getElementById('supportDiagram');
  const kObj = document.getElementById('kCoeff').innerHTML;
  
  let leftSVG = '';
  let rightSVG = '';
  const w = 400, h = 100;
  const yLine = 50;
  const beamColor = document.documentElement.getAttribute('data-theme') === 'dark' ? '#f1f5f9' : '#0f172a';
  const beam = `<line x1="50" y1="${yLine}" x2="350" y2="${yLine}" class="beam-line" stroke="${beamColor}" />`;
  
  const pinSupport = `<polygon points="0,0 -15,20 15,20" class="support-fill" transform="translate({x},${yLine})" /><line x1="-20" y1="${yLine+20}" x2="20" y2="${yLine+20}" class="beam-line" stroke="${beamColor}" stroke-width="2" transform="translate({x},0)" />`;
  const fixedSupport = `<line x1="{x}" y1="${yLine-25}" x2="{x}" y2="${yLine+25}" class="beam-line" stroke="${beamColor}" /><path d="M {x} ${yLine-20} L {x1} ${yLine-10} M {x} ${yLine-10} L {x1} ${yLine} M {x} ${yLine} L {x1} ${yLine+10} M {x} ${yLine+10} L {x1} ${yLine+20}" class="beam-line" stroke="${beamColor}" stroke-width="1" />`;
  
  if (support === 'simply') {
    leftSVG = pinSupport.replaceAll('{x}', '50');
    rightSVG = pinSupport.replaceAll('{x}', '350');
  } else if (support === 'fixed') {
    leftSVG = fixedSupport.replaceAll('{x}', '50').replaceAll('{x1}', '40');
    rightSVG = fixedSupport.replaceAll('{x}', '350').replaceAll('{x1}', '360');
  } else if (support === 'mixed') {
    leftSVG = fixedSupport.replaceAll('{x}', '50').replaceAll('{x1}', '40');
    rightSVG = pinSupport.replaceAll('{x}', '350');
  } else if (support === 'cantilever') {
    leftSVG = fixedSupport.replaceAll('{x}', '50').replaceAll('{x1}', '40');
  } else if (support === 'continuous') {
    leftSVG = pinSupport.replaceAll('{x}', '50');
    const midSVG = pinSupport.replaceAll('{x}', '200');
    rightSVG = pinSupport.replaceAll('{x}', '350') + midSVG;
  }
  
  const svg = `<svg viewBox="0 0 ${w} ${h}" width="100%" height="100%">
    <text x="200" y="20" font-family="Inter" font-size="14" font-weight="600" fill="#64748b" text-anchor="middle">${currentLang === 'fr' ? 'Schéma Statique' : 'Static Scheme'} (k = ${kObj})</text>
    ${beam}
    ${leftSVG}
    ${rightSVG}
  </svg>`;
  
  div.innerHTML = svg;
}

/* =========================================================
   FEATURE 7 : χLT Curve
   ========================================================= */
function openChiModal() {
  document.getElementById('chiModal').style.display = 'flex';
  drawChiLTCurve();
}

function closeChiModal(e) {
  if (e && e.target !== e.currentTarget && !e.target.classList.contains('modal-close')) return;
  document.getElementById('chiModal').style.display = 'none';
}

function drawChiLTCurve() {
  if (!lastCalcData) return;
  const alphas = [0.21, 0.34, 0.49, 0.76];
  const curves = [];
  const labels = [];

  for (let lambda = 0; lambda <= 2.5; lambda += 0.05) {
    labels.push(lambda);
    const row = { x: lambda };
    alphas.forEach((a, i) => {
      const phi = 0.5 * (1 + a * (lambda - 0.2) + lambda * lambda);
      let chi = 1 / (phi + Math.sqrt(Math.max(phi * phi - lambda * lambda, 0)));
      row[`c${i}`] = Math.min(chi, 1.0);
    });
    curves.push(row);
  }

  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const textColor = isDark ? '#94a3b8' : '#475569';
  const gridColor = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)';
  const cColors = isDark 
    ? ['#f1f5f9', '#94a3b8', '#64748b', '#475569'] 
    : ['#0f172a', '#475569', '#64748b', '#94a3b8'];

  const ctx = document.getElementById('chiChart').getContext('2d');
  if(chiChart) chiChart.destroy();
  chiChart = new Chart(ctx, {
    type: 'line',
    data: {
      datasets: [
        { label: 'Courbe a (0.21)', data: curves.map(d => ({x:d.x, y:d.c0})), borderColor: cColors[0], borderWidth: 2.5, pointRadius: 0, borderDash: [5,5] },
        { label: 'Courbe b (0.34)', data: curves.map(d => ({x:d.x, y:d.c1})), borderColor: cColors[1], borderWidth: 2.5, pointRadius: 0, borderDash: [5,5] },
        { label: 'Courbe c (0.49)', data: curves.map(d => ({x:d.x, y:d.c2})), borderColor: cColors[2], borderWidth: 2.5, pointRadius: 0, borderDash: [5,5] },
        { label: 'Courbe d (0.76)', data: curves.map(d => ({x:d.x, y:d.c3})), borderColor: cColors[3], borderWidth: 2.5, pointRadius: 0, borderDash: [5,5] },
        {
          label: `${lastCalcData.profile} (Projet)`,
          data: [{ x: lastCalcData.lambdaLT, y: lastCalcData.chiLT }],
          borderColor: '#6366f1',
          backgroundColor: '#6366f1',
          pointRadius: 6,
          pointHoverRadius: 8,
          showLine: false
        }
      ]
    },
    options: {
      responsive: true,
      color: textColor,
      scales: {
        x: { type: 'linear', min: 0, max: 2.5, title: {display:true, text: 'λ̄LT'}, ticks:{color:textColor} },
        y: { type: 'linear', min: 0, max: 1.1, title: {display:true, text: 'χLT'}, ticks:{color:textColor} }
      },
      plugins: {
        legend: { position: 'bottom', labels: {color:textColor} }
      }
    }
  });
}

/* =========================================================
   FEATURE 8 : Export PDF
   ========================================================= */
function exportPDF() {
  window.print();
}

/* =========================================================
   FEATURE 9 : Compare Profiles
   ========================================================= */
function toggleCompare() {
  const p = document.getElementById('comparePanel');
  if (p.style.display === 'none') {
    p.style.display = 'block';
    p.classList.add('revealed');
    compareProfiles();
    // Scroll to it
    p.scrollIntoView({behavior:'smooth'});
  } else {
    p.style.display = 'none';
  }
}

function compareProfiles() {
  if (!lastCalcData) return;
  const fy = getValue('steel');
  const alphaLT = getValue('alphaLT');
  const L = getValue('L');
  const support = document.getElementById('support').value;
  const loading = document.getElementById('loading').value;
  const sectionClass = parseInt(document.getElementById('sectionClass').value);
  const Gk = getValue('Gk'), Qk = getValue('Qk'), zg = getValue('zg');
  const qElu = 1.35 * Gk + 1.5 * Qk;
  const MEd = getMomentMax(L, loading, support, qElu);
  const betaW = getBetaW(sectionClass);
  const qEls = Gk + Qk;
  const defLimit = L * 1000 / 250;

  const type = document.getElementById('profile').value.substring(0,3);
  const results = [];
  
  Object.keys(profilesDB).forEach(key => {
    if(!key.startsWith(type)) return;
    const data = profilesDB[key];
    const Mcr = calculateMcrParams(L, support, zg, data);
    const lambdaLT = Math.sqrt((data.Wpl * 1000 * fy * betaW) / (Mcr * 1e6));
    const phiLT = 0.5 * (1 + alphaLT * (lambdaLT - 0.2) + lambdaLT * lambdaLT);
    let chiLT = Math.min(1 / (phiLT + Math.sqrt(Math.max(phiLT * phiLT - lambdaLT * lambdaLT, 0))), 1.0);
    const MbRd = chiLT * data.Wpl * 1000 * fy * betaW / 1e6;
    const def = getDeflection(L, loading, support, qEls, data);
    const ok = (MEd <= MbRd) && (def <= defLimit);
    results.push({ key, chiLT, MbRd, ok, def });
  });

  results.sort((a,b) => a.MbRd - b.MbRd);
  
  let html = `<table class="compare-table">
    <tr>
      <th>Profilé</th>
      <th>χLT</th>
      <th>Mb,Rd (kN.m)</th>
      <th>Ratio MEd/MbRd</th>
      <th>Flèche (mm)</th>
      <th>Statut</th>
    </tr>`;
  
  results.forEach(r => {
    const isCurrent = r.key === lastCalcData.profile;
    const trClass = isCurrent ? 'current-row' : (r.ok ? 'ok-row' : 'fail-row');
    const ratio = (MEd / r.MbRd * 100).toFixed(1);
    const tag = r.ok ? `<span class="compare-tag tag-ok">OK</span>` : `<span class="compare-tag tag-fail">KO</span>`;
    html += `<tr class="${trClass}">
      <td>${r.key} ${isCurrent ? '<br><span class="compare-tag tag-current">ACTUEL</span>' : ''}</td>
      <td>${r.chiLT.toFixed(3)}</td>
      <td>${r.MbRd.toFixed(1)}</td>
      <td>${ratio}%</td>
      <td>${r.def.toFixed(1)}</td>
      <td>${tag}</td>
    </tr>`;
  });
  
  html += `</table>`;
  document.getElementById('compareTable').innerHTML = html;
}

/* =========================================================
   FEATURE 10 : History (localStorage)
   ========================================================= */
function saveToHistory() {
  if (!lastCalcData) return;
  const str = localStorage.getItem('spillcalc_history');
  let history = str ? JSON.parse(str) : [];
  
  // Create history entry
  const entry = {
    id: Date.now(),
    date: new Date().toLocaleString(),
    profile: lastCalcData.profile,
    L: lastCalcData.L,
    MEd: formatNumber(lastCalcData.MEd,1),
    MbRd: formatNumber(lastCalcData.MbRd,1),
    ok: lastCalcData.verifELU && lastCalcData.verifELS
  };

  history.unshift(entry);
  if(history.length > 10) history = history.slice(0, 10);
  localStorage.setItem('spillcalc_history', JSON.stringify(history));
  renderHistory();
}

function renderHistory() {
  const div = document.getElementById('historyList');
  const str = localStorage.getItem('spillcalc_history');
  if(!str) { div.innerHTML = `<div style="font-size:12px;color:var(--text-secondary)">Aucun calcul récent</div>`; return; }
  let history = JSON.parse(str);
  
  let html = '';
  history.forEach(h => {
    const badge = h.ok ? `<span class="history-badge badge-ok">OK</span>` : `<span class="history-badge badge-fail">FAIL</span>`;
    html += `
      <div class="history-item">
        <div class="history-item-left">
          <span class="history-item-profile">${h.profile} (L=${h.L}m)</span>
          <span class="history-item-meta">${h.date} — MEd=${h.MEd}</span>
        </div>
        <div class="history-item-right">${badge}</div>
      </div>
    `;
  });
  div.innerHTML = html;
}

function toggleHistory() {
  const p = document.getElementById('historyPanel');
  if (p.style.display === 'none') {
    renderHistory();
    p.style.display = 'block';
    p.classList.add('revealed');
  } else {
    p.style.display = 'none';
  }
}

function clearHistory() {
  localStorage.removeItem('spillcalc_history');
  renderHistory();
}

/* =========================================================
   FEATURE 11 : Dark Mode
   ========================================================= */
function initTheme() {
  const isDark = localStorage.getItem('theme') === 'dark';
  if (isDark) {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.getElementById('iconDark').style.display = 'none';
    document.getElementById('iconLight').style.display = 'block';
  }
}

function toggleDarkMode() {
  const html = document.documentElement;
  const isDark = html.getAttribute('data-theme') === 'dark';
  html.setAttribute('data-theme', isDark ? 'light' : 'dark');
  localStorage.setItem('theme', isDark ? 'light' : 'dark');
  
  if (isDark) {
    document.getElementById('iconLight').style.display = 'none';
    document.getElementById('iconDark').style.display = 'block';
  } else {
    document.getElementById('iconDark').style.display = 'none';
    document.getElementById('iconLight').style.display = 'block';
  }
  
  // Re-draw charts with correct colors
  drawDiagrams();
  drawDeflectionDiagram();
  if(!document.getElementById('chiModal').style.display || document.getElementById('chiModal').style.display !== 'none') {
    drawChiLTCurve();
  }
}

/* =========================================================
   FEATURE 12 : Share URL
   ========================================================= */
function shareURL() {
  const p = {
    pr: document.getElementById('profile').value,
    sc: document.getElementById('sectionClass').value,
    st: document.getElementById('steel').value,
    l: document.getElementById('L').value,
    gk: document.getElementById('Gk').value,
    qk: document.getElementById('Qk').value,
    sp: document.getElementById('support').value,
    ld: document.getElementById('loading').value,
    al: document.getElementById('alphaLT').value,
    zg: document.getElementById('zg').value
  };
  const hash = btoa(JSON.stringify(p));
  window.history.replaceState(null, null, `#${hash}`);
  
  // Copy to clipboard
  const urlToShare = window.location.href;
  navigator.clipboard.writeText(urlToShare).then(() => {
    // Show Toast
    const toast = document.createElement('div');
    toast.className = 'share-toast';
    toast.innerText = currentLang === 'fr' ? 'Lien copié dans le presse-papiers !' : 'Link copied to clipboard!';
    document.body.appendChild(toast);
    setTimeout(() => toast.classList.add('visible'), 100);
    setTimeout(() => {
      toast.classList.remove('visible');
      setTimeout(() => toast.remove(), 400);
    }, 3000);
  }).catch(() => {
    alert(currentLang === 'fr' ? 'Impossible de copier le lien. Copiez-le manuellement depuis la barre d\'adresse.' : 'Could not copy link. Manually copy it from the address bar.');
  });
}

function loadFromURL() {
  if(window.location.hash) {
    try {
      const p = JSON.parse(atob(window.location.hash.substring(1)));
      if(p.pr) document.getElementById('profile').value = p.pr;
      if(p.sc) document.getElementById('sectionClass').value = p.sc;
      if(p.st) document.getElementById('steel').value = p.st;
      if(p.l) document.getElementById('L').value = p.l;
      if(p.gk) document.getElementById('Gk').value = p.gk;
      if(p.qk) document.getElementById('Qk').value = p.qk;
      if(p.sp) document.getElementById('support').value = p.sp;
      if(p.ld) document.getElementById('loading').value = p.ld;
      if(p.al) document.getElementById('alphaLT').value = p.al;
      if(p.zg) document.getElementById('zg').value = p.zg;
    } catch(e) { console.error("Invalid URL parameters"); }
  }
}

/* =========================================================
   FEATURE 13 : Optimal Profile Suggestion
   ========================================================= */
function findOptimalProfile(L, support, loading, Gk, Qk, zg, fy, alphaLT, sectionClass) {
  const panel = document.getElementById('optimalSuggestion');
  const type = document.getElementById('profile').value.substring(0,3);
  const qElu = 1.35 * Gk + 1.5 * Qk;
  const qEls = Gk + Qk;
  const MEd = getMomentMax(L, loading, support, qElu);
  const defLimit = L * 1000 / 250;
  const betaW = getBetaW(sectionClass);

  let optimal = null;
  
  for(let key in profilesDB) {
    if(!key.startsWith(type)) continue;
    const data = profilesDB[key];
    const Mcr = calculateMcrParams(L, support, zg, data);
    const lambdaLT = Math.sqrt((data.Wpl * 1000 * fy * betaW) / (Mcr * 1e6));
    const phiLT = 0.5 * (1 + alphaLT * (lambdaLT - 0.2) + lambdaLT * lambdaLT);
    let chiLT = Math.min(1 / (phiLT + Math.sqrt(Math.max(phiLT * phiLT - lambdaLT * lambdaLT, 0))), 1.0);
    const MbRd = chiLT * data.Wpl * 1000 * fy * betaW / 1e6;
    const def = getDeflection(L, loading, support, qEls, data);
    
    if(MEd <= MbRd && def <= defLimit) {
      optimal = { key, MbRd, def };
      break; 
    }
  }

  if (optimal) {
    panel.style.display = 'block';
    const isCurrent = optimal.key === lastCalcData.profile;
    const title = currentLang === 'fr' ? 'Profilé minimum recommandé' : 'Minimum optimal section';
    if(isCurrent) {
      panel.innerHTML = `<div class="opt-title">${title}</div><div class="opt-item">${optimal.key} <span class="opt-ok">✓ Déjà sélectionné</span></div>`;
    } else {
      panel.innerHTML = `<div class="opt-title">${title}</div>
        <div class="opt-item" onclick="applyOptimal('${optimal.key}')">
          ${optimal.key} 
          <span class="opt-badge">Mb,Rd = ${optimal.MbRd.toFixed(0)}</span>
          <span style="flex:1;text-align:right;color:var(--accent-color);font-size:10px">Appliquer →</span>
        </div>`;
    }
  } else {
    panel.style.display = 'none';
  }
}

function applyOptimal(key) {
  document.getElementById('profile').value = key;
  updateProfile();
}

/* =========================================================
   FEATURE 14 : Translation (FR/EN)
   ========================================================= */
function initLang() {
  const l = localStorage.getItem('lang');
  if(l === 'en') toggleLang();
}

function toggleLang() {
  currentLang = currentLang === 'fr' ? 'en' : 'fr';
  localStorage.setItem('lang', currentLang);
  document.getElementById('langLabel').innerText = currentLang === 'fr' ? 'EN' : 'FR';
  
  document.querySelectorAll('[data-fr][data-en]').forEach(el => {
    el.innerText = el.getAttribute(`data-${currentLang}`);
  });
  
  // Re-calculate to update JS-rendered text
  calculate(true);
}

/* =========================================================
   FEATURE 15 : Mobile Tabs
   ========================================================= */
function switchMobileTab(tab) {
  document.querySelectorAll('.mobile-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.mobile-section').forEach(s => s.classList.remove('active-mobile'));
  
  if(tab === 'input') {
    document.getElementById('mTabInput').classList.add('active');
    document.getElementById('sectionInput').classList.add('active-mobile');
  } else if(tab === 'results') {
    document.getElementById('mTabResults').classList.add('active');
    document.getElementById('sectionResults').classList.add('active-mobile');
  } else {
    document.getElementById('mTabGraphs').classList.add('active');
    document.getElementById('sectionGraphs').classList.add('active-mobile');
  }
}

/* =========================================================
   INIT
   ========================================================= */
function calculateCombinations() {
  const Gk = getValue('Gk'), Qk = getValue('Qk'), L = getValue('L');
  const qElu = 1.35 * Gk + 1.5 * Qk, qEls = Gk + Qk;
  const title = currentLang === 'fr' ? "COMBINAISONS D'ACTIONS" : "LOAD COMBINATIONS";
  alert(`${title}\n\nELU (1.35G + 1.5Q) : ${qElu.toFixed(2)} kN/m\nELS (G + Q) : ${qEls.toFixed(2)} kN/m`);
}

function resetToCantilever() {
  document.getElementById('profile').value = 'IPE300';
  document.getElementById('support').value = 'cantilever';
  document.getElementById('loading').value = 'point_end';
  document.getElementById('L').value = '4.0';
  document.getElementById('sectionClass').value = '1';
  updateProfile();
}

window.onload = () => {
  initTheme();
  loadFromURL();
  initLang();
  initTooltips();
  initValidation();
  updateProfile(); 
  updateCoefficientsDisplay(); 
  calculate(true);
  initStickySummary();
  initScrollReveal();
  
  // Keyboard shortcut: Enter to calculate
  document.addEventListener('keydown', e => {
    if(e.key === 'Enter' && !e.target.matches('button')) calculate();
  });

  // Mobile initial tab
  if(window.innerWidth <= 768) {
    switchMobileTab('input');
  }
};

/* =========================================================
   ENHANCED CALCULATE — hooks for new features
   ========================================================= */
// Patch calculate() to call new UI updaters
const _originalCalculate = calculate;
calculate = function(skipSave = false) {
  validateInputs();
  _originalCalculate(skipSave);
  updateUtilizationGauges();
  updateStickySummary();
  drawSectionSVG();
  drawAnimatedLoad();
  animateResultValues();
};

/* =========================================================
   FEATURE A — Cross-Section SVG Preview (Enhanced)
   ========================================================= */
function drawSectionSVG() {
  const profile = document.getElementById('profile').value;
  const data = profilesDB[profile];
  if(!data) return;
  const div = document.getElementById('sectionSVG');
  const dims = document.getElementById('sectionDims');
  if(!div) return;

  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const steel = isDark ? '#818cf8' : '#6366f1';
  const outline = isDark ? '#e2e8f0' : '#1e293b';
  const fillColor = isDark ? 'rgba(99,102,241,0.25)' : 'rgba(99,102,241,0.15)';
  const dimColor = isDark ? '#64748b' : '#94a3b8';
  const dimText = isDark ? '#94a3b8' : '#64748b';

  // Larger canvas for better visibility
  const canvasW = 240, canvasH = 210;
  const cx = canvasW / 2, cy = 95; // center of the profile

  // Scale to fit comfortably within the canvas (max profile height ~160, width ~140)
  const maxH = 160, maxB = 140;
  const scale = Math.min(maxH / data.h, maxB / data.b);

  const H  = data.h * scale;
  const B  = data.b * scale;
  // Enforce minimum flange thickness of 8px and web width of 5px for visibility
  const TF = Math.max(data.tf * scale, 8);
  const TW = Math.max(data.tw * scale, 5);

  // Profile coordinates
  const top    = cy - H / 2;
  const bottom = cy + H / 2;
  const left   = cx - B / 2;
  const right  = cx + B / 2;

  // Fillet radius (visual only, proportional)
  const r = Math.max(Math.min(TF * 0.6, TW * 0.4), 2);

  // Build I-beam as a single path for clean rendering
  const path = `
    M ${left} ${top}
    L ${right} ${top}
    L ${right} ${top + TF}
    L ${cx + TW/2 + r} ${top + TF}
    Q ${cx + TW/2} ${top + TF} ${cx + TW/2} ${top + TF + r}
    L ${cx + TW/2} ${bottom - TF - r}
    Q ${cx + TW/2} ${bottom - TF} ${cx + TW/2 + r} ${bottom - TF}
    L ${right} ${bottom - TF}
    L ${right} ${bottom}
    L ${left} ${bottom}
    L ${left} ${bottom - TF}
    L ${cx - TW/2 - r} ${bottom - TF}
    Q ${cx - TW/2} ${bottom - TF} ${cx - TW/2} ${bottom - TF - r}
    L ${cx - TW/2} ${top + TF + r}
    Q ${cx - TW/2} ${top + TF} ${cx - TW/2 - r} ${top + TF}
    L ${left} ${top + TF}
    Z`;

  // Dimension annotation lines
  const dimGap = 14;
  // Height dimension (left side)
  const hLineX = left - dimGap;
  const hDims = `
    <line x1="${hLineX}" y1="${top}" x2="${hLineX}" y2="${bottom}" stroke="${dimColor}" stroke-width="1"/>
    <line x1="${hLineX - 4}" y1="${top}" x2="${hLineX + 4}" y2="${top}" stroke="${dimColor}" stroke-width="1"/>
    <line x1="${hLineX - 4}" y1="${bottom}" x2="${hLineX + 4}" y2="${bottom}" stroke="${dimColor}" stroke-width="1"/>
    <text x="${hLineX - 2}" y="${cy + 3}" text-anchor="end" font-family="Inter" font-size="9" fill="${dimText}" font-weight="600">h</text>`;

  // Width dimension (bottom)
  const bLineY = bottom + dimGap;
  const bDims = `
    <line x1="${left}" y1="${bLineY}" x2="${right}" y2="${bLineY}" stroke="${dimColor}" stroke-width="1"/>
    <line x1="${left}" y1="${bLineY - 4}" x2="${left}" y2="${bLineY + 4}" stroke="${dimColor}" stroke-width="1"/>
    <line x1="${right}" y1="${bLineY - 4}" x2="${right}" y2="${bLineY + 4}" stroke="${dimColor}" stroke-width="1"/>
    <text x="${cx}" y="${bLineY + 13}" text-anchor="middle" font-family="Inter" font-size="9" fill="${dimText}" font-weight="600">b</text>`;

  // Flange thickness indicator (right side, top flange)
  const tfX = right + dimGap;
  const tfDims = `
    <line x1="${tfX}" y1="${top}" x2="${tfX}" y2="${top + TF}" stroke="${steel}" stroke-width="1" opacity="0.7"/>
    <line x1="${tfX - 3}" y1="${top}" x2="${tfX + 3}" y2="${top}" stroke="${steel}" stroke-width="1" opacity="0.7"/>
    <line x1="${tfX - 3}" y1="${top + TF}" x2="${tfX + 3}" y2="${top + TF}" stroke="${steel}" stroke-width="1" opacity="0.7"/>
    <text x="${tfX + 4}" y="${top + TF/2 + 3}" font-family="Inter" font-size="8" fill="${steel}" font-weight="600" opacity="0.8">tf</text>`;

  const svg = `<svg viewBox="0 0 ${canvasW} ${canvasH}" width="100%" style="max-width:280px;height:auto;">
    <!-- Profile shape -->
    <path d="${path}" fill="${fillColor}" stroke="${outline}" stroke-width="2" stroke-linejoin="round"/>
    <!-- Neutral axis -->
    <line x1="${left - 6}" y1="${cy}" x2="${right + 6}" y2="${cy}" stroke="${steel}" stroke-width="1.2" stroke-dasharray="5,3" opacity="0.5"/>
    <!-- Dimension annotations -->
    ${hDims}
    ${bDims}
    ${tfDims}
    <!-- Profile label -->
    <text x="${cx}" y="${canvasH - 4}" text-anchor="middle" font-family="Outfit" font-size="12" fill="${steel}" font-weight="700">${profile}</text>
  </svg>`;
  div.innerHTML = svg;

  // Dim chips
  dims.innerHTML = [
    ['h', data.h, 'mm'], ['b', data.b, 'mm'], ['tf', data.tf, 'mm'], ['tw', data.tw, 'mm']
  ].map(([k,v,u]) => `<div class="section-dims-chip">${k} = <span>${v} ${u}</span></div>`).join('');
}

/* =========================================================
   FEATURE B — Tooltips
   ========================================================= */
function initTooltips() {
  const box = document.getElementById('tooltipBox');
  document.addEventListener('mouseover', e => {
    const el = e.target.closest('.tooltip-icon');
    if(!el) return;
    const tip = el.getAttribute('data-tip');
    if(!tip) return;
    box.textContent = tip;
    box.style.display = 'block';
    positionTooltip(e, box);
  });
  document.addEventListener('mousemove', e => {
    if(box.style.display === 'none') return;
    positionTooltip(e, box);
  });
  document.addEventListener('mouseout', e => {
    if(e.target.closest('.tooltip-icon')) box.style.display = 'none';
  });
}

function positionTooltip(e, box) {
  const gap = 12;
  let x = e.clientX + gap;
  let y = e.clientY + gap;
  const bw = box.offsetWidth || 240;
  const bh = box.offsetHeight || 60;
  if(x + bw > window.innerWidth - 10) x = e.clientX - bw - gap;
  if(y + bh > window.innerHeight - 10) y = e.clientY - bh - gap;
  box.style.left = x + 'px';
  box.style.top  = y + 'px';
}

/* =========================================================
   FEATURE C — Count-up / value pop animation
   ========================================================= */
function animateResultValues() {
  ['mcr','lambda','chi','mbRd','deflection','deflectionRel','deflectionLimit','deltaRatio'].forEach(id => {
    const el = document.getElementById(id);
    if(!el) return;
    el.classList.remove('value-animate');
    void el.offsetWidth; // reflow to restart
    el.classList.add('value-animate');
    el.addEventListener('animationend', () => el.classList.remove('value-animate'), { once: true });
  });
}

/* =========================================================
   FEATURE D — Input Validation
   ========================================================= */
function initValidation() {
  [
    { id:'L',  min:0.1, max:100, msgFr:'Longueur doit être > 0 m', msgEn:'Length must be > 0 m' },
    { id:'Gk', min:0,   max:1000, msgFr:'Charge G doit être ≥ 0', msgEn:'Load G must be ≥ 0' },
    { id:'Qk', min:0,   max:1000, msgFr:'Charge Q doit être ≥ 0', msgEn:'Load Q must be ≥ 0' },
  ].forEach(({ id, min, max, msgFr, msgEn }) => {
    const el = document.getElementById(id);
    if(!el) return;
    el.addEventListener('input', () => {
      const v = parseFloat(el.value);
      const errEl = el.parentElement.querySelector('.field-error-msg');
      if(errEl) errEl.remove();
      if(isNaN(v) || v < min || v > max) {
        el.classList.add('input-error');
        el.classList.remove('input-ok');
        const msg = document.createElement('div');
        msg.className = 'field-error-msg';
        msg.textContent = '⚠ ' + (currentLang === 'fr' ? msgFr : msgEn);
        el.parentElement.appendChild(msg);
      } else {
        el.classList.remove('input-error');
        el.classList.add('input-ok');
      }
    });
  });
}

function validateInputs() {
  const L = getValue('L'), Gk = getValue('Gk'), Qk = getValue('Qk');
  return (L > 0 && Gk >= 0 && Qk >= 0);
}

/* =========================================================
   FEATURE G/H — Utilization Gauge Bars
   ========================================================= */
function updateUtilizationGauges() {
  if(!lastCalcData) return;
  const { MEd, MbRd, verifELU } = lastCalcData;
  const eluWrap = document.getElementById('eluGaugeWrap');
  const eluFill = document.getElementById('eluFill');
  const eluRatio = document.getElementById('eluRatio');

  if(eluWrap && MEd > 0 && MbRd > 0) {
    eluWrap.style.display = 'block';
    const pct = Math.min(MEd / MbRd * 100, 200);
    const displayPct = (MEd / MbRd * 100).toFixed(1);
    eluRatio.textContent = displayPct + '%';
    eluFill.style.width = Math.min(pct, 100) + '%';
    eluFill.className = 'util-fill' + (pct > 100 ? ' danger' : pct > 80 ? ' warn' : '');
  }

  // ELS gauge (deflection)
  const elsWrap = document.getElementById('elsGaugeWrap');
  const elsFill = document.getElementById('elsFill');
  const elsRatio = document.getElementById('elsRatio');
  const L = getValue('L');
  const loading = document.getElementById('loading').value;
  const support = document.getElementById('support').value;
  const Gk = getValue('Gk'), Qk = getValue('Qk');
  const data = profilesDB[lastCalcData.profile];
  if(data && elsWrap) {
    const def = getDeflection(L, loading, support, Gk + Qk, data);
    const defLimit = L * 1000 / 250;
    if(def > 0 && defLimit > 0) {
      elsWrap.style.display = 'block';
      const pct = Math.min(def / defLimit * 100, 200);
      const displayPct = (def / defLimit * 100).toFixed(1);
      elsRatio.textContent = displayPct + '%';
      elsFill.style.width = Math.min(pct, 100) + '%';
      elsFill.className = 'util-fill' + (pct > 100 ? ' danger' : pct > 80 ? ' warn' : '');
    }
  }
}

/* =========================================================
   FEATURE I — Copy to Clipboard
   ========================================================= */
function copyValue(id) {
  const el = document.getElementById(id);
  if(!el) return;
  const text = el.textContent.replace(/[^\d.,\-\/\s]/g, '').trim();
  navigator.clipboard.writeText(text).then(() => {
    const btn = el.parentElement.querySelector('.copy-btn');
    if(btn) {
      btn.textContent = '✓';
      btn.classList.add('copied');
      setTimeout(() => { btn.textContent = '⎘'; btn.classList.remove('copied'); }, 1500);
    }
  }).catch(() => {
    // fallback
    const ta = document.createElement('textarea');
    ta.value = text; document.body.appendChild(ta); ta.select();
    document.execCommand('copy'); document.body.removeChild(ta);
  });
}

/* =========================================================
   FEATURE J — Sensitivity Analysis Slider
   ========================================================= */
let sensitivityChart = null;

function toggleSensitivity() {
  const p = document.getElementById('sensitivityPanel');
  if(p.style.display === 'none') {
    p.style.display = 'block';
    p.classList.add('revealed');
    drawSensitivityChart(getValue('L'));
    p.scrollIntoView({behavior:'smooth'});
  } else {
    p.style.display = 'none';
  }
}

function updateSensitivity(val) {
  document.getElementById('sliderVal').textContent = val;
  // Update slider gradient
  const slider = document.getElementById('sensitivitySlider');
  const pct = ((val - 1) / 19) * 100;
  slider.style.background = `linear-gradient(to right, var(--accent-color) ${pct}%, var(--border-color) ${pct}%)`;
  drawSensitivityChart(parseFloat(val));
}

function drawSensitivityChart(currentL) {
  const profile = document.getElementById('profile').value;
  const fy = getValue('steel');
  const alphaLT = getValue('alphaLT');
  const support = document.getElementById('support').value;
  const loading = document.getElementById('loading').value;
  const sectionClass = parseInt(document.getElementById('sectionClass').value);
  const Gk = getValue('Gk'), Qk = getValue('Qk'), zg = getValue('zg');
  const betaW = getBetaW(sectionClass);
  const data = profilesDB[profile];
  if(!data) return;

  const Ls = [], chis = [], meds = [], mbrds = [];
  for(let L = 1; L <= 20; L += 0.5) {
    const qElu = 1.35 * Gk + 1.5 * Qk;
    const MEd = getMomentMax(L, loading, support, qElu);
    const Mcr = calculateMcrParams(L, support, zg, data);
    const lam = Math.sqrt((data.Wpl * 1000 * fy * betaW) / (Mcr * 1e6));
    const phi = 0.5 * (1 + alphaLT * (lam - 0.2) + lam * lam);
    let chi = Math.min(1 / (phi + Math.sqrt(Math.max(phi * phi - lam * lam, 0))), 1.0);
    const MbRd = chi * data.Wpl * 1000 * fy * betaW / 1e6;
    Ls.push(L); chis.push(chi); meds.push(MEd); mbrds.push(MbRd);
  }

  const textColor = document.documentElement.getAttribute('data-theme') === 'dark' ? '#94a3b8' : '#475569';
  const ctx = document.getElementById('sensitivityChart').getContext('2d');
  if(sensitivityChart) sensitivityChart.destroy();
  sensitivityChart = new Chart(ctx, {
    type: 'line',
    data: {
      datasets: [
        { label: 'Mb,Rd (kN.m)', data: Ls.map((l,i) => ({x:l, y:mbrds[i]})), borderColor:'#6366f1', borderWidth:2.5, pointRadius:0, fill:false },
        { label: 'MEd (kN.m)',   data: Ls.map((l,i) => ({x:l, y:meds[i]})),  borderColor:'#ef4444', borderWidth:2, borderDash:[5,4], pointRadius:0, fill:false },
        // current L point
        { label:`L=${currentL}m`, data:[{x:currentL, y:mbrds[Math.round((currentL-1)/0.5)]}], borderColor:'#6366f1', backgroundColor:'#6366f1', pointRadius:6, showLine:false }
      ]
    },
    options: {
      responsive:true, color:textColor,
      scales:{
        x:{type:'linear', min:1, max:20, title:{display:true, text:'L (m)', color:textColor}, ticks:{color:textColor}},
        y:{title:{display:true, text:'Moment (kN.m)', color:textColor}, ticks:{color:textColor}}
      },
      plugins:{legend:{position:'bottom', labels:{color:textColor}}}
    }
  });
}

/* =========================================================
   FEATURE K — Animated Load Diagram
   ========================================================= */
function drawAnimatedLoad() {
  const svg = document.getElementById('loadDiagramSVG');
  if(!svg) return;
  const support = document.getElementById('support').value;
  const loading = document.getElementById('loading').value;
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const col = isDark ? '#f1f5f9' : '#0f172a';
  const accent = '#6366f1';
  const red = '#ef4444';

  // Beam line
  let content = `<line x1="80" y1="120" x2="520" y2="120" stroke="${col}" stroke-width="6" stroke-linecap="round"/>`;

  // Supports
  const pinSVG = (x) => `<polygon points="${x},120 ${x-12},142 ${x+12},142" fill="${accent}" opacity="0.8"/><line x1="${x-16}" y1="144" x2="${x+16}" y2="144" stroke="${col}" stroke-width="2"/>`;
  const fixSVG = (x, dir) => `<line x1="${x}" y1="100" x2="${x}" y2="140" stroke="${col}" stroke-width="4"/>
    <path d="M${x} 103 L${x+dir*12} 110 M${x} 112 L${x+dir*12} 119 M${x} 121 L${x+dir*12} 128 M${x} 130 L${x+dir*12} 137" stroke="${col}" stroke-width="1.5" opacity="0.6"/>`;

  if(support === 'simply') { content += pinSVG(80) + pinSVG(520); }
  else if(support === 'fixed') { content += fixSVG(80,1) + fixSVG(520,-1); }
  else if(support === 'mixed') { content += fixSVG(80,1) + pinSVG(520); }
  else if(support === 'cantilever') { content += fixSVG(80,1); }
  else if(support === 'continuous') { content += pinSVG(80) + pinSVG(300) + pinSVG(520); }
  else { content += pinSVG(80) + pinSVG(520); }

  // Loads
  if(loading === 'udl') {
    // Animated UDL arrows
    for(let x = 90; x <= 510; x += 30) {
      const delay = ((x-90)/30 * 0.08).toFixed(2);
      content += `<g class="load-arrow" style="animation-delay:${delay}s">
        <line x1="${x}" y1="60" x2="${x}" y2="110" stroke="${red}" stroke-width="2"/>
        <polygon points="${x},110 ${x-5},97 ${x+5},97" fill="${red}"/>
      </g>`;
    }
    content += `<line x1="90" y1="60" x2="510" y2="60" stroke="${red}" stroke-width="2.5" stroke-dasharray="8,4" class="load-udl-line"/>`;
  } else if(loading === 'point') {
    content += `<g class="load-arrow"><line x1="300" y1="40" x2="300" y2="112" stroke="${red}" stroke-width="3"/>
      <polygon points="300,112 292,94 308,94" fill="${red}"/>
      <text x="314" y="60" font-family="Inter" font-size="13" fill="${red}" font-weight="700">P</text></g>`;
  } else if(loading === 'point_end') {
    content += `<g class="load-arrow"><line x1="520" y1="40" x2="520" y2="112" stroke="${red}" stroke-width="3"/>
      <polygon points="520,112 512,94 528,94" fill="${red}"/>
      <text x="530" y="60" font-family="Inter" font-size="13" fill="${red}" font-weight="700">P</text></g>`;
  } else if(loading === 'point_third') {
    const x3 = 80 + (520-80)/3;
    content += `<g class="load-arrow"><line x1="${x3}" y1="40" x2="${x3}" y2="112" stroke="${red}" stroke-width="3"/>
      <polygon points="${x3},112 ${x3-8},94 ${x3+8},94" fill="${red}"/>
      <text x="${x3+10}" y="60" font-family="Inter" font-size="13" fill="${red}" font-weight="700">P</text></g>`;
  } else if(loading === 'triangular') {
    content += `<polygon points="90,110 510,60 510,110" fill="${red}" opacity="0.2" stroke="${red}" stroke-width="1.5"/>`;
    for(let i = 0; i <= 5; i++) {
      const x = 90 + i * (420/5);
      const maxH = (x - 90) / 420 * 50;
      const delay = (i * 0.1).toFixed(2);
      content += `<g class="load-arrow" style="animation-delay:${delay}s">
        <line x1="${x}" y1="${110-maxH}" x2="${x}" y2="110" stroke="${red}" stroke-width="1.5"/>
        <polygon points="${x},110 ${x-4},${110-8} ${x+4},${110-8}" fill="${red}"/>
      </g>`;
    }
  } else if(loading === 'moment') {
    content += `<path d="M260,80 Q300,50 340,80" fill="none" stroke="${red}" stroke-width="2.5" marker-end="url(#arrow)"/>
      <text x="288" y="47" font-family="Inter" font-size="13" fill="${red}" font-weight="700">M</text>
      <defs><marker id="arrow" viewBox="0 0 8 8" refX="4" refY="4" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="${red}"/></marker></defs>`;
  }

  // Span annotation
  content += `<line x1="80" y1="168" x2="520" y2="168" stroke="${isDark?'#64748b':'#94a3b8'}" stroke-width="1" marker-start="url(#ls)" marker-end="url(#ls)"/>
    <defs><marker id="ls" viewBox="0 0 6 6" refX="3" refY="3" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><line x1="3" y1="0" x2="3" y2="6" stroke="${isDark?'#64748b':'#94a3b8'}" stroke-width="1.5"/></marker></defs>
    <text x="300" y="186" font-family="Inter" font-size="12" fill="${isDark?'#64748b':'#94a3b8'}" text-anchor="middle" font-weight="600">L = ${getValue('L')} m</text>`;

  svg.innerHTML = content;
}

/* =========================================================
   FEATURE L — Sticky Summary Bar
   ========================================================= */
function initStickySummary() {
  window.addEventListener('scroll', () => {
    const ss = document.getElementById('stickySummary');
    if(!ss) return;
    if(lastCalcData && window.scrollY > 300) ss.style.display = 'flex';
    else ss.style.display = 'none';
  });
}

function updateStickySummary() {
  if(!lastCalcData) return;
  const s = document.getElementById('stickySummary');
  if(!s) return;

  document.getElementById('ssProfile').textContent = lastCalcData.profile;
  document.getElementById('ssMed').textContent = lastCalcData.MEd.toFixed(1) + ' kN.m';
  document.getElementById('ssMbrd').textContent = lastCalcData.MbRd.toFixed(1) + ' kN.m';

  const eluBadge = document.getElementById('ssElu');
  eluBadge.textContent = lastCalcData.verifELU ? 'OK' : 'KO';
  eluBadge.className = 'ss-badge ' + (lastCalcData.verifELU ? 'ok' : 'fail');

  const elsBadge = document.getElementById('ssEls');
  elsBadge.textContent = lastCalcData.verifELS ? 'OK' : 'KO';
  elsBadge.className = 'ss-badge ' + (lastCalcData.verifELS ? 'ok' : 'fail');
}

/* =========================================================
   FEATURE N — CSV Export
   ========================================================= */
function exportCSV() {
  if(!lastCalcData) { alert(currentLang==='fr'?'Lancez d\'abord un calcul.':'Run a calculation first.'); return; }
  const data = profilesDB[lastCalcData.profile];
  const L = lastCalcData.L;
  const fy = getValue('steel');
  const loading = document.getElementById('loading').value;
  const support = document.getElementById('support').value;
  const Gk = getValue('Gk'), Qk = getValue('Qk');
  const def = getDeflection(L, loading, support, Gk+Qk, data);
  const defLimit = L * 1000 / 250;

  const rows = [
    ['Paramètre / Parameter', 'Valeur / Value', 'Unité / Unit'],
    ['Profilé', lastCalcData.profile, '-'],
    ['Longueur L', L, 'm'],
    ['Nuance acier', `S${fy}`, '-'],
    ['Charge G', Gk, 'kN/m'],
    ['Charge Q', Qk, 'kN/m'],
    ['MEd', lastCalcData.MEd.toFixed(2), 'kN.m'],
    ['Mcr', (getValue('alphaLT') ? '' : '') + document.getElementById('mcr').textContent.replace(' kN.m',''), 'kN.m'],
    ['Lambda LT', lastCalcData.lambdaLT.toFixed(4), '-'],
    ['Chi LT', lastCalcData.chiLT.toFixed(4), '-'],
    ['Mb,Rd', lastCalcData.MbRd.toFixed(2), 'kN.m'],
    ['Vérification ELU', lastCalcData.verifELU ? 'VERIFIE':'NON VERIFIE', '-'],
    ['Flèche max', def.toFixed(2), 'mm'],
    ['Limite L/250', defLimit.toFixed(2), 'mm'],
    ['Vérification ELS', lastCalcData.verifELS ? 'VERIFIE':'NON VERIFIE', '-'],
    ['Taux utilisation ELU', (lastCalcData.MEd/lastCalcData.MbRd*100).toFixed(1), '%'],
    ['Taux utilisation ELS', (def/defLimit*100).toFixed(1), '%'],
    ['Date', new Date().toLocaleString(), '-'],
    ['', '', ''],
    ['--- DONNÉES DE LA COURBE DE SENSIBILITÉ ---', '', ''],
    ['Longueur L (m)', 'MEd (kN.m)', 'Mb,Rd (kN.m)']
  ];

  // Calculate curve data
  const alphaLT = getValue('alphaLT');
  const sectionClass = parseInt(document.getElementById('sectionClass').value);
  const zg = getValue('zg');
  const betaW = getBetaW(sectionClass);
  for(let curL = 1; curL <= 20; curL += 0.5) {
    const qElu = 1.35 * Gk + 1.5 * Qk;
    const curMEd = getMomentMax(curL, loading, support, qElu);
    const curMcr = calculateMcrParams(curL, support, zg, data);
    const lam = Math.sqrt((data.Wpl * 1000 * fy * betaW) / (curMcr * 1e6));
    const phi = 0.5 * (1 + alphaLT * (lam - 0.2) + lam * lam);
    let chi = Math.min(1 / (phi + Math.sqrt(Math.max(phi * phi - lam * lam, 0))), 1.0);
    const curMbRd = chi * data.Wpl * 1000 * fy * betaW / 1e6;
    rows.push([curL.toFixed(1), curMEd.toFixed(2), curMbRd.toFixed(2)]);
  }

  const csv = rows.map(r => r.map(c => `"${String(c).replace('.', ',')}"`).join(';')).join('\n');
  const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `GS_Calc_${lastCalcData.profile}_L${L}m.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/* =========================================================
   UPDATED SWITCHTAB — handle 'load' tab
   ========================================================= */
function switchTab(tabName) {
  ['tabDiagram','tabDeformed','tabLoad'].forEach(id => {
    const el = document.getElementById(id);
    if(el) el.classList.remove('active');
  });
  ['tab-diagram','tab-deformed','tab-load'].forEach(id => {
    const el = document.getElementById(id);
    if(el) el.classList.remove('active');
  });

  if(tabName === 'diagram') {
    document.getElementById('tabDiagram').classList.add('active');
    document.getElementById('tab-diagram').classList.add('active');
  } else if(tabName === 'deformed') {
    document.getElementById('tabDeformed').classList.add('active');
    document.getElementById('tab-deformed').classList.add('active');
  } else {
    document.getElementById('tabLoad').classList.add('active');
    document.getElementById('tab-load').classList.add('active');
    drawAnimatedLoad();
  }
}

/* =========================================================
   FEATURE O — Scroll Reveal Entrance Animations
   ========================================================= */
function initScrollReveal() {
  // Respect reduced-motion preference
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.card, .header').forEach(el => el.classList.add('revealed'));
    return;
  }

  // Assign staggered delays to cards within each column
  const columns = document.querySelectorAll('.mobile-section');
  columns.forEach(col => {
    const cards = col.querySelectorAll('.card');
    cards.forEach((card, i) => {
      card.classList.add(`reveal-delay-${Math.min(i + 1, 6)}`);
    });
  });

  // The graphs card spans full width — give it a scale effect
  const graphsCard = document.getElementById('sectionGraphs');
  if (graphsCard && graphsCard.classList.contains('card')) {
    graphsCard.classList.add('reveal-scale');
  }

  // Collect all revealable elements
  const revealTargets = document.querySelectorAll('.card, .header');

  // IntersectionObserver to trigger reveal when elements enter viewport
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, {
    threshold: 0.08,      // Trigger when 8% of element is visible
    rootMargin: '0px 0px -40px 0px'  // Slight offset from bottom
  });

  revealTargets.forEach(el => {
    // Immediately reveal elements already in viewport (above the fold)
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.85) {
      el.classList.add('revealed');
    } else {
      observer.observe(el);
    }
  });
}