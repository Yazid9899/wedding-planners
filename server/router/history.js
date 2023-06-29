const express = require("express");
const HistoryController = require("../cotrollers/historyController");
const router = express.Router();

router.get("/", HistoryController.getAllHistories);
router.get("/:id", HistoryController.getHistoryById);
module.exports = router;
