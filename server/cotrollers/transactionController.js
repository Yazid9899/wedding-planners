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
      const { id } = req.params;
      const { email } = req.additionalData;
      const data = await Transaction.findOne({
        where: { id },
        include: [
          {
            model: Cart,
            include: [
              { model: Photography },
              { model: Cathering },
              { model: Venue },
            ],
          },
        ],
      });
      const xendit = await i.getInvoice({ invoiceID: data.noTransaction });

      if (xendit.status === "PAID") {
        await Transaction.update({ status: "Paid" }, { where: { id } });

        try {
          const pdfBuffer = await generateInvoicePDF(data);
          await sendInvoiceEmail(email, pdfBuffer);
          res.status(200).json({
            message: "Transaction Paid and invoice sent to you email",
            data,
          });
        } catch (error) {
          console.error("Error sending invoice:", error);
        }
      } else {
        res.status(200).json({
          message: "Transaction Pending",
          data,
        });
      }
    } catch (err) {
      next(err);
    }
  }

  static async createTransaction(name, price, id, noTransaction, CartId) {
    await Transaction.create({
      name,
      price,
      UserId: id,
      noTransaction,
      CartId,
    });
  }

  static async payment(req, res, next) {
    try {
      const {cardid} = req.params
      const { title, totalAmount} = req.body;
      const { email, id } = req.additionalData;

      const data = await i.createInvoice({
        externalID: "your-external-id",
        payerEmail: email,
        description: title,
        amount: totalAmount,
      });

      const noTransaction = data.id;

      TransactionController.createTransaction(
        title,
        totalAmount,
        id,
        noTransaction,
        cardid
      );

      res.status(200).json({
        statusCode: 200,
        message: "paymentGateway",
        invoiceUrl: data.invoice_url,
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
