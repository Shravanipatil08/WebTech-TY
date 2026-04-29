const express = require("express");
const cors = require("cors");
const PORT = 3000;

const app = express();
app.use(cors());
app.use(express.json());

let tasks = [];

app.get("/tasks", (req, res) => {
    res.json(tasks);
});

app.post("/tasks", (req, res) => {
    const task = {
        id: Date.now(),
        text: req.body.text,
        time: req.body.time
    };

    tasks.push(task);
    res.json(task);
});

app.get("/quote", async (req, res) => {
  const fetch = (await import("node-fetch")).default;

  const response = await fetch("https://api.api-ninjas.com/v2/randomquotes?categories=success,wisdom", {
    headers: {
      "X-Api-Key": "vOhCCGHaTdwoGhqPwgKCGoI0rUAqo0KExh0uWdEQ"
    }
  });

  const data = await response.json();
  res.json(data);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});