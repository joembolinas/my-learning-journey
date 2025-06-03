@echo off
echo ===============================================
echo    TERM-3 SY-2024-25 - Subject Launcher
echo    BS IT Network & Cybersecurity
echo ===============================================
echo.
echo 🔒 Private Learning Materials: NOW AVAILABLE
echo    Access via: courses/[COURSE]/learning-materials/
echo.
echo Choose a subject to open in VS Code:
echo.
echo 1. MO-IT103 - Computer Programming 2
echo 2. MO-IT143 - Ethical Hacking  
echo 3. MO-IT147 - Information Assurance & Security 1
echo 4. MO-IT148 - Applications Development & Emerging Technologies
echo 5. MO-IT151 - Platform Technologies
echo.
echo 6. Open ALL subjects (5 separate windows)
echo 7. Main workspace (all subjects together)
echo 8. Private Materials Only (learning-materials-private)
echo.
echo 0. Exit
echo.
set /p choice="Enter your choice (0-8): "

if "%choice%"=="1" (
    echo Opening MO-IT103 - Computer Programming 2...
    code "MO-IT103-Computer-Programming-2.code-workspace"
) else if "%choice%"=="2" (
    echo Opening MO-IT143 - Ethical Hacking...
    code "MO-IT143-Ethical-Hacking.code-workspace"
) else if "%choice%"=="3" (
    echo Opening MO-IT147 - Information Assurance & Security 1...
    code "MO-IT147-Information-Assurance-Security-1.code-workspace"
) else if "%choice%"=="4" (
    echo Opening MO-IT148 - Applications Development & Emerging Technologies...
    code "MO-IT148-Applications-Development-Emerging-Technologies.code-workspace"
) else if "%choice%"=="5" (
    echo Opening MO-IT151 - Platform Technologies...
    code "MO-IT151-Platform-Technologies.code-workspace"
) else if "%choice%"=="6" (
    echo Opening all subjects in separate windows...
    code "MO-IT103-Computer-Programming-2.code-workspace"
    timeout /t 2 >nul
    code "MO-IT143-Ethical-Hacking.code-workspace"
    timeout /t 2 >nul
    code "MO-IT147-Information-Assurance-Security-1.code-workspace"
    timeout /t 2 >nul
    code "MO-IT148-Applications-Development-Emerging-Technologies.code-workspace"
    timeout /t 2 >nul
    code "MO-IT151-Platform-Technologies.code-workspace"
) else if "%choice%"=="7" (
    echo Opening main workspace...
    code "TERM-3_SY-2024-25.code-workspace"
) else if "%choice%"=="8" (
    echo Opening private learning materials repository...
    code "learning-materials-private"
) else if "%choice%"=="0" (
    echo Goodbye!
    exit /b
) else (
    echo Invalid choice! Please try again.
    pause
    goto :start
)

echo.
echo VS Code window(s) opened successfully!
echo.
pause
