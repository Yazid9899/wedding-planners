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
        where: { 
          UserId:id 
        },
      });

      if (data.length == 0) {
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
      // const {status} = req.body
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

      if(!data){
        throw{
          name: "Transaction Not Found"
        }
      }
      const xendit = await i.getInvoice({ invoiceID: data.noTransaction });

      if (xendit.status === "PAID") {
      // if (status === "PAID") {
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
    return await Transaction.create({
      name,
      price,
      UserId: id,
      noTransaction,
      CartId,
    });
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
      
      // console.log(data, "<<<<<<<<<<<<<<< data id");
      const noTransaction = data.id;

      const dataTransaction = await TransactionController.createTransaction(
        title,
        totalAmount,
        id,
        noTransaction,
        cardid
      );

      res.status(201).json({
        message: "paymentGateway",
        invoiceUrl: data.invoice_url,
        idTrans: dataTransaction.dataValues.id,
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = TransactionController
