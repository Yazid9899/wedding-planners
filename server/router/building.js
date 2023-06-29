const express = require("express");
const BuildingControllers = require("../cotrollers/buildingControllers");
const router = express.Router();

router.get("/", BuildingControllers.getAllBuildings);
router.get("/:id", BuildingControllers.getBuildingById);

module.exports = router;
