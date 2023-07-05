const {
  sendInvoiceEmail,
  generateInvoicePDF,
} = require("../helpers/generateInvoice");
const {
  Transaction,
  Venue,
  User,
  Cathering,
  Product,
  Cart,
  Photography,
} = require("../models");
const xendit = require("xendit-node");
const Xendit = new xendit({
  secretKey:
    "xnd_development_Y3j9L4SvFbKJPhVGpsne3cGgDLjh1fcVAVB4Wv2HwOULLi9SnNeJbw5IZEs",
});
const { Invoice } = Xendit;
const i = new Invoice();

class TransactionController {
  static async getTransactionById(req, res, next) {
    try {
      const { id } = req.additionalData;
      const data = await Transaction.findAll({
        where: { id },
      });

      if (!data) {
        throw {
          name: "Transaction Not Found",
        };
      }
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }
  static async changeStatusTransaction(req, res, next) {
    try {
      const { id: noTransaction, status } = req.body;
      const data = await Transaction.findOne({
        where: { noTransaction },
        include: [
          {
            model: Cart,
            include: [
              { model: Photography },
              { model: Cathering },
              { model: Venue },
            ],
          },
          {
            model: User,
          },
        ],
      });

      if (status === "PAID") {
        await Transaction.update(
          { status: "Paid" },
          { where: { noTransaction } }
        );
        await Cart.update({ status: "paid" }, { where: { id: data.Cart.id } });
        try {
          const pdfBuffer = await generateInvoicePDF(data);
          await sendInvoiceEmail(data.User.email, pdfBuffer);
          res.status(200).json({
            message: "Transaction Paid and invoice sent to you email",
            data,
          });
        } catch (error) {
          console.error("Error sending invoice:", error);
        }
      }
    } catch (err) {
      next(err);
    }
  }

  static async createTransaction(name, price, id, noTransaction, CartId) {
    return await Transaction.create({
      name,
      price,
      UserId: id,
      noTransaction,
      CartId,
    });
    return data;
  }

  static async payment(req, res, next) {
    try {
      const { cardid } = req.params;
      const { title, totalAmount } = req.body;
      const { email, id } = req.additionalData;
      const data = await i.createInvoice({
        externalID: "external_id_here",
        payerEmail: email,
        description: title,
        amount: totalAmount,
      });

      const noTransaction = data.id;

      const dataTransaction = await TransactionController.createTransaction(
        title,
        totalAmount,
        id,
        noTransaction,
        cardid
      );

      console.log(dataTransaction.dataValues.id, "ini data trans");

      res.status(200).json({
        statusCode: 200,
        message: "paymentGateway",
        invoiceUrl: data.invoice_url,
        idTrans: dataTransaction.dataValues.id,
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
    } catch (err) {
      next(err);
    }
  }
}

module.exports = TransactionController;
