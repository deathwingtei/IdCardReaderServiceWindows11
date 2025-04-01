const Service = require("node-windows").Service;
const path = require("path");

const svc = new Service({
  name: "BS Thai Smart Card Reader Service",
  description: "Reads data from Thai smart cards and exposes it via HTTP.",
  script: path.join(__dirname, "app.js"),
});

console.log("Service Loading.");
try {
  svc.on("install", function () {
    svc.start();
    console.log("Service installed and started.");
  });
} catch (error) {
  console.error("Error in app.js:", error);
  // Log the error to a file for better debugging
  const fs = require("fs");
  fs.appendFileSync(
    "service_errors.log",
    `${new Date().toISOString()} - ${error.stack}\n`
  );
  process.exit(1); // Exit with an error code
}

svc.install();
