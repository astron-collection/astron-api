@echo off
setlocal enabledelayedexpansion

echo 🚀 Astron API - Deployment Script

REM 1. Installer les dépendances à la racine (pour les workspaces, si utilisés)
if exist package.json (
  echo 📦 Installing root dependencies...
  call npm install
)

REM 2. Installer les dépendances API
if exist api\package.json (
  echo 📦 Installing API dependencies...
  pushd api
  call npm install
  popd
)

REM 3. Installer les dépendances UI
if exist ui\package.json (
  echo 📦 Installing UI dependencies...
  pushd ui
  call npm install
  popd
)

REM 4. Builder l'API (si applicable)
if exist api\package.json (
  echo 🔨 Building API...
  pushd api
  call npm run build
  popd
)

REM 5. Builder l'UI (si applicable)
if exist ui\package.json (
  echo 🔨 Building UI...
  pushd ui
  call npm run build
  popd
)

echo ✅ Astron API is ready to deploy!
pause