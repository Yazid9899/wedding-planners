const { Building, BuildingPhoto } = require("../models");
class BuildingControllers {
  static async getAllBuildings(req, res, next) {
    try {
      const data = await Building.findAll({
        include: [
          {
            model: BuildingPhoto,
          },
        ],
        order: [["id", "ASC"]],
      });
      res.status(200).json({
        statusCode: 200,
        data,
      });
    } catch (err) {
      next(err);
    }
  }
  static async getBuildingById(req, res, next) {
    try {
      const { id } = req.params;
      const data = await Building.findAll({
        include: [
          {
            model: BuildingPhoto,
          },
        ],
        where: { id },
      });
      res.status(200).json({
        statusCode: 200,
        data,
      });
    } catch (err) {
      next(err);
    }
  }
  static async createBuilding(req, res, next) {
    try {
    } catch (err) {}
  }
}

module.exports = BuildingControllers;
