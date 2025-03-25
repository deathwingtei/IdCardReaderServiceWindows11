const Service = require("node-windows").Service;
const path = require("path");

const svc = new Service({
  name: "BS Thai Smart Card Reader Service",
  description: "Reads data from Thai smart cards and exposes it via HTTP.",
  script: path.join(__dirname, "app.js"),
});

svc.on("install", function () {
  svc.start();
  console.log("Service installed and started.");
});

svc.install();
