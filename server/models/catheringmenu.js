"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CatheringMenu extends Model {
    static associate(models) {
      CatheringMenu.hasMany(models.Cathering);
    }
  }
  CatheringMenu.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "CatheringMenu",
    }
  );
  return CatheringMenu;
};
