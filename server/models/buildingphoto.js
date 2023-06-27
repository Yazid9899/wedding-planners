"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class BuildingPhoto extends Model {
    static associate(models) {
      BuildingPhoto.belongsTo(models.Building);
    }
  }
  BuildingPhoto.init(
    {
      buildingId: DataTypes.INTEGER,
      imageUrl: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "BuildingPhoto",
    }
  );
  return BuildingPhoto;
};
