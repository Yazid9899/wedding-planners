const { comparePassword } = require("../helpers/bcrypt");
const { signToken } = require("../helpers/jwt");
const { User } = require("../models");
class UserController {
  static async register(req, res, next) {
    try {
      const { username, email, password, phoneNumber, imageUrl } = req.body;
      const data = await User.create({
        username,
        email,
        password,
        phoneNumber,
        imageUrl,
      });
      res.status(200).json({
        statusCode: 200,
        message: "Registered",
        email: data.email,
      });
    } catch (err) {
      next(err);
    }
  }
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email || !password) throw { name: "loginError" };

      const user = await User.findOne({ where: { email: email } });
      if (!user) throw { name: "loginError" };

      if (!comparePassword(password, user.password))
        throw { name: "loginError" };

      const access_token = signToken({
        id: user.id,
        email: user.email,
        role: user.role,
      });

      res.status(200).json({
        statusCode: 200,
        access_token,
        email: user.email,
        username: user.username,
        role: user.role,
      });
    } catch (err) {
      next(err);
    }
  }
}
module.exports = UserController;
