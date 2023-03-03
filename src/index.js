const nodemailer = require("nodemailer");
const { html } = require("./template");

var transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: "seyedalhae@gmail.com",
		pass: "YOUR_PASSWORD",
	},
});

var mailOptions = {
	from: "seyedalhae@gmail.com",
	to: "royal.lighting.store@gmail.com",
	subject: "Sending Email using Node.js",
	// text: "That was easy Ha Ha!",
	html
};

console.log(html);

transporter.sendMail(mailOptions, function (error, info) {
	if (error) {
		console.log("Error: " + error);
	} else {
		console.log("Email sent: " + info.response);
	}
});
