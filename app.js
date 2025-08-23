const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

let todos = ["Learn DevOps", "Build CI/CD Pipeline"];

app.get("/todos", (req, res) => {
  res.json(todos);
});

app.post("/todos", (req, res) => {
  const { task } = req.body;
  if (!task) return res.status(400).json({ error: "Task is required" });
  todos.push(task);
  res.json({ message: "Task added", todos });
});

if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;   // 👈 important for tests

