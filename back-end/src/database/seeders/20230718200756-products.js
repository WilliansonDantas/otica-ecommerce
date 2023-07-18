"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const productsData = [];

    for (let index = 1; index <= 100; index += 1) {
      productsData.push({
        id: index,
        name: `Óculos ${index}`,
        price: Math.floor(Math.random() * 500) + 50,
        url_image: `https://picsum.photos/200/300?random=${index}`,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    await queryInterface.bulkInsert("products", productsData, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("products", null, {});
  },
};
