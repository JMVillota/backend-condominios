'use strict';
const express = require('express');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
require("./Conexiones/noSql")


app.use(bodyParser);
app.use(require('./routes/index'));


module.exports.handler = serverless(app);