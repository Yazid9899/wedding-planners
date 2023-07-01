"use strict";
const { Model } = require("sequelize");
const { hashPassword } = require("../helpers/bcrypt");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Transaction);
      User.hasMany(models.Cart);
    }
  }
  User.init(
    {
      username: {
        type: DataTypes.STRING,
        unique: {
          args: true,
          msg: "Username must already used",
        },
        validate: {
          notEmpty: {
            args: true,
            msg: "Username cannot empty",
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        unique: {
          args: true,
          msg: "Email must be already used",
        },
        validate: {
          notEmpty: {
            args: true,
            msg: "Email cannot empty",
          },
          isEmail: {
            args: true,
            msg: "Invalid email format",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: "Password cannot empty",
          },
          min: {
            args: [5],
            msg: "Password minimal Character is 5",
          },
        },
      },
      phoneNumber: DataTypes.STRING,
      imageUrl: DataTypes.STRING,
      role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  User.beforeCreate((user) => {
    user.dataValues.password = hashPassword(user.dataValues.password);
    user.dataValues.role = "Customer";
  });
  return User;
};
