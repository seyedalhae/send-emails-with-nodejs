const nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: "seyedalhae@gmail.com",
		pass: "",
	},
});

var mailOptions = {
	from: "seyedalhae@gmail.com",
	to: "royal.lighting.store@gmail.com",
	subject: "Sending Email using Node.js",
	text: "That was easy Ha Ha!"
};

transporter.sendMail(mailOptions, function (error, info) {
	if (error) {
		console.log("Error: " + error);
	} else {
		console.log("Email sent: " + info.response);
	}
});
