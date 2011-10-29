@echo off
set RULE=%1" "%2
netsh advfirewall firewall show rule name=%RULE% >nul
if ERRORLEVEL 1 AND %2 (netsh advfirewall firewall add rule name=%RULE% dir=out protocol=any action=block remoteip=%2)