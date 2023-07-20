const { Router } = require("express");
const usersController = require("../controller/usersController");

const usersRouter = Router();

usersRouter.get("/users", (req, res) => usersController(req, res));

module.exports = usersRouter;
