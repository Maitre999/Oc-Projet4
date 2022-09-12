// server.js
const express = require("express");
const app = express();
app.get("/", (req, res) => {
  const animal = "elephant";
  // It will repeatedly send the word 'elephant' in a
  // 'text/html' format file
  res.send(animal.repeat(1000));
});
app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
