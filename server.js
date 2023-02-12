'use strict';
const express = require('express');
const serverless = require('serverless-http');
const bodyParser = require('body-parser');
const noSql = require("./Conexiones/noSql")
const cors = require("cors")
const app = express();
require("./Conexiones/slq")

//MIDDLEWARES
app.use(cors())
app.use(express.json())
app.use(noSql);
app.use(bodyParser);
app.use(require('./routes/index'));


module.exports.handler = serverless(app);