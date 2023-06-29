const { Product, Building, Cathering, Photography } = require("../models");
class ProductController {
  static async getAllProducts(req, res, next) {
    try {
      const data = await Product.findAll({
        include: [
          { model: Photography },
          { model: Cathering },
          { model: Building },
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
  static async getProductById(req, res, next) {
    try {
      const { id } = req.params;
      const data = await Product.findOne({
        include: [
          {
            model: Photography,
          },
          {
            model: Cathering,
          },
          {
            model: Building,
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
}

module.exports = ProductController;
