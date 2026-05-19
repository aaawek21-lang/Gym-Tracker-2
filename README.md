# Overload — Gym Tracker PWA (v2)

A standalone progressive web app for tracking your gym progression. Works offline, installs to home screen, no Claude required.

## What's new in v2

- **Today tab** — recommends which split to train based on muscle recovery (48-72hr per group). Shows status of every muscle: READY, cooking, or fresh.
- **Live tab** — start a session, log sets one at a time, auto-starts a rest timer after each set with vibration + sound when done. Rest length scales with the lift (180s for compounds, 120s for mid, 75s for isolation).
- **Export / Import** buttons in the header for backup. Move data between devices, or just keep a backup file in Drive/iCloud.

## Files

- `index.html` — markup + styles
- `app.js` — all the logic
- `manifest.json` — PWA metadata
- `sw.js` — service worker (offline + cache management)
- `icon-192.png` / `icon-512.png` — app icons

## How to update an already-deployed PWA

If you already have v1 deployed to GitHub Pages:

1. In your repo, **delete** the old `index.html`.
2. **Upload all 5 files from this update** (index.html, app.js, manifest.json, sw.js, and the icons if you want — they're unchanged).
3. Commit. Pages redeploys in ~1 minute.
4. On your phone, **close the app completely** (swipe it away) and reopen. The service worker bumped from v1 to v2 will fetch the new version and drop the old cache. Your data stays intact.

If the app still looks old after reopening, force a refresh: in Chrome on Android, tap the three-dot menu → Settings → Site settings → All sites → find your GitHub Pages URL → Clear & reset. Then reopen. On iOS Safari, settings → Safari → Advanced → Website Data → find the site → swipe to delete. Your localStorage data lives separately under your iOS app container and won't be affected if you've added to home screen.

**Future updates:** any time you push a code change, bump `CACHE = 'overload-v2'` in `sw.js` to `v3`, `v4`, etc. This forces the SW to clear the old cache so users see your changes.

## How to do a fresh deploy (if you haven't yet)

1. Make a free GitHub account at github.com.
2. New repo (any name, **Public**, no README).
3. Upload all 6 files (5 + this README).
4. Settings → Pages → Source: "Deploy from a branch" → main → / (root) → Save.
5. Wait a minute, then open the URL shown in Pages settings on your phone.

## Install to home screen

**iOS Safari:** Share → "Add to Home Screen" → Add.
**Android Chrome:** look for the "Install" banner in the app, or three-dot menu → "Install app".

## Backup your data

The Export button downloads a JSON file with all your sessions. Save it to Drive, iCloud, email it to yourself, etc. The Import button restores from a JSON file — choose REPLACE (wipe and replace) or MERGE (keep current + add new sessions).

Recommend exporting every couple of weeks. It's a 5-second tap.

## Live session — how it works

1. Tap **Live** tab.
2. Tap one of your past splits (or create a custom one). If you tap "Legs", it auto-loads the exercises from your last Legs session.
3. For each exercise, enter weight + reps, tap **+ Set**. Timer auto-starts.
4. Timer vibrates + beeps when rest is up. Hit +15/−15 to adjust on the fly.
5. Tap **Finish & Save** when done — session goes into your history.

The recommended target above each exercise comes from your progressive overload logic (same as the Plan tab).

## Recovery logic

Each exercise maps to muscle groups. Each muscle has a recovery window:

- Quads, Hams, Lower Back: 72hr
- Chest, Lats, Upper Back, Glutes: 60hr
- Delts, Biceps, Triceps, Traps, Calves: 48hr
- Abs: 36hr

After your last training session for a muscle, it goes through three phases: **fresh** (recently hit, don't train), **cooking** (60%+ recovered, probably fine), **ready** (fully recovered, go).

The Today recommendation picks the split with the most ready muscles and fewest fresh ones, with a slight tiebreaker for splits you haven't done in a while.

## Limits to know

- Data is **device-local**. Export regularly.
- Timer keeps running while the tab is open. If you fully close the app, it'll resume correctly when you reopen (state is persisted).
- Wake lock keeps the screen on during a live session on most browsers.
- Audio needs one user tap to "unlock" (browser security). The first time you log a set, you've unlocked it for the session.
