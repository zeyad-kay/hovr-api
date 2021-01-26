const webpush = require('../../config/webpush');

// Interface pushSubscription = {
//   endpoint: '.....',
//   keys: {
//     auth: '.....',
//     p256dh: '.....'
//   }
// };


class NotificationService {
    constructor(pushSubscription, body) {
        this.pushSubscription = pushSubscription;
        this.body = body;
    };
    async send() {
        return webpush.sendNotification(this.pushSubscription, this.body);
    }
}

module.exports = NotificationService;