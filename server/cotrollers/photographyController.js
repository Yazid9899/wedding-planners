const { Photography } = require("../models");
class PhotographyController {
  static async getAllPhotographies(req, res, next) {
    try {
      const data = await Photography.findAll();

      res.status(200).json({
        statusCode: 200,
        data,
      });
    } catch (err) {
      next(err);
    }
  }
  static async getPhotographyById(req, res, next) {
    try {
      const { id } = req.params;
      const data = await Photography.findOne({ where: { id } });

      res.status(200).json({
        statusCode: 200,
        data,
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = PhotographyController;
