# Overload — Gym Tracker PWA

A standalone progressive web app for tracking your gym progression. Works offline, installs to home screen, no Claude required.

## What's in here

- `index.html` — the entire app (HTML/CSS/JS in one file)
- `manifest.json` — PWA metadata
- `sw.js` — service worker (offline support)
- `icon-192.png` / `icon-512.png` — app icons

## Deploy with GitHub Pages (free, ~10 min)

1. **Create a GitHub account** at github.com if you don't have one.
2. **Create a new repo**: click `+` → New repository. Name it whatever (e.g. `overload`). Make it **Public**. Don't add a README.
3. **Upload all 5 files**: on the repo page, click "uploading an existing file" → drag all 5 files in → Commit.
4. **Enable Pages**: Settings tab → Pages (left sidebar) → Source: "Deploy from a branch" → Branch: `main` → `/ (root)` → Save.
5. **Wait ~1 minute**, then refresh that Pages settings screen. You'll see a URL like `https://yourusername.github.io/overload/`.
6. **Open that URL on your phone** in Chrome (Android) or Safari (iOS).

## Install to home screen

**iOS (Safari)**: tap the Share icon → "Add to Home Screen" → Add.

**Android (Chrome)**: you'll see the "Install" banner inside the app. Or tap the three-dot menu → "Install app" / "Add to Home Screen".

Once installed it opens like a native app, works offline, and your data persists in your phone's local storage.

## A note on your data

All data lives in your browser's localStorage on the device you use. It's not synced anywhere. If you clear browser data or uninstall the app, you lose your history.

If you want backup, you can periodically copy the data: open the app in a desktop browser, open DevTools console, run `copy(localStorage.getItem('overload:v1'))`, paste somewhere safe.

I can add an export/import button later if you want.

## Your seed data

Your 7 sessions from the notes app are preloaded on first launch.

## To update the app later

Edit `index.html` locally, push the change to the same repo (drag to replace), wait a minute for Pages to redeploy. Your data stays put because it lives on your phone, not the server.
