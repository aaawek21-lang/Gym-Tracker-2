// ============================================================
// Seed data
// ============================================================
const SEED_SESSIONS = [
  { id: 's1', date: '2026-05-03', name: 'Legs', exercises: [
    { name: 'Hack Squat', sets: [{w:185,r:10},{w:245,r:7},{w:245,r:7}] },
    { name: 'Ham Curls', sets: [{w:150,r:8},{w:150,r:8},{w:150,r:8}] },
    { name: 'Seated Calf Raises', sets: [{w:2.5,r:10,note:'plates'}] },
  ]},
  { id: 's2', date: '2026-05-04', name: 'Back & Bis', exercises: [
    { name: 'Lat Pulldown', sets: [{w:165,r:8},{w:165,r:7}] },
    { name: 'Seated Cable Row (Underhand)', sets: [{w:165,r:6},{w:143,r:6}] },
    { name: 'Seated Mid Row', sets: [{w:130,r:8}] },
    { name: 'Lat Rope Pullover', sets: [{w:55,r:8,note:'25kg'}] },
  ]},
  { id: 's3', date: '2026-05-05', name: 'Chest & Tris', exercises: [
    { name: 'Incline Bench', sets: [{w:185,r:5},{w:185,r:5},{w:165,r:8}] },
    { name: 'Seated Chest Press Machine', sets: [{w:180,r:5,note:'2 plates'},{w:180,r:5},{w:135,r:0,note:'1.5 plates'}] },
    { name: 'Standing Chest Flys (6 wide / 9 low)', sets: [{w:13,r:11},{w:20,r:8},{w:20,r:8}] },
    { name: 'Tricep V-Bar Pushdown', sets: [{w:60.5,r:12,note:'rest-pause at 8'},{w:60.5,r:10,note:'rest-pause at 7'}] },
    { name: 'EZ Bar Skull Crusher', sets: [{w:50,r:9},{w:50,r:10},{w:50,r:10}] },
    { name: 'Dips', sets: [{w:35,r:4,note:'+35lbs'},{w:0,r:8,note:'bodyweight'}] },
    { name: 'Ab Machine', sets: [{w:185,r:9}] },
  ]},
  { id: 's4', date: '2026-05-06', name: 'Shoulders & Traps', exercises: [
    { name: 'Shoulder Press', sets: [{w:120,r:8,note:'60s controlled'},{w:120,r:8},{w:120,r:6}] },
    { name: 'Lateral Raise (Chest Supported DB)', sets: [{w:45,r:9,note:'22.5s'},{w:45,r:12},{w:45,r:10}] },
    { name: 'Seated Face Pull', sets: [{w:60.5,r:10,note:'27.5kg'},{w:60.5,r:10},{w:60.5,r:10}] },
    { name: 'Rear Delt Fly (Single Arm)', sets: [{w:0,r:10,note:'3 notches down'},{w:0,r:10}] },
    { name: 'Seated Lat Raise Machine', sets: [{w:100,r:8},{w:100,r:8},{w:100,r:8}] },
    { name: 'Shrugs', sets: [{w:50,r:12}] },
  ]},
  { id: 's5', date: '2026-05-17', name: 'Chest & Tris', exercises: [
    { name: 'Incline Bench', sets: [{w:185,r:4},{w:185,r:5},{w:165,r:8}] },
    { name: 'Converging Chest Press', sets: [{w:130,r:6},{w:130,r:6}] },
    { name: 'Fly Machine (6 wide / 9 down)', sets: [{w:20,r:8},{w:20,r:9},{w:20,r:8}] },
    { name: 'Tricep V-Bar Pushdown', sets: [{w:60.5,r:12,note:'rest-pause at 8'},{w:60.5,r:11,note:'rest-pause at 7'}] },
  ]},
  { id: 's6', date: '2026-05-18', name: 'Back & Bis', note: 'sore traps and neck', exercises: [
    { name: 'Lat Pulldown', sets: [{w:165,r:8,note:'bad form'},{w:143,r:7}] },
    { name: 'Seated Cable Row (Underhand)', sets: [{w:165,r:8},{w:165,r:6}] },
    { name: 'Seated Chest Supported Row', sets: [{w:130,r:8},{w:130,r:7},{w:130,r:6}] },
    { name: 'Preacher Curl (seat halfway)', sets: [{w:90,r:10},{w:90,r:8}] },
    { name: 'Standing Bayesian Curl', sets: [{w:225,r:6},{w:225,r:7}] },
    { name: 'Hammer Curl (bar + D-handles)', sets: [{w:55,r:7},{w:49,r:5,note:'bad rest'}] },
  ]},
  { id: 's7', date: '2026-05-19', name: 'Legs (Hammer Strength)', exercises: [
    { name: 'Pendulum Squat', sets: [{w:35,r:8,note:'25+10'},{w:35,r:8},{w:45,r:6,note:'1 plate'}] },
    { name: 'Lying Ham Curl', sets: [{w:130,r:8},{w:130,r:8},{w:130,r:7}] },
    { name: 'Unilateral Leg Extension', sets: [{w:45,r:8},{w:45,r:8},{w:45,r:6}] },
    { name: 'Calf Raises', sets: [{w:90,r:10,note:'1 plate/side'},{w:90,r:10},{w:90,r:8}] },
    { name: 'Back Extension (burnout)', sets: [{w:25,r:6},{w:25,r:6},{w:25,r:4}] },
  ]},
];

// ============================================================
// Storage
// ============================================================
const KEY = 'overload:v1';
const LIVE_KEY = 'overload:live:v1';
let sessions = [];
let live = null;

function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) sessions = JSON.parse(raw);
    else { sessions = SEED_SESSIONS; save(); }
  } catch (e) { sessions = SEED_SESSIONS; }
  try {
    const raw = localStorage.getItem(LIVE_KEY);
    if (raw) live = JSON.parse(raw);
  } catch (e) { live = null; }
}
function save() {
  try { localStorage.setItem(KEY, JSON.stringify(sessions)); } catch (e) {}
}
function saveLive() {
  try {
    if (live) localStorage.setItem(LIVE_KEY, JSON.stringify(live));
    else localStorage.removeItem(LIVE_KEY);
  } catch (e) {}
}

// ============================================================
// Logic
// ============================================================
const norm = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, '');
const bestSet = (sets) => sets.length ? [...sets].sort((a,b) => (b.w-a.w)||(b.r-a.r))[0] : null;
const volume = (sets) => sets.reduce((a,s) => a + s.w*s.r, 0);

function historyFor(exName) {
  const key = norm(exName);
  const out = [];
  for (const s of sessions) {
    for (const ex of s.exercises) {
      if (norm(ex.name) === key) out.push({ date: s.date, sessionName: s.name, sets: ex.sets });
    }
  }
  return out.sort((a,b) => b.date.localeCompare(a.date));
}

function suggest(history) {
  if (!history.length) return null;
  const last = history[0];
  const ls = last.sets;
  const lb = bestSet(ls);
  if (!lb) return null;
  const maxR = Math.max(...ls.map(s => s.r));
  const minR = Math.min(...ls.filter(s => s.r > 0).map(s => s.r));
  const workSets = ls.filter(s => s.w === lb.w && s.r > 0);
  const all8 = workSets.length >= 2 && workSets.every(s => s.r >= 8);
  const all10 = workSets.length >= 2 && workSets.every(s => s.r >= 10);

  let trend = 'first';
  if (history.length > 1) {
    const prev = history[1];
    const pb = bestSet(prev.sets);
    const lv = volume(ls), pv = volume(prev.sets);
    if (lb.w > pb.w) trend = 'up-weight';
    else if (lv > pv * 1.03) trend = 'up-volume';
    else if (lv < pv * 0.97) trend = 'down';
    else trend = 'flat';
  }

  let rec;
  if (all10) {
    const bump = lb.w >= 100 ? 10 : 5;
    rec = `Add weight. Try ${lb.w + bump} × 6-8`;
  } else if (all8) {
    const bump = lb.w >= 100 ? 5 : 2.5;
    rec = `Bump to ${lb.w + bump} × 6-8, or push ${lb.w} for ${maxR + 1}+`;
  } else if (minR < 6) {
    rec = `Hold ${lb.w}. Get all sets to 6+`;
  } else {
    rec = `Hold ${lb.w}. Push for ${maxR + 1} reps on top set`;
  }
  return { rec, trend, lb, ls };
}

const TREND_LABELS = { 'up-weight': 'UP', 'up-volume': 'VOL+', 'down': 'DOWN', 'flat': 'FLAT', 'first': 'NEW' };
const TREND_CLASS = { 'up-weight': 'trend-up', 'up-volume': 'trend-up', 'down': 'trend-down', 'flat': 'trend-flat', 'first': 'trend-first' };

function setsToShort(sets) {
  return sets.map(s => `<span class="w">${s.w}</span>×${s.r}`).join(', ');
}
function setsToPills(sets) {
  return sets.map(s => `<span class="set-pill"><span class="w">${s.w}</span><span class="x">×</span>${s.r}${s.note ? `<span class="note">(${s.note})</span>` : ''}</span>`).join('');
}

// ============================================================
// Rest timer logic
// ============================================================
function restSecondsFor(exName) {
  const n = exName.toLowerCase();
  // Heavy compounds: 180s
  if (/(hack squat|pendulum squat|leg press|deadlift|barbell squat|back squat|front squat)/.test(n)) return 180;
  if (/incline bench|flat bench|bench press/.test(n) && !/machine|chest press/.test(n)) return 180;
  if (/shoulder press|overhead press|ohp|military press/.test(n)) return 180;
  // Mid compounds: 120s
  if (/(row|pulldown|pullover|dip|chest press|converging|chin|pull[- ]?up)/.test(n)) return 120;
  if (/(ham curl|leg extension|leg ext|preacher|bayesian)/.test(n)) return 120;
  // Isolation: 75s
  if (/(curl|fly|raise|extension|pushdown|skull|shrug|calf|kickback|ab |abs|crunch|face pull|rear delt|back ext|hyperext)/.test(n)) return 75;
  return 120;
}

function fmtTime(secs) {
  if (secs < 0) secs = 0;
  const m = Math.floor(secs / 60);
  const s = secs % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}

// ============================================================
// Muscle group mapping
// ============================================================
function musclesFor(exName) {
  const n = exName.toLowerCase();
  const out = new Set();
  if (/(squat|leg press|leg ext|lunge|step up)/.test(n)) out.add('Quads');
  if (/(ham curl|rdl|romanian|good morning|hip thrust)/.test(n)) { out.add('Hamstrings'); out.add('Glutes'); }
  if (/(squat|deadlift|lunge|hip thrust|leg press|glute)/.test(n)) out.add('Glutes');
  if (/(calf|calve)/.test(n)) out.add('Calves');
  if (/(pulldown|pull[- ]?up|chin[- ]?up|pullover)/.test(n)) out.add('Lats');
  if (/(row|seal row)/.test(n)) { out.add('Lats'); out.add('Upper Back'); }
  if (/(face pull|rear delt|reverse fly)/.test(n)) out.add('Rear Delts');
  if (/(shrug|trap)/.test(n)) out.add('Traps');
  if (/(back ext|hyperext|deadlift)/.test(n)) out.add('Lower Back');
  if (/(bench|chest press|chest fly|fly machine|push[- ]?up|dip|pec|incline|decline|converging)/.test(n) && !/lateral|leg|rear/.test(n)) {
    out.add('Chest');
  }
  if (/(shoulder press|overhead press|military|ohp|arnold)/.test(n)) { out.add('Front Delts'); out.add('Triceps'); }
  if (/(lateral raise|lat raise|side raise)/.test(n)) out.add('Side Delts');
  if (/(curl)/.test(n) && !/ham|leg/.test(n)) out.add('Biceps');
  if (/(tricep|skull|pushdown|kickback|close grip)/.test(n)) out.add('Triceps');
  if (/dip/.test(n)) { out.add('Triceps'); out.add('Chest'); }
  if (/(ab |abs|crunch|plank|leg raise)/.test(n)) out.add('Abs');
  return [...out];
}

const RECOVERY_HOURS = {
  'Quads': 72, 'Hamstrings': 72, 'Glutes': 60, 'Calves': 48,
  'Chest': 60, 'Lats': 60, 'Upper Back': 60, 'Lower Back': 72,
  'Front Delts': 48, 'Side Delts': 48, 'Rear Delts': 48,
  'Traps': 48, 'Biceps': 48, 'Triceps': 48, 'Abs': 36,
};

const MUSCLE_ORDER = [
  'Chest', 'Lats', 'Upper Back', 'Rear Delts',
  'Front Delts', 'Side Delts', 'Traps',
  'Biceps', 'Triceps',
  'Quads', 'Hamstrings', 'Glutes', 'Calves', 'Lower Back',
  'Abs'
];

function muscleStatus() {
  const now = new Date();
  const map = {};
  const sorted = [...sessions].sort((a,b) => b.date.localeCompare(a.date));
  for (const s of sorted) {
    for (const ex of s.exercises) {
      const muscles = musclesFor(ex.name);
      for (const m of muscles) {
        if (!map[m]) map[m] = { lastDate: s.date, sessionName: s.name };
      }
    }
  }
  for (const m of Object.keys(map)) {
    const d = new Date(map[m].lastDate + 'T12:00:00');
    const hoursAgo = (now - d) / (1000 * 60 * 60);
    const recoveryHours = RECOVERY_HOURS[m] || 48;
    const hoursUntilReady = recoveryHours - hoursAgo;
    map[m].hoursAgo = hoursAgo;
    map[m].recoveryHours = recoveryHours;
    map[m].hoursUntilReady = hoursUntilReady;
    if (hoursAgo >= recoveryHours) map[m].status = 'ready';
    else if (hoursAgo >= recoveryHours * 0.6) map[m].status = 'cooking';
    else map[m].status = 'fresh';
  }
  return map;
}

function recommendSplit() {
  const status = muscleStatus();
  const sorted = [...sessions].sort((a,b) => b.date.localeCompare(a.date));
  const splits = new Map();
  for (const s of sorted) {
    const k = norm(s.name);
    if (!splits.has(k)) splits.set(k, s);
  }
  if (splits.size === 0) return { name: 'Start Training', reason: 'No history yet — log a session or start a live one.' };

  const splitScores = [];
  for (const split of splits.values()) {
    const splitMuscles = new Set();
    for (const ex of split.exercises) {
      for (const m of musclesFor(ex.name)) splitMuscles.add(m);
    }
    let readyCount = 0, cookingCount = 0, freshCount = 0;
    for (const m of splitMuscles) {
      const st = status[m];
      if (!st) { readyCount++; continue; }
      if (st.status === 'ready') readyCount++;
      else if (st.status === 'cooking') cookingCount++;
      else freshCount++;
    }
    const splitDate = new Date(split.date + 'T12:00:00');
    const splitHoursAgo = (new Date() - splitDate) / (1000 * 60 * 60);
    const score = (readyCount * 10) - (freshCount * 20) - (cookingCount * 5) + (splitHoursAgo / 24);
    splitScores.push({ split, score, readyCount, cookingCount, freshCount, splitHoursAgo, totalMuscles: splitMuscles.size });
  }
  splitScores.sort((a,b) => b.score - a.score);
  const best = splitScores[0];

  let reason;
  if (best.freshCount > 0) {
    reason = `Best available, but ${best.freshCount} muscle group${best.freshCount > 1 ? 's' : ''} still recovering. Consider rest if sore.`;
  } else if (best.cookingCount > 0) {
    reason = `${best.readyCount} of ${best.totalMuscles} groups fully recovered. Go time.`;
  } else {
    reason = `All muscle groups fully recovered. ${Math.round(best.splitHoursAgo / 24)} days since last ${best.split.name}.`;
  }
  return { name: best.split.name, reason, lastDate: best.split.date };
}

// ============================================================
// Render: Today
// ============================================================
function renderToday() {
  const rec = recommendSplit();
  const status = muscleStatus();
  const trained = Object.keys(status);
  trained.sort((a,b) => {
    const ai = MUSCLE_ORDER.indexOf(a);
    const bi = MUSCLE_ORDER.indexOf(b);
    return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
  });

  const muscleHtml = trained.map(m => {
    const st = status[m];
    const cls = st.status;
    let value, label;
    if (st.status === 'ready') {
      value = 'READY';
      const daysAgo = Math.round(st.hoursAgo / 24);
      label = `${daysAgo}d ago`;
    } else {
      const hUntil = Math.round(st.hoursUntilReady);
      if (hUntil >= 24) {
        value = `${Math.round(hUntil / 24)}D`;
        label = 'until ready';
      } else {
        value = `${hUntil}H`;
        label = 'until ready';
      }
    }
    return `<div class="muscle-row ${cls}"><div class="muscle-info"><div class="muscle-name">${m}</div><div class="muscle-last">Last trained ${st.lastDate}</div></div><div class="muscle-status ${cls}"><div class="muscle-status-value">${value}</div><div class="muscle-status-label">${label}</div></div></div>`;
  }).join('');

  const recHtml = `<div class="recovery-rec"><div class="recovery-rec-label">Recommended Today</div><div class="recovery-rec-title">${rec.name.toUpperCase()}</div><div class="recovery-rec-reason">${rec.reason}</div></div>`;
  document.getElementById('today-content').innerHTML = recHtml + (muscleHtml ? `<div class="muscle-grid">${muscleHtml}</div>` : '<div class="empty">No training history yet.</div>');
}

// ============================================================
// Live Session
// ============================================================
function startLive(splitName) {
  const past = [...sessions].sort((a,b) => b.date.localeCompare(a.date))
    .find(s => norm(s.name) === norm(splitName));
  const exercises = past ? past.exercises.map(ex => ({ name: ex.name, sets: [] })) : [];
  live = {
    name: splitName,
    startedAt: Date.now(),
    exercises,
    currentExIdx: 0,
    timer: { active: false, startedAt: 0, target: 0, lastSetExIdx: null },
  };
  saveLive();
  // Switch to Live tab
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.querySelector('[data-view="live"]').classList.add('active');
  document.getElementById('view-live').classList.add('active');
  renderLive();
}

function endLive(saveSession) {
  if (saveSession && live) {
    const validEx = live.exercises.filter(ex => ex.sets.length > 0);
    if (validEx.length > 0) {
      const today = new Date().toISOString().slice(0,10);
      sessions = [{
        id: 's-' + Date.now(),
        date: today,
        name: live.name,
        exercises: validEx.map(ex => ({ name: ex.name, sets: ex.sets })),
      }, ...sessions];
      save();
    }
  }
  live = null;
  saveLive();
  renderEverything();
}

function renderLive() {
  const root = document.getElementById('live-content');
  const dot = document.getElementById('tab-dot');

  if (!live) {
    dot.style.display = 'none';
    const splits = [...new Set(sessions.map(s => s.name))];
    root.innerHTML = `
      <div class="live-start">
        <div class="live-start-title">START LIVE SESSION</div>
        <div class="live-start-sub">Log sets with auto rest timer</div>
        <div class="live-start-grid">
          ${splits.map(name => `<button class="live-start-input" data-start="${name.replace(/"/g, '&quot;')}">${name}</button>`).join('')}
          <input type="text" id="custom-split" placeholder="Custom split name…" />
          <button class="live-start-input" id="custom-start" style="background: var(--accent); color: #000; font-weight: 700; border-color: var(--accent);">+ Custom Session</button>
        </div>
      </div>
    `;
    document.querySelectorAll('[data-start]').forEach(b => b.addEventListener('click', () => startLive(b.dataset.start)));
    document.getElementById('custom-start').addEventListener('click', () => {
      const name = document.getElementById('custom-split').value.trim();
      if (!name) { alert('Enter a name'); return; }
      startLive(name);
    });
    return;
  }

  dot.style.display = 'inline-block';
  const t = live.timer;
  let timerDisplay = fmtTime(t.target || 0);
  let timerClass = '';
  let timerLabel = 'TAP A SET TO START TIMER';
  let targetText = '';

  if (t.active) {
    const elapsed = Math.floor((Date.now() - t.startedAt) / 1000);
    const remaining = t.target - elapsed;
    if (remaining > 0) {
      timerDisplay = fmtTime(remaining);
      timerClass = 'running';
      timerLabel = 'RESTING';
      targetText = `Target: <span class="v">${fmtTime(t.target)}</span>`;
    } else {
      timerDisplay = '+' + fmtTime(-remaining);
      timerClass = 'overtime';
      timerLabel = 'OVERTIME — GET BACK TO IT';
      targetText = `Target was <span class="v">${fmtTime(t.target)}</span>`;
    }
  }

  const exHtml = live.exercises.map((ex, i) => {
    const rest = restSecondsFor(ex.name);
    const hist = historyFor(ex.name);
    const sug = suggest(hist);
    const isCurrent = i === live.currentExIdx;
    const setPills = ex.sets.map((s, j) => `<div class="set-pill-logged"><span class="w">${s.w}</span><span class="x">×</span>${s.r}<span class="rm" data-rm-set="${i}-${j}">×</span></div>`).join('');
    const targetHtml = sug ? `<div class="live-ex-target">${sug.rec}</div>` : '';
    return `
      <div class="live-ex ${isCurrent ? 'current' : ''}" data-ex-idx="${i}">
        <div class="live-ex-head">
          <div class="live-ex-name">${ex.name}</div>
          <div class="live-ex-rest">${rest}s rest</div>
        </div>
        ${targetHtml}
        ${setPills ? `<div class="set-list">${setPills}</div>` : ''}
        <div class="set-add">
          <input type="number" placeholder="weight" data-w-idx="${i}" inputmode="decimal" step="0.5" />
          <input type="number" placeholder="reps" data-r-idx="${i}" inputmode="numeric" />
          <button data-log-set="${i}">+ Set</button>
        </div>
      </div>
    `;
  }).join('');

  const totalMin = Math.floor((Date.now() - live.startedAt) / 60000);

  root.innerHTML = `
    <div class="live-active">
      <div class="live-header">
        <div class="live-header-name">${live.name}</div>
        <div class="live-header-meta">${totalMin} MIN</div>
      </div>
      <div class="timer-box">
        <div class="timer-display ${timerClass}" id="timer-display">${timerDisplay}</div>
        <div class="timer-label" id="timer-label">${timerLabel}</div>
        <div class="timer-target" id="timer-target">${targetText}</div>
      </div>
      <div class="timer-controls">
        <button class="timer-btn" id="timer-sub">−15s</button>
        <button class="timer-btn primary" id="timer-toggle">${t.active ? 'STOP' : 'START'}</button>
        <button class="timer-btn" id="timer-add">+15s</button>
      </div>
      <div class="exercise-list">${exHtml}</div>
      <div style="padding: 0 16px 12px;">
        <button class="live-add-ex" id="live-add-ex">+ Add Exercise</button>
      </div>
      <div class="live-footer">
        <button class="cancel-btn" id="live-cancel">Cancel</button>
        <button class="finish-btn" id="live-finish">Finish & Save</button>
      </div>
    </div>
  `;

  document.querySelectorAll('[data-log-set]').forEach(btn => {
    btn.addEventListener('click', () => {
      const i = +btn.dataset.logSet;
      const w = parseFloat(document.querySelector(`[data-w-idx="${i}"]`).value);
      const r = parseInt(document.querySelector(`[data-r-idx="${i}"]`).value);
      if (isNaN(w) || isNaN(r) || r <= 0) { alert('Enter valid weight and reps'); return; }
      logSet(i, w, r);
    });
  });
  document.querySelectorAll('[data-rm-set]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const [i, j] = btn.dataset.rmSet.split('-').map(Number);
      live.exercises[i].sets.splice(j, 1);
      saveLive();
      renderLive();
    });
  });
  document.getElementById('timer-toggle').addEventListener('click', () => {
    if (live.timer.active) {
      live.timer = { active: false, startedAt: 0, target: 0, lastSetExIdx: null };
    } else {
      const i = live.currentExIdx;
      const rest = live.exercises[i] ? restSecondsFor(live.exercises[i].name) : 120;
      live.timer = { active: true, startedAt: Date.now(), target: rest, lastSetExIdx: i };
    }
    lastTickRemaining = null;
    saveLive();
    renderLive();
  });
  document.getElementById('timer-add').addEventListener('click', () => {
    if (live.timer.active) { live.timer.target += 15; saveLive(); }
  });
  document.getElementById('timer-sub').addEventListener('click', () => {
    if (live.timer.active) { live.timer.target = Math.max(15, live.timer.target - 15); saveLive(); }
  });
  document.querySelectorAll('.live-ex').forEach(el => {
    el.addEventListener('click', (e) => {
      if (e.target.closest('input') || e.target.closest('button') || e.target.closest('.rm')) return;
      live.currentExIdx = +el.dataset.exIdx;
      saveLive();
      renderLive();
    });
  });
  document.getElementById('live-add-ex').addEventListener('click', () => {
    const name = prompt('Exercise name:');
    if (!name || !name.trim()) return;
    live.exercises.push({ name: name.trim(), sets: [] });
    live.currentExIdx = live.exercises.length - 1;
    saveLive();
    renderLive();
  });
  document.getElementById('live-cancel').addEventListener('click', () => {
    if (confirm('Cancel session? Sets will be lost.')) endLive(false);
  });
  document.getElementById('live-finish').addEventListener('click', () => {
    const total = live.exercises.reduce((a, ex) => a + ex.sets.length, 0);
    if (total === 0) {
      if (!confirm('No sets logged. Cancel?')) return;
      endLive(false);
    } else {
      endLive(true);
    }
  });
}

function logSet(exIdx, w, r) {
  live.exercises[exIdx].sets.push({ w, r });
  live.currentExIdx = exIdx;
  const rest = restSecondsFor(live.exercises[exIdx].name);
  live.timer = { active: true, startedAt: Date.now(), target: rest, lastSetExIdx: exIdx };
  lastTickRemaining = null;
  saveLive();
  renderLive();
}

// Audio context unlocked on first user gesture
let audioCtx = null;
let lastTickRemaining = null;
let timerInterval = null;

function unlockAudio() {
  if (audioCtx) return;
  try {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    // Play silent sound to unlock on iOS
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    gain.gain.value = 0;
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.01);
  } catch (e) {}
}
document.addEventListener('touchstart', unlockAudio, { once: true });
document.addEventListener('click', unlockAudio, { once: true });

function startTimerTick() {
  if (timerInterval) return;
  timerInterval = setInterval(() => {
    if (!live || !live.timer.active) return;
    const t = live.timer;
    const elapsed = Math.floor((Date.now() - t.startedAt) / 1000);
    const remaining = t.target - elapsed;

    const disp = document.getElementById('timer-display');
    const label = document.getElementById('timer-label');
    const target = document.getElementById('timer-target');
    if (!disp) return;

    if (remaining > 0) {
      disp.textContent = fmtTime(remaining);
      disp.className = 'timer-display running';
      if (label) label.textContent = 'RESTING';
      if (target) target.innerHTML = `Target: <span class="v">${fmtTime(t.target)}</span>`;
    } else {
      disp.textContent = '+' + fmtTime(-remaining);
      disp.className = 'timer-display overtime';
      if (label) label.textContent = 'OVERTIME — GET BACK TO IT';
      if (target) target.innerHTML = `Target was <span class="v">${fmtTime(t.target)}</span>`;
    }

    if (lastTickRemaining !== null && lastTickRemaining > 0 && remaining <= 0) {
      triggerAlert();
      disp.classList.add('alert');
      setTimeout(() => disp.classList.remove('alert'), 2000);
    }
    lastTickRemaining = remaining;
  }, 1000);
}

function triggerAlert() {
  if (navigator.vibrate) {
    try { navigator.vibrate([200, 100, 200, 100, 400]); } catch (e) {}
  }
  try {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const playBeep = (freq, start, duration) => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.type = 'sine';
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0, audioCtx.currentTime + start);
      gain.gain.linearRampToValueAtTime(0.3, audioCtx.currentTime + start + 0.02);
      gain.gain.linearRampToValueAtTime(0, audioCtx.currentTime + start + duration);
      osc.start(audioCtx.currentTime + start);
      osc.stop(audioCtx.currentTime + start + duration);
    };
    playBeep(880, 0, 0.15);
    playBeep(880, 0.2, 0.15);
    playBeep(1100, 0.4, 0.3);
  } catch (e) {}
}

// ============================================================
// Render: Plan
// ============================================================
function renderNext() {
  const sorted = [...sessions].sort((a,b) => b.date.localeCompare(a.date));
  const splits = new Map();
  for (const s of sorted) {
    const k = norm(s.name);
    if (!splits.has(k)) splits.set(k, s);
  }
  const html = [...splits.values()].map(split => {
    const exHtml = split.exercises.map((ex, i) => {
      const hist = historyFor(ex.name);
      const sug = suggest(hist);
      const trendBadge = sug ? `<span class="ex-trend ${TREND_CLASS[sug.trend]}">${TREND_LABELS[sug.trend]}</span>` : '';
      const historyRows = hist.slice(1).map(h => `<div class="ex-history-row"><span class="date">${h.date}</span>${setsToShort(h.sets)}</div>`).join('');
      return `<div class="ex" data-ex-id="${split.id}-${i}"><div class="ex-top"><div class="ex-name"><span class="chev"></span>${ex.name}</div>${trendBadge}</div>${sug ? `<div class="ex-rec">${sug.rec}</div>` : ''}<div class="ex-last">Last: ${setsToShort(ex.sets)}</div>${hist.length > 1 ? `<div class="ex-history"><div class="ex-history-label">History</div>${historyRows}</div>` : ''}</div>`;
    }).join('');
    return `<div class="split"><div class="split-header"><div class="split-name">${split.name}</div><div class="split-date">${split.date}</div></div>${exHtml}</div>`;
  }).join('');
  document.getElementById('next-content').innerHTML = html || '<div class="empty">No sessions yet.</div>';
  document.querySelectorAll('#view-next .ex').forEach(el => {
    el.addEventListener('click', () => el.classList.toggle('open'));
  });
}

// ============================================================
// Render: History
// ============================================================
function renderHistory(filter) {
  filter = filter || '';
  const map = new Map();
  const sorted = [...sessions].sort((a,b) => b.date.localeCompare(a.date));
  for (const s of sorted) {
    for (const ex of s.exercises) {
      const k = norm(ex.name);
      if (!map.has(k)) map.set(k, { name: ex.name, lastDate: s.date });
    }
  }
  const filtered = [...map.values()].filter(e => e.name.toLowerCase().includes(filter.toLowerCase()));
  const html = filtered.map(ex => {
    const hist = historyFor(ex.name);
    const sug = suggest(hist);
    const trendBadge = sug ? `<span class="ex-trend ${TREND_CLASS[sug.trend]}">${TREND_LABELS[sug.trend]}</span>` : '';
    const ss = hist.map(h => `<div class="hist-session"><div class="d">${h.date}</div><div class="sets">${setsToPills(h.sets)}</div></div>`).join('');
    return `<div class="hist-card" data-name="${ex.name}"><div class="hist-head"><div><div class="hist-name"><span class="chev"></span>${ex.name}</div><div class="hist-meta">${hist.length} session${hist.length !== 1 ? 's' : ''} · last ${ex.lastDate}</div></div>${trendBadge}</div><div class="hist-body">${sug ? `<div class="hist-rec"><div class="hist-rec-label">Next session</div><div class="hist-rec-text">${sug.rec}</div></div>` : ''}${ss}</div></div>`;
  }).join('');
  document.getElementById('history-content').innerHTML = html || '<div class="empty">No matches</div>';
  document.querySelectorAll('.hist-head').forEach(el => {
    el.addEventListener('click', () => el.parentElement.classList.toggle('open'));
  });
}

// ============================================================
// Render: Log
// ============================================================
function renderLog() {
  const sorted = [...sessions].sort((a,b) => b.date.localeCompare(a.date));
  const html = sorted.map(s => `<div class="session-card"><div class="session-head"><div><div class="session-name">${s.name}</div><div class="session-date">${s.date}</div>${s.note ? `<div class="session-note">${s.note}</div>` : ''}</div><button class="delete-btn" data-del="${s.id}">Delete</button></div>${s.exercises.map(ex => `<div class="session-ex"><div class="n">${ex.name}</div><div class="s">${ex.sets.map(set => `${set.w}×${set.r}`).join(', ')}</div></div>`).join('')}</div>`).join('');
  document.getElementById('log-content').innerHTML = html || '<div class="empty">Nothing logged yet</div>';
  document.querySelectorAll('[data-del]').forEach(btn => {
    btn.addEventListener('click', () => {
      if (confirm('Delete this session?')) {
        sessions = sessions.filter(x => x.id !== btn.dataset.del);
        save();
        renderEverything();
      }
    });
  });
}

// ============================================================
// Add past session form
// ============================================================
let formExercises = [{name:'', sets:''}];
function renderForm() {
  const today = new Date().toISOString().slice(0,10);
  const exRows = formExercises.map((ex, i) => `<div class="form-ex-row"><input type="text" placeholder="Exercise" data-fx-name="${i}" value="${ex.name.replace(/"/g,'&quot;')}" /><input type="text" placeholder="185x10, 245x7" data-fx-sets="${i}" value="${ex.sets.replace(/"/g,'&quot;')}" /></div>`).join('');
  document.getElementById('form-container').innerHTML = `<div class="form"><div class="form-row"><input type="date" id="f-date" value="${today}" /><input type="text" id="f-name" placeholder="Session (e.g. Legs)" /></div>${exRows}<button class="form-add-ex" id="f-addex">+ Add Exercise</button><div class="form-buttons"><button class="btn btn-secondary" id="f-cancel">Cancel</button><button class="btn btn-primary" id="f-save">Save Session</button></div></div>`;
  document.querySelectorAll('[data-fx-name]').forEach(input => {
    input.addEventListener('input', (e) => { formExercises[+e.target.dataset.fxName].name = e.target.value; });
  });
  document.querySelectorAll('[data-fx-sets]').forEach(input => {
    input.addEventListener('input', (e) => { formExercises[+e.target.dataset.fxSets].sets = e.target.value; });
  });
  document.getElementById('f-addex').addEventListener('click', () => {
    formExercises.push({name:'', sets:''});
    renderForm();
  });
  document.getElementById('f-cancel').addEventListener('click', () => {
    formExercises = [{name:'', sets:''}];
    document.getElementById('form-container').innerHTML = '';
  });
  document.getElementById('f-save').addEventListener('click', saveForm);
}
function parseSet(str) {
  const m = str.trim().match(/^(\d+(?:\.\d+)?)\s*[x×]\s*(\d+)$/i);
  if (!m) return null;
  return { w: parseFloat(m[1]), r: parseInt(m[2], 10) };
}
function saveForm() {
  const date = document.getElementById('f-date').value;
  const name = document.getElementById('f-name').value.trim();
  if (!name) { alert('Add a session name'); return; }
  const validEx = [];
  for (const ex of formExercises) {
    if (!ex.name.trim()) continue;
    const sets = ex.sets.split(',').map(s => parseSet(s)).filter(Boolean);
    if (sets.length === 0) continue;
    validEx.push({ name: ex.name.trim(), sets });
  }
  if (validEx.length === 0) { alert('Add at least one exercise like "185x10"'); return; }
  sessions = [{ id: 's-'+Date.now(), date, name, exercises: validEx }, ...sessions];
  save();
  formExercises = [{name:'', sets:''}];
  document.getElementById('form-container').innerHTML = '';
  renderEverything();
}

// ============================================================
// Stats / orchestration
// ============================================================
function updateStats() {
  document.getElementById('stat-sessions').textContent = sessions.length;
  const exSet = new Set();
  for (const s of sessions) for (const e of s.exercises) exSet.add(norm(e.name));
  document.getElementById('stat-exercises').textContent = exSet.size;
}
function renderEverything() {
  updateStats();
  renderToday();
  renderLive();
  renderNext();
  renderHistory(document.getElementById('search').value);
  renderLog();
}

document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById('view-' + tab.dataset.view).classList.add('active');
  });
});
document.getElementById('search').addEventListener('input', (e) => renderHistory(e.target.value));
document.getElementById('addBtn').addEventListener('click', () => {
  if (document.querySelector('.form')) return;
  renderForm();
});

// Export / Import
document.getElementById('exportBtn').addEventListener('click', () => {
  const data = { version: 1, exportedAt: new Date().toISOString(), sessions };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `overload-backup-${new Date().toISOString().slice(0,10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
});
document.getElementById('importBtn').addEventListener('click', () => {
  document.getElementById('importFile').click();
});
document.getElementById('importFile').addEventListener('change', async (e) => {
  const file = e.target.files[0];
  if (!file) return;
  try {
    const text = await file.text();
    const data = JSON.parse(text);
    if (!data.sessions || !Array.isArray(data.sessions)) throw new Error('Invalid file');
    const mode = confirm(`Import ${data.sessions.length} sessions?\n\nOK = REPLACE all current data\nCancel = MERGE with current data`);
    if (mode) {
      sessions = data.sessions;
    } else {
      const existing = new Set(sessions.map(s => s.id));
      for (const s of data.sessions) if (!existing.has(s.id)) sessions.push(s);
    }
    save();
    renderEverything();
    alert('Import complete.');
  } catch (err) {
    alert('Import failed: ' + err.message);
  }
  e.target.value = '';
});

// PWA
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(e => console.warn('SW failed', e));
  });
}
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  if (!localStorage.getItem('overload:installed') && !localStorage.getItem('overload:dismissed')) {
    document.getElementById('installBanner').classList.add('show');
  }
});
document.getElementById('installBtn').addEventListener('click', async () => {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  const { outcome } = await deferredPrompt.userChoice;
  if (outcome === 'accepted') localStorage.setItem('overload:installed', '1');
  deferredPrompt = null;
  document.getElementById('installBanner').classList.remove('show');
});
document.getElementById('installClose').addEventListener('click', () => {
  localStorage.setItem('overload:dismissed', '1');
  document.getElementById('installBanner').classList.remove('show');
});

// Boot
load();
renderEverything();
startTimerTick();

// Wake lock
let wakeLock = null;
async function requestWakeLock() {
  try {
    if ('wakeLock' in navigator && live) {
      wakeLock = await navigator.wakeLock.request('screen');
    }
  } catch (e) {}
}
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible' && live) requestWakeLock();
});
if (live) requestWakeLock();
