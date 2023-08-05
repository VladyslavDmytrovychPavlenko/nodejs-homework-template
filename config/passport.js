const nodemailer = require("nodemailer");

require("dotenv").config();

const { PASSWORD } = process.env;

const config = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: "HoholBandera123@meta.ua",
    pass: PASSWORD,
  },
};

const transporter = nodemailer.createTransport(config);

const emailOptions = {
  from: "HoholBandera123@meta.ua",
  to: "SlavaZSU1991.com",
  subject: "Nodemailer test",
  text: "Test.... U did it!",
};

transporter
  .sendMail(emailOptions)
  .then((info) => console.log(info))
  .catch((err) => console.log(err));

module.exports = transporter;
