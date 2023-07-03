const { Venue } = require("../models/index");
const { Op } = require('sequelize');

class VenueControllers {

  static async getAll(req, res, next) {
    try {
      const { location, search, price, belowPrice } = req.query

      let where = {}
      if (belowPrice) {
        where = {
          price: {
            [Op.lt]: belowPrice,
          }
        }
      }
      if (location) {
        where = {
          ...where,
          location: location,
        };
      }
      if (search) {
        where = {
          ...where,
          name: {
            [Op.iLike]: `%${search}%`,
          },
        };
      }
      let filter = [["id", "ASC"]]
      if (price) {
        if (price === "lowest") {
          filter = [["price", "ASC"]]
        } else if (price === "higest") {
          filter = [["price", "DESC"]]
        }
      }

      const data = await Venue.findAll({
        order: filter,
        where,
      })

      if (data) {
        res.status(200).json(data)
      }

    } catch (err) {
      next(err)
    }
  }

  static async getDetail(req, res, next) {
    try {
      const { id } = req.params

      const data = await Venue.findOne({ where: { id } })

      if (!data) {
        throw {
          name: "Venue Not Found"
        }
      }

      res.status(200).json(data)
    } catch (err) {
      next(err)
    }
  }
}

module.exports = VenueControllers;
