'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CatheringMenu extends Model {
    static associate(models) {
      CatheringMenu.hasMany(models.Cathering);
    }
  }
  CatheringMenu.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'CatheringMenu',
  });
  return CatheringMenu;
};