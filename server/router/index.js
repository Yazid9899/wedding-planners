const express = require("express");
const router = express.Router();

const userRouter = require("./user");
const venueRouter = require("./venue");
const catheringRouter = require("./cathering");
const photographyRouter = require("./photography");
const productRouter = require("./product");
const cartRouter = require("./cart");
const auth = require("../middleware/authentication");
const transactionRouter = require("./transaction");

router.use("/users", userRouter);
router.use("/venues", venueRouter);
router.use("/catherings", catheringRouter);
router.use("/photographies", photographyRouter);
router.use("/products", productRouter);
// router.use(auth)
router.use("/carts", cartRouter);
router.use("/transactions", transactionRouter);

module.exports = router;
