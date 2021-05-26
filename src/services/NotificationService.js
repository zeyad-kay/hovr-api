const { Twilio } = require("twilio");
const { TWILIO_ACCOUNT_SID, TWILIO_API_KEY, TWILIO_API_SECRET, TWILIO_NOTIFY_SERVICE_SID } = require("../config");

class NotificationService {
    static async sendNotification(notification) {
        const service = getTwilioService();
        return service
            .notifications
            .create(notification); //{uuid(identity),body}
    }

    static async subscribeUser(binding) {
        const service = getTwilioService();
        return service
            .bindings
            .create(binding); // {uuid(identity),client-side-token}
    }
}

function getTwilioService() {
    const client = new Twilio(TWILIO_API_KEY, TWILIO_API_SECRET, { accountSid: TWILIO_ACCOUNT_SID });
    const service = client.notify.services(TWILIO_NOTIFY_SERVICE_SID);
    return service;
}

exports.NotificationService = NotificationService;