const bodyParser = require('body-parser');
const cors = require('cors');

let middlewares = [
    cors(), //should add options in production
    bodyParser.json(),
]

module.exports = middlewares; 