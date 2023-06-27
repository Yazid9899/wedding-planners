"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Photography extends Model {
    static associate(models) {
      Photography.hasMany(models.Product);
    }
  }
  photography.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Photography",
    }
  );
  return Photography;
};
