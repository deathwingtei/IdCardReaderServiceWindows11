const express = require("express");
const cors = require("cors");
const { default: ThaiIDCardReader } = require("thai-id-card-reader");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());
const port = 52347;
const reader = new ThaiIDCardReader();

reader.init();
reader.setInsertCardDelay(1000);
reader.setReadTimeout(1);

const filePath = path.join(__dirname, "current_id_card.json");
let currentResponse = null;
let timeoutId = null;

function deleteFile() {
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    console.log("File deleted: current_id_card.json");
  }
}

function resetTimeout() {
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
  timeoutId = setTimeout(deleteFile, 30000); // 30 seconds
}

app.get("/readcard", (req, res) => {
  currentResponse = res;
  resetTimeout();
});

reader.onReadComplete((data) => {
  if (currentResponse) {
    currentResponse.json(data);
    currentResponse = null;
  }
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log("File written: current_id_card.json");
  resetTimeout();
});

reader.onReadError((error) => {
  if (currentResponse) {
    currentResponse.status(500).json({ error: error.message });
    currentResponse = null;
  }
  console.log(error);
  resetTimeout();
});

app.get("/getcarddata", (req, res) => {
  if (fs.existsSync(filePath)) {
    try {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      res.json(data);
    } catch (error) {
      console.error("Error reading file:", error);
      res.status(500).json({ error: "Error reading file" });
    }
  } else {
    res.status(404).json({ error: "File not found" });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  resetTimeout();
});

deleteFile();
