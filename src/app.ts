import express from "express";
const app = express();
const port = 3000;

const tasks = require("./routes/tasks");

app.get("/hello", (req, res) => {
  res.send("Task manager App");
});

app.use("/api/tasks/v1/", tasks);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
