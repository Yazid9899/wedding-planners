const { Transaction, User, Product } = require("../models");
class TransactionController {
  static async getAllTransactions(req, res, next) {
    try {
      const data = await Transaction.findAll({
        include: [{ model: User }, { model: Product }],
      });
      res.status(200).json({
        statusCode: 200,
        data,
      });
    } catch (err) {
      next(err);
    }
  }
  static async getTransactionById(req, res, next) {
    try {
      const { id } = req.params;
      const data = await Transaction.findOne({
        include: [{ model: User }, { model: Product }],
        where: { id },
      });
      res.status(200).json({
        statusCode: 200,
        data,
      });
    } catch (err) {
      next(err);
    }
  }
  static async createTransaction(req, res, next) {
    try {
      const { UserId, ProductById, price } = req.body;
      const noTransaction = "DEFAULT";
      const data = await Transaction.create({
        UserId,
        ProductById,
        price,
        status: "pending",
        noTransaction,
      });
      res.status(200).json({
        statusCode: 200,
        data,
      });
    } catch (err) {
      next(err);
    }
  }
  static async changeStatusTransaction(req, res, next) {
    try {
      const { id } = req.params;
      const data = await Transaction.findOne({ where: { id } });
      await Transaction.update({ status: "Paid" }, { where: { id: id } });

      res.status(200).json({
        statusCode: 200,
        message: "Transaction Paid",
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = TransactionController;
