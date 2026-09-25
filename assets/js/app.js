// ==========================================================================
// BUDDH INTERNATIONAL CIRCUIT - INTERACTIVE ENGINE & SIMULATOR
// ==========================================================================

const TRACK_D = "M263.373,432.217l-96.534-264.13c0,0-3.417-11.104,5.765-14.521s21.996-0.428,35.662-8.969 c13.669-8.542,22.763-17.174,31.185-41.849c6.197-18.151,7.266-35.234,7.479-39.718s1.281-19.646,1.281-19.646 s0.004-7.479,7.906-8.76c7.9-1.281,9.182,6.406,10.463,11.531s55.951,203.083,63.426,230.63 c7.473,27.546,77.729,271.621,77.729,271.621s3.623,9.178-5.98,14.521c-7.971,4.436-14.312-0.218-19.432-2.989 c-9.154-4.957-178.966-99.081-178.966-99.081s-14.521-8.756-25.838,1.922s-22.635,21.566-22.635,21.566s-2.78,3.84-2.989,6.192 c-0.286,3.216-0.641,5.766,0.213,8.328s3.416,5.765,4.911,6.833s3.844,3.204,3.844,6.834s-5.417,67.702-5.417,67.702 s0,3.56-3.559,7.38c-3.055,3.279-5.209,4.254-7.466,5.556c-2.068,1.192-9.029,4.428-9.029,4.428s-8.855,3.3-9.336,10.597 c-0.425,6.448-4.483,110.826-4.483,110.826s-0.681,7.065-7.625,14.013c-5.027,5.029-11.199,9.723-20.99,10.758 c-8.561,0.905-17.246-1.054-26.906-7.046c-10.187-6.318-16.329-16.171-20.173-23.858s-6.859-15.976-7.587-24.401 c-0.538-6.229,1.943-11.977,4.698-15.161c1.986-2.296,17.976-15.13,22.421-19.219c4.431-4.075,10.586-9.706,15.457-16.143 c2.431-3.212,6.164-9.896,6.164-9.896l31.976-57.24c0,0,3.012-7.437,1.536-15.25c-1.604-8.487-7.207-13.804-7.207-13.804 l-17.191-19.531c0,0-3.299-3.473-2.764-8.857c0.677-6.813,8.969-100.577,8.969-100.577s0.735-10.732,10.725-17.229 c10.679-6.945,19.598-1.348,19.598-1.348l120.239,67.691c0,0,6.834,3.201,12.812-2.776c4.863-4.862,3.846-10.251,1.283-17.298 C264.812,435.81,263.373,432.217,263.373,432.217z";

const TURNS_DATA = [
  { id: 1, name: "Turn 1", type: "Right 90°", marker: [144.5, 143.9], lapPct: 0.132, gear: 2, speed: 105, desc: "Heavy braking at end of pit straight into sharp 90° right-hander. Uphill entry." },
  { id: 2, name: "Turn 2", type: "Left Sweeper", marker: [233.7, 159.1], lapPct: 0.157, gear: 3, speed: 145, desc: "Downhill sweeping left curve transitioning into the Turn 3 complex." },
  { id: 3, name: "Turn 3", type: "Right Hairpin", marker: [278.3, 14.7], lapPct: 0.211, gear: 1, speed: 82, desc: "Tight, tightening uphill right hairpin leading onto the massive 1.1km back straight." },
  { id: 4, name: "Turn 4", type: "Right Hairpin", marker: [417.7, 582.3], lapPct: 0.459, gear: 2, speed: 90, desc: "Prime overtaking zone at end of 1.1km DRS straight, braking from 335+ km/h down to 90 km/h." },
  { id: 5, name: "Turn 5", type: "Left Chicane", marker: [191.7, 482.1], lapPct: 0.575, gear: 4, speed: 215, desc: "Fast, technical left entry of high-speed chicane requiring commitment." },
  { id: 6, name: "Turn 6", type: "Right Chicane", marker: [129.7, 485.3], lapPct: 0.591, gear: 4, speed: 200, desc: "Right flick exit requiring precise curb management to maximize exit drive." },
  { id: 7, name: "Turn 7", type: "Right Bend", marker: [184.7, 517.3], lapPct: 0.604, gear: 5, speed: 230, desc: "Sweeping high-speed right-hand bend loading the left-side tires." },
  { id: 8, name: "Turn 8", type: "Left Downhill", marker: [176.7, 593.3], lapPct: 0.635, gear: 4, speed: 185, desc: "Downhill left-hand turn with negative camber leading into Turn 9." },
  { id: 9, name: "Turn 9", type: "Right Plunge", marker: [149.7, 618.3], lapPct: 0.656, gear: 3, speed: 150, desc: "Blind entry right turn plunging down towards the Parabolica complex." },
  { id: 10, name: "Turn 10", type: "Banked Entry", marker: [130.7, 751.5], lapPct: 0.710, gear: 4, speed: 190, desc: "Entry into multi-apex banked parabolic curve, modeled after Istanbul Park Turn 8." },
  { id: 11, name: "Turn 11", type: "Banked Exit", marker: [14.7, 672.3], lapPct: 0.762, gear: 5, speed: 225, desc: "High-G exit of the banked curve with tricky track limits on the left curb." },
  { id: 12, name: "Turn 12", type: "Left Medium", marker: [56.7, 628.3], lapPct: 0.785, gear: 3, speed: 140, desc: "Technical uphill left-hander setting up Sector 3 rhythm." },
  { id: 13, name: "Turn 13", type: "Right Crest", marker: [95.7, 560.3], lapPct: 0.828, gear: 4, speed: 175, desc: "Medium-speed right turn over crest with rear lateral instability." },
  { id: 14, name: "Turn 14", type: "Left Sharp", marker: [68.7, 523.3], lapPct: 0.852, gear: 3, speed: 135, desc: "Sharp left turn testing front-end grip and tire preservation." },
  { id: 15, name: "Turn 15", type: "Left Chicane", marker: [100.7, 373.3], lapPct: 0.909, gear: 2, speed: 115, desc: "First part of final chicane, crucial for good exit onto pit straight." },
  { id: 16, name: "Turn 16", type: "Right Exit", marker: [284.7, 473.3], lapPct: 0.988, gear: 3, speed: 140, desc: "Final right flick onto the pit straight; DRS zone 1 detection point." }
];

// App State
let isSimRunning = false;
let simProgress = 0.0; // 0.0 to 1.0 along track
let totalLength = 0;
let simLapStartTime = 0;
let simLapCurrentTime = 0;
let currentSpeed = 160; // km/h
let targetSpeed = 160;
let currentGear = 3;
let currentRpm = 9500;
let isDrsActive = false;
let currentSector = "SECTOR 1";
let animFrameId = null;

// DOM Elements
const trackGlow = document.getElementById("track-glow");
const trackCurb = document.getElementById("track-curb");
const trackAsphalt = document.getElementById("track-asphalt");
const trackInnerAsphalt = document.getElementById("track-inner-asphalt");
const trackRacingLine = document.getElementById("track-racing-line");
const layerTurns = document.getElementById("layer-turns");
const carMarker = document.getElementById("car-marker");
const carBody = document.getElementById("car-body");
const turnsList = document.getElementById("turns-list");
const turnTooltip = document.getElementById("turn-tooltip");
const toast = document.getElementById("toast");

// Telemetry DOM
const hudSpeed = document.getElementById("hud-speed");
const hudGear = document.getElementById("hud-gear");
const hudRpm = document.getElementById("hud-rpm");
const hudDrs = document.getElementById("hud-drs");
const hudSector = document.getElementById("hud-sector");
const hudLaptime = document.getElementById("hud-laptime");
const meterSpeed = document.getElementById("meter-speed");
const pedalThrottle = document.getElementById("pedal-throttle");
const pedalBrake = document.getElementById("pedal-brake");
const btnToggleSim = document.getElementById("btn-toggle-sim");
const simIcon = document.getElementById("sim-icon");
const simText = document.getElementById("sim-text");

// ==========================================================================
// INITIALIZATION
// ==========================================================================

function initTrack() {
  // Set SVG track paths
  [trackGlow, trackCurb, trackAsphalt, trackInnerAsphalt, trackRacingLine].forEach(path => {
    if (path) path.setAttribute("d", TRACK_D);
  });

  // Calculate length
  totalLength = trackRacingLine.getTotalLength();

  // Create Turn Markers on SVG
  TURNS_DATA.forEach(turn => {
    const [cx, cy] = turn.marker;
    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g.setAttribute("class", "turn-marker");
    g.setAttribute("data-turn", turn.id);
    g.setAttribute("transform", `translate(${cx}, ${cy})`);

    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("r", "12");

    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("y", "4");
    text.textContent = turn.id;

    g.appendChild(circle);
    g.appendChild(text);

    // Event listeners
    g.addEventListener("mouseenter", (e) => showTurnTooltip(turn, e));
    g.addEventListener("mouseleave", hideTurnTooltip);
    g.addEventListener("click", () => selectTurn(turn.id));

    layerTurns.appendChild(g);
  });

  // Build Turn List in Sidebar
  buildTurnsList();

  // Initialize Code Snippets
  setupCodeTabs();

  // Position car at start line
  updateCarPosition(0);
}

// ==========================================================================
// TURNS LIST & INSPECTION
// ==========================================================================

function buildTurnsList() {
  turnsList.innerHTML = "";
  TURNS_DATA.forEach(turn => {
    const item = document.createElement("div");
    item.className = "turn-item";
    item.setAttribute("data-turn-item", turn.id);

    item.innerHTML = `
      <div class="turn-item-left">
        <div class="turn-badge-circle">${turn.id}</div>
        <div class="turn-item-info">
          <span class="turn-item-name">${turn.name}</span>
          <span class="turn-item-type">${turn.type}</span>
        </div>
      </div>
      <div class="turn-item-right">
        <span class="turn-item-speed">${turn.speed} KM/H</span>
        <span class="turn-item-gear">GEAR ${turn.gear}</span>
      </div>
    `;

    item.addEventListener("click", () => selectTurn(turn.id));
    turnsList.appendChild(item);
  });
}

function selectTurn(turnId) {
  const turn = TURNS_DATA.find(t => t.id === turnId);
  if (!turn) return;

  // Highlight turn marker on SVG
  document.querySelectorAll(".turn-marker").forEach(m => {
    if (parseInt(m.getAttribute("data-turn")) === turnId) {
      m.classList.add("active");
    } else {
      m.classList.remove("active");
    }
  });

  // Highlight list item in sidebar
  document.querySelectorAll(".turn-item").forEach(item => {
    if (parseInt(item.getAttribute("data-turn-item")) === turnId) {
      item.classList.add("selected");
      item.scrollIntoView({ behavior: "smooth", block: "nearest" });
    } else {
      item.classList.remove("selected");
    }
  });

  // Jump or advance simulation car to turn position
  if (!isSimRunning) {
    simProgress = turn.lapPct;
    updateCarPosition(simProgress);
  }

  // Show tooltip near marker
  const [cx, cy] = turn.marker;
  const stage = document.getElementById("stage");
  const stageRect = stage.getBoundingClientRect();
  const svg = document.getElementById("circuit-svg");
  const svgRect = svg.getBoundingClientRect();

  // Convert SVG coordinates to stage pixels
  const px = svgRect.left - stageRect.left + (cx + 30) * (svgRect.width / 500);
  const py = svgRect.top - stageRect.top + (cy + 30) * (svgRect.height / 830);

  turnTooltip.style.left = `${Math.min(stageRect.width - 240, Math.max(20, px - 110))}px`;
  turnTooltip.style.top = `${Math.max(60, py - 95)}px`;

  document.getElementById("tt-num").textContent = `T${turn.id}`;
  document.getElementById("tt-name").textContent = turn.name;
  document.getElementById("tt-desc").textContent = turn.desc;
  document.getElementById("tt-speed").textContent = `${turn.speed} KM/H`;
  document.getElementById("tt-gear").textContent = `GEAR ${turn.gear}`;

  turnTooltip.classList.add("visible");
}

function showTurnTooltip(turn, e) {
  selectTurn(turn.id);
}

function hideTurnTooltip() {
  if (!isSimRunning) {
    // Keep visible if selected
  }
}

// ==========================================================================
// CAR SIMULATION & TELEMETRY
// ==========================================================================

function getTrackSpeedAndGear(prog) {
  // Sector 1: Pit straight to Turn 3 (0.0 to ~0.22)
  // Back straight: Turn 3 to Turn 4 (0.22 to 0.46) -> 338 km/h!
  // Sector 2: Turn 4 to Turn 9 (0.46 to 0.68)
  // Parabolica & Sector 3: Turn 10 to Turn 16 (0.68 to 1.0)

  // Find nearest upcoming corner
  let nextTurn = TURNS_DATA[0];
  let distToNext = 1.0;
  for (let i = 0; i < TURNS_DATA.length; i++) {
    const t = TURNS_DATA[i];
    let diff = t.lapPct - prog;
    if (diff < 0) diff += 1.0;
    if (diff < distToNext) {
      distToNext = diff;
      nextTurn = t;
    }
  }

  let speed, gear, throttle = 100, brake = 0, drs = false, sector = "SECTOR 1";

  // Determine Sector
  if (prog < 0.22) {
    sector = "SECTOR 1";
  } else if (prog < 0.68) {
    sector = "SECTOR 2";
  } else {
    sector = "SECTOR 3";
  }

  // 1.1km Back Straight (from 0.23 to 0.44)
  if (prog >= 0.23 && prog <= 0.44) {
    // Massive acceleration up to 338 km/h with DRS open
    const straightProg = (prog - 0.23) / (0.44 - 0.23);
    speed = 180 + straightProg * (338 - 180);
    gear = speed > 310 ? 8 : (speed > 280 ? 7 : 6);
    throttle = 100;
    brake = 0;
    drs = true;
  }
  // Heavy Braking into Turn 4 (0.44 to 0.46)
  else if (prog > 0.44 && prog <= 0.46) {
    const brakeProg = (prog - 0.44) / (0.46 - 0.44);
    speed = 338 - brakeProg * (338 - 90);
    gear = speed > 220 ? 5 : (speed > 140 ? 3 : 2);
    throttle = 0;
    brake = 100;
    drs = false;
  }
  // Pit Straight DRS Zone (0.0 to 0.11)
  else if (prog >= 0.0 && prog <= 0.11) {
    speed = 220 + (prog / 0.11) * (310 - 220);
    gear = speed > 290 ? 7 : 6;
    throttle = 100;
    brake = 0;
    drs = true;
  }
  // Braking into Turn 1 (0.11 to 0.132)
  else if (prog > 0.11 && prog <= 0.132) {
    const brakeProg = (prog - 0.11) / (0.132 - 0.11);
    speed = 310 - brakeProg * (310 - 105);
    gear = 2;
    throttle = 0;
    brake = 95;
    drs = false;
  }
  // General Corner Interpolation
  else {
    drs = false;
    // Approaching corner: brake
    if (distToNext < 0.025) {
      const bRatio = 1 - (distToNext / 0.025);
      brake = Math.min(100, Math.round(bRatio * 90));
      throttle = 10;
      speed = nextTurn.speed + (1 - bRatio) * 60;
      gear = nextTurn.gear;
    } else {
      // Accelerating out of corner
      throttle = 85;
      brake = 0;
      speed = Math.min(270, nextTurn.speed + 75);
      gear = Math.min(6, nextTurn.gear + 2);
    }
  }

  return { speed: Math.round(speed), gear, throttle, brake, drs, sector };
}

function updateCarPosition(prog) {
  if (!totalLength) return;

  const currentDist = (prog % 1.0) * totalLength;
  const pt = trackRacingLine.getPointAtLength(currentDist);

  // Compute tangent angle for car heading
  const delta = 1.5;
  const ptAhead = trackRacingLine.getPointAtLength((currentDist + delta) % totalLength);
  const angleRad = Math.atan2(ptAhead.y - pt.y, ptAhead.x - pt.x);
  const angleDeg = (angleRad * 180 / Math.PI) + 90; // Car arrow points up

  carMarker.setAttribute("transform", `translate(${pt.x}, ${pt.y})`);
  carBody.setAttribute("transform", `rotate(${angleDeg})`);

  // Telemetry Update
  const telem = getTrackSpeedAndGear(prog % 1.0);
  currentSpeed += (telem.speed - currentSpeed) * 0.2;
  currentGear = telem.gear;
  isDrsActive = telem.drs;
  currentSector = telem.sector;

  // Update HUD
  hudSpeed.textContent = Math.round(currentSpeed);
  meterSpeed.style.width = `${(currentSpeed / 350) * 100}%`;
  hudGear.textContent = currentGear;
  hudRpm.textContent = `${Math.round(8000 + (currentSpeed % 40) * 120)} RPM`;
  
  pedalThrottle.style.height = `${telem.throttle}%`;
  pedalBrake.style.height = `${telem.brake}%`;

  if (isDrsActive) {
    hudDrs.textContent = "ACTIVE";
    hudDrs.className = "drs-indicator active";
    if (carBody) carBody.classList.add("drs-active");
  } else {
    hudDrs.textContent = "OFF";
    hudDrs.className = "drs-indicator";
    if (carBody) carBody.classList.remove("drs-active");
  }

  hudSector.textContent = currentSector;
}

function simLoop(timestamp) {
  if (!simLapStartTime) simLapStartTime = timestamp;
  const elapsed = timestamp - simLapStartTime;

  // Approximate F1 lap in ~87 seconds (scaled for smooth viewing, ~25-30s per visualization lap)
  const LAP_DURATION_MS = 28000;
  simProgress = (elapsed % LAP_DURATION_MS) / LAP_DURATION_MS;

  // Update lap timer display
  const lapMs = elapsed % LAP_DURATION_MS;
  const min = Math.floor(lapMs / 60000);
  const sec = Math.floor((lapMs % 60000) / 1000);
  const ms = Math.floor(lapMs % 1000);
  hudLaptime.textContent = `${min}:${sec.toString().padStart(2, '0')}.${ms.toString().padStart(3, '0')}`;

  updateCarPosition(simProgress);

  if (isSimRunning) {
    animFrameId = requestAnimationFrame(simLoop);
  }
}

function startSimulation() {
  isSimRunning = true;
  simLapStartTime = performance.now() - (simProgress * 28000);
  btnToggleSim.classList.add("running");
  simIcon.textContent = "⏸";
  simText.textContent = "PAUSE CAR";
  animFrameId = requestAnimationFrame(simLoop);
}

function stopSimulation() {
  isSimRunning = false;
  btnToggleSim.classList.remove("running");
  simIcon.textContent = "▶";
  simText.textContent = "RESUME";
  if (animFrameId) cancelAnimationFrame(animFrameId);
}

btnToggleSim.addEventListener("click", () => {
  if (isSimRunning) {
    stopSimulation();
  } else {
    startSimulation();
  }
});

// ==========================================================================
// LAYER SWITCHER
// ==========================================================================

document.querySelectorAll(".pill-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    const layer = btn.getAttribute("data-layer");
    const group = document.getElementById(`layer-${layer}`);
    if (group) {
      group.style.display = btn.classList.contains("active") ? "block" : "none";
    }
  });
});

// ==========================================================================
// CODE SNIPPETS & EXPORT
// ==========================================================================

const CODE_TEMPLATES = {
  svg: `<!-- Buddh International Circuit SVG for your F1 Game -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 435 770" width="100%" height="100%">
  <!-- Pit Lane -->
  <path d="M264.053,463.063l18.705-13.768..." fill="none" stroke="#4a5568" stroke-width="4" />
  
  <!-- Main Race Track -->
  <path id="f1-track"
        d="${TRACK_D}"
        fill="none"
        stroke="#e10600"
        stroke-width="12"
        stroke-linecap="round"
        stroke-linejoin="round" />
        
  <!-- Start / Finish Line -->
  <line x1="248" y1="390" x2="278" y2="401" stroke="#ffffff" stroke-width="4" />
</svg>`,

  js: `// F1 Car Path Following using SVG in JavaScript / Canvas
const trackPath = document.getElementById('f1-track');
const totalLen = trackPath.getTotalLength(); // 2,218 px (~5,125 meters)

function getCarCoordinates(lapPercent) {
  const distance = (lapPercent % 1.0) * totalLen;
  const point = trackPath.getPointAtLength(distance);
  
  // Calculate tangent rotation
  const ahead = trackPath.getPointAtLength((distance + 2) % totalLen);
  const angle = Math.atan2(ahead.y - point.y, ahead.x - point.x);
  
  return { x: point.x, y: point.y, rotation: angle };
}`,

  json: `// Buddh International Circuit Quick Telemetry
{
  "name": "Buddh International Circuit",
  "location": "Greater Noida, India",
  "length_km": 5.125,
  "turns": 16,
  "direction": "Clockwise",
  "lap_record": "1:27.249 (S. Vettel, 2011)",
  "back_straight_m": 1060,
  "top_speed_kmh": 338.4
}`
};

function setupCodeTabs() {
  const snippet = document.getElementById("code-snippet");
  snippet.textContent = CODE_TEMPLATES.svg;

  document.querySelectorAll(".code-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".code-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const key = tab.getAttribute("data-tab");
      snippet.textContent = CODE_TEMPLATES[key] || "";
    });
  });
}

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2500);
}

// Copy Buttons
document.getElementById("btn-copy-path").addEventListener("click", () => {
  navigator.clipboard.writeText(`<path d="${TRACK_D}" />`).then(() => {
    showToast("SVG Path copied to clipboard!");
  });
});

document.getElementById("btn-copy-d").addEventListener("click", () => {
  navigator.clipboard.writeText(TRACK_D).then(() => {
    showToast("Path 'd' string copied to clipboard!");
  });
});

document.getElementById("btn-copy-code").addEventListener("click", () => {
  const code = document.getElementById("code-snippet").textContent;
  navigator.clipboard.writeText(code).then(() => {
    showToast("Code snippet copied to clipboard!");
  });
});

// Download SVG Files
document.getElementById("btn-download-svg").addEventListener("click", () => {
  const a = document.createElement("a");
  a.href = "assets/svg/buddh_circuit_clean.svg";
  a.download = "buddh_circuit_clean.svg";
  a.click();
  showToast("Downloading Clean Track SVG...");
});

document.getElementById("btn-download-detailed").addEventListener("click", () => {
  const a = document.createElement("a");
  a.href = "assets/svg/buddh_circuit_detailed.svg";
  a.download = "buddh_circuit_detailed.svg";
  a.click();
  showToast("Downloading Full F1 Circuit SVG...");
});

// ==========================================================================
// WEATHER SYSTEM ENGINE
// ==========================================================================

const WEATHER_CONFIGS = {
  sunny: {
    name: "SUNNY",
    icon: "☀️",
    airTemp: "32°C",
    trackTemp: "44°C",
    rainRisk: "0%",
    gripText: "100%",
    gripCoeff: "1.00",
    gripColor: "var(--neon-green)",
    statusTag: "DRY TRACK",
    tyre: "SOFT SLICKS (DRY)",
    tyreIcon: "🔴"
  },
  cloudy: {
    name: "CLOUDY",
    icon: "☁️",
    airTemp: "24°C",
    trackTemp: "29°C",
    rainRisk: "15%",
    gripText: "98%",
    gripCoeff: "0.98",
    gripColor: "var(--neon-green)",
    statusTag: "OVERCAST",
    tyre: "MEDIUM SLICKS",
    tyreIcon: "🟡"
  },
  rain: {
    name: "RAIN",
    icon: "🌧️",
    airTemp: "19°C",
    trackTemp: "21°C",
    rainRisk: "95%",
    gripText: "60%",
    gripCoeff: "0.60",
    gripColor: "#00e5ff",
    statusTag: "WET TRACK",
    tyre: "FULL WETS (GROOVED)",
    tyreIcon: "🔵"
  },
  snow: {
    name: "SNOW",
    icon: "❄️",
    airTemp: "-2°C",
    trackTemp: "0°C",
    rainRisk: "85%",
    gripText: "35%",
    gripCoeff: "0.35",
    gripColor: "#ff9100",
    statusTag: "ICY BLIZZARD",
    tyre: "STUDDED SNOW / ICE",
    tyreIcon: "⚪"
  }
};

let currentWeather = localStorage.getItem("f1_weather") || "sunny";

function updateWeatherUI(type) {
  currentWeather = type;
  localStorage.setItem("f1_weather", type);
  const cfg = WEATHER_CONFIGS[type] || WEATHER_CONFIGS.sunny;

  // Update Header Button
  const headerIcon = document.getElementById("header-weather-icon");
  const headerText = document.getElementById("header-weather-text");
  if (headerIcon) headerIcon.textContent = cfg.icon;
  if (headerText) headerText.textContent = cfg.name;

  // Update Dropdown Active state
  document.querySelectorAll(".weather-card").forEach(card => {
    card.classList.toggle("active", card.getAttribute("data-weather") === type);
  });

  // Update Dropdown preview
  const wTrackCond = document.getElementById("weather-track-condition");
  const wAir = document.getElementById("wtp-air");
  const wTrack = document.getElementById("wtp-track");
  const wRain = document.getElementById("wtp-rain");
  const wGrip = document.getElementById("wtp-grip");
  if (wTrackCond) wTrackCond.textContent = cfg.statusTag;
  if (wAir) wAir.textContent = cfg.airTemp;
  if (wTrack) wTrack.textContent = cfg.trackTemp;
  if (wRain) wRain.textContent = cfg.rainRisk;
  if (wGrip) {
    wGrip.textContent = cfg.gripText;
    wGrip.style.color = cfg.gripColor;
  }

  // Update Sidebar Card
  const sIcon = document.getElementById("sidebar-weather-icon");
  const sPill = document.getElementById("sidebar-weather-pill");
  const sAir = document.getElementById("sidebar-air-temp");
  const sTrack = document.getElementById("sidebar-track-temp");
  const sPrecip = document.getElementById("sidebar-precip");
  const sGrip = document.getElementById("sidebar-grip");
  const sTyre = document.getElementById("sidebar-tyre-rec");

  if (sIcon) sIcon.textContent = cfg.icon;
  if (sPill) sPill.textContent = `${cfg.name} • ${cfg.statusTag}`;
  if (sAir) sAir.textContent = cfg.airTemp;
  if (sTrack) sTrack.textContent = cfg.trackTemp;
  if (sPrecip) sPrecip.textContent = cfg.rainRisk;
  if (sGrip) {
    sGrip.innerHTML = `${cfg.gripCoeff} <small>(${cfg.gripText})</small>`;
    sGrip.style.color = cfg.gripColor;
  }
  if (sTyre) {
    sTyre.innerHTML = `<span class="tyre-icon">${cfg.tyreIcon}</span><span>TYRE SELECTION: <b>${cfg.tyre}</b></span>`;
  }

  // Update Start Race Links to pass weather parameter
  const targetUrl = `Buddh Circuit – F1 Cockpit.html?weather=${encodeURIComponent(type)}`;
  const btnStartHeader = document.getElementById("btn-start-race");
  const stageRaceCta = document.querySelector(".stage-race-cta");
  if (btnStartHeader) btnStartHeader.setAttribute("href", targetUrl);
  if (stageRaceCta) stageRaceCta.setAttribute("href", targetUrl);
}

// Weather Dropdown Toggle
const btnWeatherToggle = document.getElementById("btn-weather-toggle");
const weatherDropdown = document.getElementById("weather-dropdown");

if (btnWeatherToggle && weatherDropdown) {
  btnWeatherToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    const isHidden = weatherDropdown.hidden;
    weatherDropdown.hidden = !isHidden;
    btnWeatherToggle.classList.toggle("active", isHidden);
  });

  document.addEventListener("click", (e) => {
    if (!weatherDropdown.contains(e.target) && e.target !== btnWeatherToggle) {
      weatherDropdown.hidden = true;
      btnWeatherToggle.classList.remove("active");
    }
  });

  document.querySelectorAll(".weather-card").forEach(card => {
    card.addEventListener("click", () => {
      const w = card.getAttribute("data-weather");
      updateWeatherUI(w);
      showToast(`Track weather updated: ${w.toUpperCase()}`);
    });
  });
}

// Stage Weather Particles Animator
const wCanvas = document.getElementById("weather-canvas");
if (wCanvas) {
  const wctx = wCanvas.getContext("2d");
  let wWidth, wHeight;
  const particles = [];

  function resizeWeatherCanvas() {
    wWidth = wCanvas.width = wCanvas.parentElement.clientWidth;
    wHeight = wCanvas.height = wCanvas.parentElement.clientHeight;
  }
  window.addEventListener("resize", resizeWeatherCanvas);
  resizeWeatherCanvas();

  for (let i = 0; i < 70; i++) {
    particles.push({
      x: Math.random() * (wWidth || 800),
      y: Math.random() * (wHeight || 600),
      len: 12 + Math.random() * 16,
      speed: 4 + Math.random() * 6,
      size: 1.5 + Math.random() * 2.5,
      drift: (Math.random() - 0.5) * 1.5
    });
  }

  function renderWeatherStage() {
    if (!wctx) return;
    wctx.clearRect(0, 0, wWidth, wHeight);

    if (currentWeather === "rain") {
      wctx.strokeStyle = "rgba(0, 210, 255, 0.45)";
      wctx.lineWidth = 1.2;
      particles.forEach(p => {
        p.y += p.speed * 2.2;
        p.x += 1.5;
        if (p.y > wHeight) { p.y = -20; p.x = Math.random() * wWidth; }
        wctx.beginPath();
        wctx.moveTo(p.x, p.y);
        wctx.lineTo(p.x + 3, p.y + p.len);
        wctx.stroke();
      });
    } else if (currentWeather === "snow") {
      wctx.fillStyle = "rgba(255, 255, 255, 0.65)";
      particles.forEach(p => {
        p.y += p.speed * 0.45;
        p.x += Math.sin(p.y * 0.04) * 0.8 + p.drift;
        if (p.y > wHeight) { p.y = -10; p.x = Math.random() * wWidth; }
        wctx.beginPath();
        wctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        wctx.fill();
      });
    }
    requestAnimationFrame(renderWeatherStage);
  }
  renderWeatherStage();
}

// Game Mode Selection Modal Handler
const btnOpenGameModes = document.getElementById("btn-open-game-modes");
const gameModeModal = document.getElementById("game-mode-modal");
const btnCloseGameModes = document.getElementById("btn-close-game-modes");

if (btnOpenGameModes && gameModeModal) {
  btnOpenGameModes.addEventListener("click", () => {
    gameModeModal.removeAttribute("hidden");
  });
}

if (btnCloseGameModes && gameModeModal) {
  btnCloseGameModes.addEventListener("click", () => {
    gameModeModal.setAttribute("hidden", "true");
  });
}

if (gameModeModal) {
  gameModeModal.addEventListener("click", (e) => {
    if (e.target === gameModeModal) {
      gameModeModal.setAttribute("hidden", "true");
    }
  });
}

// Start track
window.addEventListener("DOMContentLoaded", () => {
  initTrack();
  updateWeatherUI(currentWeather);
  // Auto-start simulation after 800ms
  setTimeout(startSimulation, 800);
});
