const express = require("express");
const CartControllers = require("../cotrollers/cartController");
const router = express.Router();

router.get("/", CartControllers.getData)
router.post("/", CartControllers.createCart)
router.post("/:idProduct", CartControllers.createCartById)
router.delete("/", CartControllers.deleteAllCart )
router.patch("/:cartid", CartControllers.updateStatusById)


module.exports = router;