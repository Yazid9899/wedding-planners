const { Cart, Photography, Venue, Cathering, Product } = require("../models");

class CartControllers {
  static async createCart(req, res, next) {
    try {
      const { id } = req.additionalData;

      const {
        title,
        bride,
        groom,
        weddingDate,
        contactNumber,
        address,
        PhotographyId,
        CatheringId,
        VenueId,
        totalPrice,
        pax,
      } = req.body;

      // if (
      //   !title ||
      //   !PhotographyId ||
      //   !CatheringId ||
      //   !VenueId ||
      //   !totalPrice ||
      //   !pax ||
      //   !groom ||
      //   !bride ||
      //   !weddingDate
      // ) {
      //   throw { name: "cartError" };
      // }

      const create = await Cart.create({
        title,
        UserId: id,
        groom,
        bride,
        weddingDate,
        PhotographyId,
        CatheringId,
        VenueId,
        pax,
        totalPrice,
        contactNumber,
        address,
      })


      const currentDate = new Date();
      const oneMonthAhead = new Date();
      oneMonthAhead.setMonth(currentDate.getMonth() + 1);

      if (new Date(weddingDate) < oneMonthAhead) {
        throw { name: "Date error" };
      }
      if (create) {
        res.status(201).json({
          message: `cart with id:${create.id} and userId:${create.UserId} was successfully created`,
        });
      }
    } catch (err) {
      next(err);
    }
  }
  static async createCartById(req, res, next) {
    try {
      const { idProduct } = req.params;
      const { id } = req.additionalData;
      const {
        totalPrice,
        pax,
        groom,
        bride,
        weddingDate,
        contactNumber,
        address } = req.body;

      const data = await Product.findOne({
        where: {
          id: idProduct,
        },
      });
      const create = await Cart.create({
        title: data.title,
        UserId: id,
        PhotographyId: +data.PhotographyId,
        CatheringId: +data.CatheringId,
        VenueId: +data.VenueId,
        pax,
        totalPrice,
        groom,
        bride,
        weddingDate,
        contactNumber,
        address,
      });

      const currentDate = new Date();
      const oneMonthAhead = new Date();
      oneMonthAhead.setMonth(currentDate.getMonth() + 1);

      if (new Date(weddingDate) < oneMonthAhead) {
        throw { name: "Date error" };
      }

      if (create) {
        res.status(201).json({
          message: `cart with id:${create.id} and userId:${create.UserId} was successfully created`,
        });
      }
    } catch (err) {
      next(err);
    }
  }

  static async getData(req, res, next) {
    try {
      const { id } = req.additionalData;
      const data = await Cart.findAll({
        include: [
          { model: Photography },
          { model: Cathering },
          { model: Venue },
        ],
        where: {
          UserId: id,
        },
      });

      if (data) {
        res.status(200).json(data);
      }
    } catch (err) {
      next(err);
    }
  }

  static async deleteByid(req, res, next) {
    try {
      const { cartid } = req.params;
      const { id } = req.additionalData;

      const data = await Cart.findAll({
        where: {
          id: cartid,
          UserId: id,
        },
      });

      if (data.length == 0) {
        throw {
          name: "Cart Not Found",
        };
      }

      await Cart.destroy({
        where: {
          id: cartid,
          UserId: id,
        },
      });

      res.status(201).json({
        message: `Cart with id${cartid} has been successfully deleted`,
      });
    } catch (err) {
      next(err);
    }
  }

  static async deleteAllCart(req, res, next) {
    try {
      const { id } = req.additionalData;
      const data = await Cart.findAll({
        where: {
          UserId: id,
        },
      });

      if (data.length == 0) {
        throw {
          name: "Cart Not Found",
        };
      }

      await Cart.destroy({
        where: {
          UserId: id,
        },
      });

      res.status(201).json({
        message: `Cart has been successfully deleted`,
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = CartControllers;
