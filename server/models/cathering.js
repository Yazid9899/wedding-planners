"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cathering extends Model {
    static associate(models) {
      Cathering.hasMany(models.Product);
      Cathering.belongsTo(models.CatheringMenu);
    }
  }
  Cathering.init(
    {
      name: DataTypes.STRING,
      CatheringMenuId: DataTypes.INTEGER,
      description: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Cathering",
    }
  );
  return Cathering;
};
