"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Building extends Model {
    static associate(models) {
      Building.hasMany(models.BuildingPhoto);
      Building.hasMany(models.Product);
    }
  }
  Building.init(
    {
      name: DataTypes.STRING,
      location: DataTypes.STRING,
      price: DataTypes.INTEGER,
      capacity: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Building",
    }
  );
  return Building;
};
