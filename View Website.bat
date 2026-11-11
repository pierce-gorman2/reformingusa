@echo off
cd /d "%~dp0"
title Reforming USA - local preview
if not exist node_modules (
  echo Installing dependencies, one moment...
  call npm install
)
echo.
echo Starting the site. It will open in your browser.
echo Close this window to stop it.
echo.
start "" http://localhost:4321
call npm run dev
pause
