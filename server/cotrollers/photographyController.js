const { Photography } = require("../models");
class PhotographyController {

  static async getAllPhotographies(req, res, next) {
    try {
      const data = await Photography.findAll({
        order: [["id", "ASC"]]
      });

      
      if(data){
        res.status(200).json(data);
      }

    } catch (err) {
      next(err);
    }
  }
  static async getPhotographyById(req, res, next) {
    try {
      const { id } = req.params;
      const data = await Photography.findOne({ where: { id } });

      if(!data){
        throw{
          name: "Photography Not Found"
        }
      }

      res.status(200).json(data);
      
    } catch (err) {
      next(err);
    }
  }
}

module.exports = PhotographyController;
