const express = require('express');
const middlewares = require('./middlewares');
const routes = require("./routes");

const app = express();

app.use(middlewares);
app.use(routes)

module.exports = app;