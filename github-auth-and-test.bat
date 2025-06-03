@echo off
echo ================================
echo GitHub Authentication and Workflow Testing
echo ================================

cd /d "C:\Users\ADMIN\Desktop\School File\TERM-3_SY-2024-25"

echo.
echo [1/4] Authenticating with GitHub...
echo xxxLzWlODjag3uGC2wrgnSLmQisBFCWMo246ZoH | gh auth login --with-xxx

echo.
echo [2/4] Checking authentication status...
gh auth status

echo.
echo [3/4] Listing current workflows...
gh workflow list

echo.
echo [4/4] Testing all 5 workflows...
echo.
echo Testing Feedback Collection Automation...
gh workflow run feedback-collection.yml
timeout /t 3 /nobreak >nul

echo Testing Milestone Tracking...
gh workflow run milestone-tracking.yml
timeout /t 3 /nobreak >nul

echo Testing Portfolio Auto-Update...
gh workflow run portfolio-auto-update.yml
timeout /t 3 /nobreak >nul

echo Testing Project Board Management...
gh workflow run project-board-management.yml
timeout /t 3 /nobreak >nul

echo Testing Weekly Task Generator...
gh workflow run weekly-task-generator.yml
timeout /t 3 /nobreak >nul

echo.
echo [5/5] Checking recent workflow runs...
gh run list --limit 10

echo.
echo ================================
echo Testing Complete!
echo ================================
pause
