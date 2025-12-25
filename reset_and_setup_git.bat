@echo off
echo ======================================
echo CLEAN GIT RESET - Starting Fresh
echo ======================================
echo.

echo This will completely reset your git repository and start fresh.
echo Your code files are safe - this only deletes git history.
echo.
pause

REM Step 1: Delete the .git folder to completely reset
echo [1/6] Removing old git repository...
if exist .git (
    rmdir /s /q .git
    echo ✓ Old git repository removed
) else (
    echo ✓ No git repository found
)
echo.

REM Step 2: Initialize fresh git repository
echo [2/6] Initializing fresh git repository...
git init
echo ✓ Fresh git repository created
echo.

REM Step 3: Configure git user
echo [3/6] Configuring git user...
git config user.name "Jai Samyukth"
git config user.email "jaisamyukth@genrecai.com"
echo ✓ Git user configured
echo.

REM Step 4: Add remote
echo [4/6] Adding GitHub remote...
git remote add origin git@github.com:JaiSamyukth/Genrec_AI.git
git branch -M main
echo ✓ Remote and branch configured
echo.

REM Step 5: Stage ONLY source files (node_modules is in .gitignore)
echo [5/6] Staging source files (excluding node_modules)...
echo This should only take a few seconds...
git add .
echo ✓ Source files staged
echo.

REM Step 6: Show what will be committed
echo [6/6] Files to be committed:
git status --short | find /v "node_modules"
echo.
echo Total files staged:
git status --short | find /c /v ""
echo.

echo ======================================
echo Ready to commit and push!
echo ======================================
echo.
echo Run these commands when ready:
echo   git commit -m "Initial commit: Brand audit + navbar fixes"
echo   git push -u origin main
echo.
pause
