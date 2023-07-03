const { Cart,Photography, Venue, Cathering, Product} = require("../models");


class CartControllers{
  static async createCart(req, res, next){
    try{
      const {id} = req.additionalData
      const {title,PhotographyId, CatheringId,  VenueId, totalPrice, pax} = req.body

      const create = await Cart.create({
        title,
        UserId: id,
        PhotographyId, 
        CatheringId,  
        VenueId, 
        pax,
        totalPrice,
      })

      if(create){

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
      const idProduct = req.params.idProduct;
      const { id } = req.additionalData;
      const { totalPrice, pax } = req.body;

      const data = await Product.findOne({
        where: {
          id: idProduct,
        },
      });
      console.log(data, "hahahahahahahah");
      const create = await Cart.create({
        title: data.title,
        UserId: id,
        PhotographyId: data.PhotographyId,
        CatheringId: data.CatheringId,
        VenueId: data.VenueId,
        pax,
        totalPrice,
      });

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
      const {id} = req.additionalData
      const data = await Cart.findAll({
        include: [
          { model: Photography },
          { model: Cathering },
          { model: Venue },
        ],
        where:{
          UserId:id
        }
      })

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
