const { signToken } = require("../helpers/jwt");
const { User } = require("../models");
class UserController {
  static async register(req, res, next) {
    try {
      const { username, email, password, phoneNumber, imageUrl } = req.body;

      res.status(200).json({
        message: "register controller",
      });
    } catch (err) {
      next(err);
    }
  }
  static async login(req, res, next) {
    try {
      const { username, email, password } = req.body;

      res.status(200).json({
        message: "login controller",
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
}
module.exports = UserController;
