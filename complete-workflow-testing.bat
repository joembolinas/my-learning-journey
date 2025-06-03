@echo off
echo ================================================================
echo GitHub Automation Workflow Complete Testing Suite
echo TERM-3 SY-2024-25 Academic Workspace
echo ================================================================

REM Set working directory
cd /d "C:\Users\ADMIN\Desktop\School File\TERM-3_SY-2024-25"

echo.
echo [STEP 1] GitHub Authentication
echo ================================================================
echo Authenticating with provided personal access xxx...
echo xxxLzWlODjag3uGC2wrgnSLmQisBFCWMo246ZoH | gh auth login --with-xxx

if %errorlevel% neq 0 (
    echo ERROR: GitHub authentication failed
    pause
    exit /b 1
)

echo Authentication successful!
echo.

echo [STEP 2] Verify Authentication
echo ================================================================
gh auth status
echo.

echo [STEP 3] Deploy Fixed Workflow File
echo ================================================================
echo Deploying working weekly-task-generator.yml...

if exist ".github\workflows\weekly-task-generator-working.yml" (
    copy ".github\workflows\weekly-task-generator-working.yml" ".github\workflows\weekly-task-generator.yml"
    echo Weekly task generator workflow updated with working version
) else (
    echo WARNING: Working version not found, using current version
)

echo.

echo [STEP 4] List Current Workflows
echo ================================================================
gh workflow list
echo.

echo [STEP 5] Execute All 5 Workflow Tests
echo ================================================================

echo Testing 1/5: Feedback Collection Automation...
gh workflow run feedback-collection.yml
if %errorlevel% equ 0 (
    echo ✅ Feedback Collection triggered successfully
) else (
    echo ❌ Feedback Collection trigger failed
)
timeout /t 2 /nobreak >nul

echo Testing 2/5: Milestone Tracking...
gh workflow run milestone-tracking.yml
if %errorlevel% equ 0 (
    echo ✅ Milestone Tracking triggered successfully
) else (
    echo ❌ Milestone Tracking trigger failed
)
timeout /t 2 /nobreak >nul

echo Testing 3/5: Portfolio Auto-Update...
gh workflow run portfolio-auto-update.yml
if %errorlevel% equ 0 (
    echo ✅ Portfolio Auto-Update triggered successfully
) else (
    echo ❌ Portfolio Auto-Update trigger failed
)
timeout /t 2 /nobreak >nul

echo Testing 4/5: Project Board Management...
gh workflow run project-board-management.yml
if %errorlevel% equ 0 (
    echo ✅ Project Board Management triggered successfully
) else (
    echo ❌ Project Board Management trigger failed
)
timeout /t 2 /nobreak >nul

echo Testing 5/5: Weekly Task Generator...
gh workflow run weekly-task-generator.yml
if %errorlevel% equ 0 (
    echo ✅ Weekly Task Generator triggered successfully
) else (
    echo ❌ Weekly Task Generator trigger failed
)
timeout /t 2 /nobreak >nul

echo.

echo [STEP 6] Check Recent Workflow Runs
echo ================================================================
echo Checking last 10 workflow runs for results...
gh run list --limit 10

echo.

echo [STEP 7] Check for Any Failed Runs
echo ================================================================
echo Checking for recent failures...
gh run list --status failure --limit 5

echo.

echo [STEP 8] Generate Testing Report
echo ================================================================
echo Generating workflow testing report...

echo # GitHub Automation Workflow Testing Report > workflow-testing-results.md
echo Date: %date% %time% >> workflow-testing-results.md
echo. >> workflow-testing-results.md
echo ## Authentication Status >> workflow-testing-results.md
gh auth status >> workflow-testing-results.md 2>&1
echo. >> workflow-testing-results.md
echo ## Active Workflows >> workflow-testing-results.md
gh workflow list >> workflow-testing-results.md
echo. >> workflow-testing-results.md
echo ## Recent Workflow Runs >> workflow-testing-results.md
gh run list --limit 10 >> workflow-testing-results.md
echo. >> workflow-testing-results.md
echo ## Testing Summary >> workflow-testing-results.md
echo All 5 workflows have been manually triggered for testing. >> workflow-testing-results.md
echo Check GitHub Actions tab for execution results. >> workflow-testing-results.md

echo.
echo ================================================================
echo GitHub Automation Workflow Testing COMPLETE!
echo ================================================================
echo.
echo Results saved to: workflow-testing-results.md
echo.
echo Next steps:
echo 1. Check GitHub repository Actions tab for workflow execution results
echo 2. Verify that issues/updates were created as expected
echo 3. Review any failed runs for additional troubleshooting
echo.
echo ================================================================
pause
