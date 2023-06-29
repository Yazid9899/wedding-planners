const { Cathering, CatheringMenu } = require("../models");
class CatheringController {
  static async getAllCathering(req, res, next) {
    try {
      const data = await Cathering.findAll({
        include: [
          {
            model: CatheringMenu,
          },
        ],
      });
      res.status(200).json({
        statuscode: 200,
        data,
      });
    } catch (err) {
      next(err);
    }
  }
  static async getCatheringById(req, res, next) {
    try {
      const { id } = req.params;
      const data = await Cathering.findOne({
        where: { id },
        include: [
          {
            model: CatheringMenu,
          },
        ],
      });
      res.status(200).json({
        statuscode: 200,
        data,
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = CatheringController;
