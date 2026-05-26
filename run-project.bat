@echo off

start cmd /k "cd /d D:\E-COMMERCE-FIXED && npx ng serve --port 4200"

timeout /t 5 >nul

start http://localhost:4200

exit
