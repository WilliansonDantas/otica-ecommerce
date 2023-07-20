const express = require("express");
const cors = require("cors");

const usersRouter = require("./routes/usersRouter");

const app = express();

app.use(cors());
app.use(express.json());
app.use(usersRouter);

// app.get("/test", (req, res) => {
//   return res.json("Opa!!!");
// });

module.exports = app;
