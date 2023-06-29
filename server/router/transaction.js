const express = require("express");
const TransactionController = require("../cotrollers/transactionController");
const router = express.Router();

router.get("/", TransactionController.getAllTransactions);
router.get("/:id", TransactionController.getTransactionById);

module.exports = router;
