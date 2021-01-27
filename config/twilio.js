let twilio = require('twilio');
let client = new twilio(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);

module.exports = client;