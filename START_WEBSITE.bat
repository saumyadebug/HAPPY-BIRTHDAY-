@echo off
title Happy Birthday Alarm - Adarsh
echo ========================================================
echo  🚨 STARTING ADARSH "ALARM" BIRTHDAY ROAST WEBSITE 🚨
echo ========================================================
echo.
echo Opening in your web browser...
start "" "http://localhost:5173"
echo.
echo Server is running on http://localhost:5173
echo Press Ctrl+C in this window when you want to stop it.
echo.
python -m http.server 5173 --directory dist
pause

