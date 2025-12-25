@echo off
echo ======================================
echo Git Setup and Push to GitHub
echo ======================================
echo.

REM Step 1: Initialize git repository
echo [1/7] Initializing git repository...
git init
if errorlevel 1 (
    echo ERROR: Failed to initialize git
    pause
    exit /b 1
)
echo ✓ Git initialized
echo.

REM Step 2: Configure git (if not already configured)
echo [2/7] Configuring git user...
git config user.name "Jai Samyukth" 2>nul
git config user.email "jaisamyukth@genrecai.com" 2>nul
echo ✓ Git user configured
echo.

REM Step 3: Add remote
echo [3/7] Adding GitHub remote...
git remote add origin git@github.com:JaiSamyukth/Genrec_AI.git 2>nul
if errorlevel 1 (
    echo Remote already exists, updating URL...
    git remote set-url origin git@github.com:JaiSamyukth/Genrec_AI.git
)
echo ✓ Remote configured
echo.

REM Step 4: Create main branch
echo [4/7] Setting up main branch...
git branch -M main
echo ✓ Main branch ready
echo.

REM Step 5: Add all files
echo [5/7] Adding all files to staging...
git add .
echo ✓ Files staged
echo.

REM Step 6: Commit
echo [6/7] Committing changes...
git commit -m "Global brand audit: consistency fixes + navbar hydration fix" -m "" -m "Brand Consistency Fixes (9 files):" -m "- Removed 'Enterprise Web Development' from metadata" -m "- Replaced 'Data Center Infrastructure' with 'Founder-Led Engineering Studio'" -m "- Softened absolute AI claims on LuminaIQ" -m "- Replaced hard metrics with qualified outcomes on service pages" -m "- Removed SaaS marketing drift from Tabble" -m "- Fixed blog retention metric claims" -m "" -m "Navbar Hydration Fix (2 files):" -m "- Enabled SSR for HeaderEnhanced component" -m "- Removed mounted state guard" -m "- Now shows full navigation consistently across all pages"
if errorlevel 1 (
    echo ERROR: Failed to commit
    pause
    exit /b 1
)
echo ✓ Changes committed
echo.

REM Step 7: Push to GitHub
echo [7/7] Pushing to GitHub...
echo NOTE: You may need to authenticate with GitHub
git push -u origin main
if errorlevel 1 (
    echo.
    echo ERROR: Push failed. This could be due to:
    echo 1. SSH key not configured
    echo 2. Network issues
    echo 3. Repository already exists with different history
    echo.
    echo Try using HTTPS instead by running:
    echo git remote set-url origin https://github.com/JaiSamyukth/Genrec_AI.git
    echo git push -u origin main
    pause
    exit /b 1
)

echo.
echo ======================================
echo ✓ SUCCESS! Code pushed to GitHub
echo ======================================
echo.
echo Repository: https://github.com/JaiSamyukth/Genrec_AI
echo.
pause
