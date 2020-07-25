const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
	host: 'smtp.gmail.com',
	port: 465,
	secure: true,
	auth: {
		user: 'tech@onewallet.co.in',
		pass: 'onewallet@Bharat',
	},
});

const email_store = function() {
	return {
		sent_email: async function(mailOptions) {
			transporter.sendMail(mailOptions, function(error, info) {
				if (error) {
					console.log('error at sent_mail', error);
					return { error: error };
				} else {
					console.log('Message sent: ' + info.response);
					return { data: info.response };
				}
			});
		},
	};
};

module.exports = email_store();
