@echo off
echo Fixing corrupted workflow files...

cd /d "c:\Users\ADMIN\Desktop\School File\TERM-3_SY-2024-25\.github\workflows"

echo Backing up corrupted files...
if exist "weekly-task-generator.yml" (
    move "weekly-task-generator.yml" "weekly-task-generator-backup.yml"
    echo Backed up weekly-task-generator.yml
)

echo Installing clean workflow files...
if exist "weekly-task-generator-clean.yml" (
    move "weekly-task-generator-clean.yml" "weekly-task-generator.yml"
    echo Installed clean weekly-task-generator.yml
)

echo Cleaning up temporary files...
del "*-fixed.yml" 2>nul
del "*-new.yml" 2>nul

echo Workflow fix complete!
dir "*.yml"

echo.
echo Testing GitHub CLI access...
gh auth status

echo.
echo Workflow files ready for testing!
pause
