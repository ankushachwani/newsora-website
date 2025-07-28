#!/bin/bash

# Newsora Website Deployment Script
echo "🚀 Deploying Newsora Website to GitHub Pages..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the newsora-website directory."
    exit 1
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Build the project
echo "🔨 Building the project..."
npm run build

# Deploy to GitHub Pages
echo "📤 Deploying to GitHub Pages..."
npm run deploy

echo "✅ Deployment complete! Your website should be available at:"
echo "   https://ankushachwani.github.io/newsora-website"
echo ""
echo "Note: It may take a few minutes for changes to appear on GitHub Pages."
