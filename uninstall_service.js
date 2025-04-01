const { exec } = require("child_process");
const path = require("path");
const fs = require("fs");

function uninstallService() {
  const serviceExecutablePath = path.join(
    __dirname,
    "daemon/bsthaismartcardreaderservice.exe"
  );
  const installUtilPath = path.join(
    process.env.windir,
    "Microsoft.NET",
    "Framework64",
    "v4.0.30319", // Adjust if needed
    "InstallUtil.exe"
  );
  const daemonFolderPath = path.join(__dirname, "daemon");

  const command = `"${installUtilPath}" /u "${serviceExecutablePath}"`;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error uninstalling service: ${error}`);
      return;
    }
    console.log(`Service uninstalled successfully:\n${stdout}`);
    if (stderr) {
      console.log(`Service uninstalled with some warnings:\n${stderr}`);
    }

    // Remove the daemon folder after successful uninstallation
    fs.rm(daemonFolderPath, { recursive: true, force: true }, (err) => {
      if (err) {
        console.error(`Error removing daemon folder: ${err}`);
      } else {
        console.log(`Daemon folder removed successfully.`);
      }
    });
  });
}

uninstallService();
