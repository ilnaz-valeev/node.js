const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;


const COUNTER_FILE = path.join(__dirname, "counters.json");


const readCounters = () => {
  if (fs.existsSync(COUNTER_FILE)) {
    const data = fs.readFileSync(COUNTER_FILE, "utf-8");
    return JSON.parse(data);
  }
  return {};
};

const writeCounters = (counters) => {
  fs.writeFileSync(COUNTER_FILE, JSON.stringify(counters, null, 2), "utf-8");
};


app.get("/", (req, res) => {
  const counters = readCounters();
  counters["/"] = (counters["/"] || 0) + 1;
  writeCounters(counters);
  res.send(
    `<h1>Главная страница</h1><p>Количество просмотров: ${counters["/"]}</p>`
  );
});


app.get("/about", (req, res) => {
  const counters = readCounters();
  counters["/about"] = (counters["/about"] || 0) + 1; 
  writeCounters(counters);
  res.send(`<h1>О нас</h1><p>Количество просмотров: ${counters["/about"]}</p>`);
});


app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
