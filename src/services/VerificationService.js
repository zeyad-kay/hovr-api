const { Twilio } = require("twilio");
const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_VERIFY_SERVICE_SID } = require("../config");

class VerificationService {
    static async sendVerificationCode(recipient, channel) {
        const service = getTwilioService();
        return service
            .verifications
            .create({ to: recipient, channel: channel })
            .then(verification => verification.status);
    }

    static async verifyCode(recipient, code) {
        const service = getTwilioService();
        return service
            .verificationChecks
            .create({ to: recipient, code: code })
            .then(verification_check => verification_check.status);
    }
}

function getTwilioService() {
    const client = new Twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);
    const service = client.verify.services(TWILIO_VERIFY_SERVICE_SID);
    return service;
}

exports.VerificationService = VerificationService;