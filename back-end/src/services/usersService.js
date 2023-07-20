const User = require("../database/models/User");

const usersService = async () => await User.findAll();

module.exports = usersService;
