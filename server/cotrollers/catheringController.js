const { Cathering} = require("../models");

class CatheringController {
  static async getAllCathering(req, res, next) {
    try {
      const data = await Cathering.findAll({
        order: [["id", "ASC"]]
      });

      if(data){
        res.status(200).json(data);
      }

    } catch (err) {
      next(err);
    }
  }
  static async getCatheringById(req, res, next) {
    try {
      const { id } = req.params;
      const data = await Cathering.findOne({ where: { id }});

      if(!data){
        throw{
          name: "Cathering Not Found"
        }
      }
      res.status(200).json(data);

    } catch (err) {
      next(err);
    }
  }
}

module.exports = CatheringController;
