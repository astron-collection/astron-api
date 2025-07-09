#!/bin/bash

set -e

echo "🚀 Astron API - Deployment Script"

# 1. Installer les dépendances à la racine (pour les workspaces, si utilisés)
if [ -f package.json ]; then
  echo "📦 Installing root dependencies..."
  npm install
fi

# 2. Installer les dépendances API
if [ -d api ]; then
  echo "📦 Installing API dependencies..."
  cd api
  npm install
  cd ..
fi

# 3. Installer les dépendances UI
if [ -d ui ]; then
  echo "📦 Installing UI dependencies..."
  cd ui
  npm install
  cd ..
fi

# 4. Builder l'API (si applicable)
if [ -d api ]; then
  echo "🔨 Building API..."
  cd api
  npm run build || true
  cd ..
fi

# 5. Builder l'UI (si applicable)
if [ -d ui ]; then
  echo "🔨 Building UI..."
  cd ui
  npm run build || true
  cd ..
fi

echo "✅ Astron API is ready to deploy!"