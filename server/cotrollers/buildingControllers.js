const { Building, BuildingPhoto } = require("../models");
const building = require("../models/building");
class BuildingControllers {
  static async getAllBuildings(req, res, next) {
    try {
      const data = await Building.findAll({
        include: [{ model: BuildingPhoto }],
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
      const transaction = await sequelize.transaction();

      const { name, location, price, capacity, description, images } = req.body;
      const data = await building.create(
        {
          name,
          location,
          price,
          capacity,
          description,
          images,
        },
        { transaction: transaction }
      );
      const bulkImage = images.map((el) => {
        return { imgUrl: el, BuildingId: data.id };
      });
      const createImage = await Image.bulkCreate(bulkImage, {
        transaction: transaction,
      });

      await transaction.commit();
      res.status(200).json({
        statusCode: 200,
        data,
        createImage,
      });
    } catch (err) {
      await transaction.rollback();
      next(err);
    }
  }
}

module.exports = BuildingControllers;
