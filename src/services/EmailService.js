const sgMail = require("@sendgrid/mail");
const { SENDGRID_API_KEY } = require("../config");

class EmailService {
    static async sendEmail(msg) {
        return sgMail
            .send(msg);
    }
}
sgMail.setApiKey(SENDGRID_API_KEY);
const msg = {
    to: "test@example.com", // Change to your recipient
    from: "test@example.com", // Change to your verified sender
    subject: "Sending with SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
};
exports.EmailService = EmailService;