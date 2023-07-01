const { Venue } = require("../models/index");
class VenueControllers {

  static async getAll(req, res, next){
    try{
      const data = await Venue.findAll({
        order: [["id", "ASC"]],
      })

      if(data){
        res.status(200).json(data)
      }

    }catch(err){
      next(err)
    }
  }

  static async getDetail(req, res, next){
    try{
      const {id} = req.params

      const data = await Venue.findOne({ where:{id}})

      if(!data){
        throw{
          name: "Venue Not Found"
        }
      }

      res.status(200).json(data)
    }catch(err){
      next(err)
    }
  }
}

module.exports = VenueControllers;
