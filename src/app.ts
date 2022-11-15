import express from "express";
const app = express();
const port = 3000;

app.get("/hello", (req, res) => {
  res.send("Task manager App");
});



app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
