
const { User, Venue,Product,Photography,Cathering } = require(`../models/index`);

const dataUser = require(`../db/user.json`);
const data1 = dataUser.map((el) => ({
  ...el,
  createdAt: new Date(),
  updatedAt: new Date(),
}));

const dataVenue = require(`../db/venue.json`);
const data2= dataVenue.map((el) => {
    el.createdAt = el.updatedAt = new Date()
})
const dataPhotography = require(`../db/photography.json`);
const data3= dataPhotography.map((el) => {
    el.createdAt = el.updatedAt = new Date()
})
const dataCathering = require(`../db/cathering.json`);
const data4= dataCathering.map((el) => {
    el.createdAt = el.updatedAt = new Date()
})
const dataProduct = require(`../db/product.json`);
const data5= dataProduct.map((el) => {
    el.createdAt = el.updatedAt = new Date()
})


const insertUser = async () => {
    await User.bulkCreate(data1)
}

const insertVenue  = async () => {
    await Venue.bulkCreate(data2)
}

const insertPhotography = async () => {
    await Photography.bulkCreate(data3)
}

const insertCathering = async () => {
    await Cathering.bulkCreate(data4)
}

const insertProduct = async () => {
    await Product.bulkCreate(data5)
}


module.exports = { insertUser, insertVenue,insertPhotography,insertCathering,insertProduct }