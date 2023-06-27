"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CatheringPack extends Model {
    static associate(models) {
      CatheringPack.hasMany(models.Cathering);
    }
  }
  CatheringPack.init(
    {
      quantity: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "CatheringPack",
    }
  );
  return CatheringPack;
};