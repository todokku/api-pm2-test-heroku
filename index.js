const app = require("express")();

app.get("/", (req, res) => {
  res.send({ status: "OK" });
});

app.listen(3333);
