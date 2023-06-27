"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Products", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      tittle: {
        type: Sequelize.STRING,
      },
      PhotographyId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Photographies",
          key: "id",
        },
      },
      CatheringId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Catherings",
          key: "id",
        },
      },
      BuildingId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Buildings",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Products");
  },
};
