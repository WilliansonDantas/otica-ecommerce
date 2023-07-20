const User = require("../database/models");

const usersService = async () => User.findAll();

module.exports = usersService;
