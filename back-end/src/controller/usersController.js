const usersService = require("../services/usersService");

const usersController = async (req, res) => {
  // try {
  const allUsers = await usersService();
  return res.status(201).json(allUsers);
  // } catch (error) {
  //   return res.status(404).json({ message: error.message });
  // }
};

module.exports = usersController;
