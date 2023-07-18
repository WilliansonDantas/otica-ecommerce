const port = process.env.PORT || 3001;
const app = require("./app");

app.get("/test", (req, res) => {
  return res.json("Opa!!!");
});

app.listen(port);
console.log(`Api rodando na porta ${port}`);
