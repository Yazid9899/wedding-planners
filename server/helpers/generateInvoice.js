const pdfkit = require("pdfkit");
const nodemailer = require("nodemailer");

async function generateInvoicePDF(data) {
  const doc = new pdfkit();

  doc.text("Invoice", { align: "center", fontSize: 20 });
  doc.moveDown();
  doc.text(`Invoice ID: ${data.id}`);
  doc.text(`Name: ${data.name}`);
  doc.text(`Price: ${data.price}`);
  doc.text(`Cart ID: ${data.CartId}`);
  doc.text(`Created At: ${data.createdAt}`);
  doc.moveDown();
  doc.text("Cart Details:");
  doc.text(`Title: ${data.Cart.title}`);
  doc.text(`Bride: ${data.Cart.bride}`);
  doc.text(`Groom: ${data.Cart.groom}`);
  doc.text(`Wedding Date: ${data.Cart.weddingDate}`);
  doc.text(`Total Price: ${data.Cart.totalPrice}`);
  doc.text(`Pax: ${data.Cart.pax}`);
  doc.moveDown();
  doc.text("Photography Details:");
  doc.text(`Name: ${data.Cart.Photography.name}`);
  doc.text(`Price: ${data.Cart.Photography.price}`);

  return new Promise((resolve, reject) => {
    const buffers = [];
    doc.on("data", (buffer) => buffers.push(buffer));
    doc.on("end", () => {
      const pdfBuffer = Buffer.concat(buffers);
      resolve(pdfBuffer);
    });
    doc.end();
  });
}

async function sendInvoiceEmail(email, pdfBuffer) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "kobonagara@gmail.com",
      pass: "czwzkvtwwbftzgjo",
    },
  });

  const mailOptions = {
    from: "your-email@gmail.com",
    to: email,
    subject: "Invoice",
    text: "Please find attached the invoice for your order.",
    attachments: [
      {
        filename: "invoice.pdf",
        content: pdfBuffer,
      },
    ],
  };

  return transporter.sendMail(mailOptions);
}

module.exports = {
  generateInvoicePDF,
  sendInvoiceEmail,
};
