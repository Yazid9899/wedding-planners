const pdfkit = require("pdfkit");
const nodemailer = require("nodemailer");

// Create a function to generate the invoice PDF
async function generateInvoicePDF(data) {
  // Create an instance of the PDF document
  const doc = new pdfkit();

  // Generate the content of the PDF document
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
  // Add more details as needed

  // Generate a buffer from the PDF document
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

// Create a function to send the email with the invoice PDF attached
async function sendInvoiceEmail(email, pdfBuffer) {
  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    // Configure your email service provider details here
    // For example, if you are using Gmail, you can use the SMTP settings like this:
    service: "gmail",
    auth: {
      user: "kobonagara@gmail.com",
      pass: "czwzkvtwwbftzgjo",
    },
  });

  // Set up the email content
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

  // Send the email
  return transporter.sendMail(mailOptions);
}

module.exports = {
  generateInvoicePDF,
  sendInvoiceEmail,
};
