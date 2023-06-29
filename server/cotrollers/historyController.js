const { History } = require("../models");

class HistoryController {
  static async getAllHistories(req, res, next) {
    try {
      const data = await History.findAll();

      res.status(200).json({
        statusCode: 200,
        data,
      });
    } catch (err) {
      next(err);
    }
  }
  static async getHistoryById(req, res, next) {
    try {
      const { id } = req.params;
      const data = await History.findOne({ where: { id } });
      if (!data) throw { name: "notFound" };

      res.status(200).json({
        statusCode: 200,
        data,
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = HistoryController;
