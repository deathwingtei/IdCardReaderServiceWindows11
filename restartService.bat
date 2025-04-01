set "serviceName=BS Thai Smart Card Reader Service"

echo Stopping %serviceName%...
net stop "%serviceName%"

if %errorlevel% equ 0 (
  echo %serviceName% stopped successfully.
  timeout /t 5 /nobreak >nul
  echo Starting %serviceName%...
  net start "%serviceName%"

  if %errorlevel% equ 0 (
    echo %serviceName% started successfully.
  ) else (
    echo Failed to start %serviceName%. Error code: %errorlevel%
  )
) else (
  echo Failed to stop %serviceName%. Error code: %errorlevel%
)

pause