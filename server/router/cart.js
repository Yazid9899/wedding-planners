const express = require("express");
const CartControllers = require("../cotrollers/cartController");
const router = express.Router();

router.post("/", CartControllers.createCart)
router.get("/", CartControllers.getData)
router.delete("/", CartControllers.deleteAllCart )
router.delete("/:cartid", CartControllers.deleteByid)

module.exports = router;