const express = require("express");
const TransactionController = require("../cotrollers/transactionController");
const router = express.Router();

router.get("/", TransactionController.getAllTransactions);
router.get("/:id", TransactionController.getTransactionById);
router.post("/", TransactionController.createTransaction);
router.patch("/update/:id", TransactionController.changeStatusTransaction);

module.exports = router;
