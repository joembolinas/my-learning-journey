@echo off
echo Starting GitHub automation workflow testing...
echo.

cd /d "C:\Users\ADMIN\Desktop\School File\TERM-3_SY-2024-25"

echo Step 1: Replace corrupted workflow file with working version
copy ".github\workflows\weekly-task-generator-working.yml" ".github\workflows\weekly-task-generator.yml" /Y
if %errorlevel% equ 0 (
    echo ✅ Successfully replaced weekly-task-generator.yml
) else (
    echo ❌ Failed to replace workflow file
    goto :error
)

echo.
echo Step 2: Checking GitHub CLI authentication
gh auth status
if %errorlevel% neq 0 (
    echo ❌ GitHub CLI not authenticated
    goto :error
)

echo.
echo Step 3: Testing workflow triggers
echo Testing Weekly Task Generator...
gh workflow run "Weekly Task Generator"
if %errorlevel% equ 0 (
    echo ✅ Weekly Task Generator triggered successfully
) else (
    echo ❌ Failed to trigger Weekly Task Generator
)

echo.
echo Testing Portfolio Auto-Update...
gh workflow run "Portfolio Auto-Update"
if %errorlevel% equ 0 (
    echo ✅ Portfolio Auto-Update triggered successfully
) else (
    echo ❌ Failed to trigger Portfolio Auto-Update
)

echo.
echo Testing Project Board Management...
gh workflow run "Project Board Management"
if %errorlevel% equ 0 (
    echo ✅ Project Board Management triggered successfully
) else (
    echo ❌ Failed to trigger Project Board Management
)

echo.
echo Testing Feedback Collection Automation...
gh workflow run "Feedback Collection Automation"
if %errorlevel% equ 0 (
    echo ✅ Feedback Collection Automation triggered successfully
) else (
    echo ❌ Failed to trigger Feedback Collection Automation
)

echo.
echo Testing Milestone Tracking...
gh workflow run "Milestone Tracking"
if %errorlevel% equ 0 (
    echo ✅ Milestone Tracking triggered successfully
) else (
    echo ❌ Failed to trigger Milestone Tracking
)

echo.
echo Step 4: Checking workflow run status
echo Recent workflow runs:
gh run list --limit 10

echo.
echo ✅ GitHub automation workflow testing completed!
echo Check the workflow runs above for execution status.
goto :end

:error
echo.
echo ❌ GitHub automation workflow testing failed!
echo Please check the errors above and resolve them.
exit /b 1

:end
echo.
echo Testing completed. Check GitHub Actions tab for detailed results.
pause
