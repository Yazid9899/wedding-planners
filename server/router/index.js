const express = require("express");
const router = express.Router();

const userRouter = require("./user");
const buildingRouter = require("./building")
const catheringRouter = require("./cathering")
const historyRouter = require("./history")
const photographyRouter = require("./photography")
const productRouter = require("./product")
const transactionRouter = require("./transaction")

router.use("/users", userRouter);
router.use("/buildings", buildingRouter);
router.use("/catherings", catheringRouter);
router.use("/histories", historyRouter);
router.use("/photographies", photographyRouter);
router.use("/products", productRouter);
router.use("/transactions", transactionRouter);

module.exports = router;
