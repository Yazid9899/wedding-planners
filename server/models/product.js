"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.hasMany(models.Transaction);
      Product.belongsTo(models.Photography);
      Product.belongsTo(models.Cathering);
      Product.belongsTo(models.Building);
    }
  }
  Product.init(
    {
      tittle: DataTypes.STRING,
      PhotographyId: DataTypes.INTEGER,
      CatheringId: DataTypes.INTEGER,
      BuildingId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
