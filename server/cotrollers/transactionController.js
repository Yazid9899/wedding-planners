const { Transaction, User, Product } = require("../models");
const xendit = require("xendit-node");
const Xendit = new xendit({
  secretKey:
    "xnd_development_Y3j9L4SvFbKJPhVGpsne3cGgDLjh1fcVAVB4Wv2HwOULLi9SnNeJbw5IZEs",
});
const { Invoice } = Xendit;
const i = new Invoice();


class TransactionController {
  // static async getAllTransactions(req, res, next) {
  //   try {
  //     const data = await Transaction.findAll({
  //       include: [{ model: User }, { model: Product }],
  //     });
  //     res.status(200).json({
  //       statusCode: 200,
  //       data,
  //     });
  //   } catch (err) {
  //     next(err);
  //   }
  // }
  // static async getTransactionById(req, res, next) {
  //   try {
  //     const { id } = req.params;
  //     const data = await Transaction.findOne({
  //       include: [{ model: User }, { model: Product }],
  //       where: { id },
  //     });
  //     res.status(200).json({
  //       statusCode: 200,
  //       data,
  //     });
  //   } catch (err) {
  //     next(err);
  //   }
  // }
  // static async createTransaction(req, res, next) {
  //   try {
  //     const { name, price, noTransaction } = req.body;
  //     const { id } = req.additionalData

  //     const data = await Transaction.create({
  //       name,
  //       price,
  //       UserId: id,
  //       noTransaction
  //     });


  //     res.status(200).json({
  //       statusCode: 200,
  //       data,
  //     });
  //   } catch (err) {
  //     next(err);
  //   }
  // }
  // static async changeStatusTransaction(req, res, next) {
  //   try {
  //     const { id } = req.params;
  //     const data = await Transaction.findOne({ where: { id } });
  //     await Transaction.update({ status: "Paid" }, { where: { id: id } });

  //     res.status(200).json({
  //       statusCode: 200,
  //       message: "Transaction Paid",
  //     });
  //   } catch (err) {
  //     next(err);
  //   }
  // }

  static async payment(req, res, next) {
    try {
      const data = await i.createInvoice({
        externalID: "your-external-id",
        payerEmail: "stanley@xendit.co",
        description: "Invoice for Shoes Purchase",
        amount: 100000,
      });

      res.status(200).json({
        statusCode: 200,
        message: "paymentGateway",
        data,
      });
    } catch (err) {
      next(err);
    }
  }

  static async getAllInvoice(req, res, next) {
    try {
      const data = await i.getAllInvoices();
      res.status(200).json({
        statusCode: 200,
        message: "Get all invoice Success",
        data,
      });
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = TransactionController;
