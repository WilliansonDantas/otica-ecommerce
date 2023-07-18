const express = require("express");
const cors = require("cors");

const port = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/test", (req, res) => {
  return res.json("Opa!!!");
});

app.listen(port);
console.log(`Api rodando na porta ${port}`);

module.exports = app;
