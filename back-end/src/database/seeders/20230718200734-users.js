"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert("users", [
      {
        id: 1,
        name: "Otica Admin",
        email: "adm@oticaecommerce.com",
        password: "a4c86edecc5aee06eff8fdeda69e0d04",
        role: "administrator",
      },
      {
        id: 2,
        name: "Dona Zefa",
        email: "zefa@oticaecommerce.com",
        password: "3c28d2b0881bf46457a853e0b07531c6",
        role: "seller",
      },
      {
        id: 3,
        name: "Chiquinha",
        email: "chiquinha@email.com",
        password: "1c37466c159755ce1fa181bd247cb925",
        role: "customer",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("users", null, {});
  },
};
