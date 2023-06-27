"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cathering extends Model {
    static associate(models) {
      Cathering.hasMany(models.Product);
      Cathering.belongsTo(models.CatheringPack);
      Cathering.belongsTo(models.CatheringMenu);
    }
  }
  Cathering.init(
    {
      name: DataTypes.STRING,
      CatheringPackId: DataTypes.INTEGER,
      CatheringMenuId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Cathering",
    }
  );
  return Cathering;
};
