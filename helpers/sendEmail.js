const nodemailer = require("nodemailer");

require("dotenv").config();

const sendEmail = async (data) => {
	const email = { ...data, from: "HoholBandera123@meta.ua" };
	await nodemailer.sendMail(email);
	return true;
};

module.exports = sendEmail;
