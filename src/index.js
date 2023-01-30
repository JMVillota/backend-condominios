//PACKAGES
const express = require("express")
const cors = require("cors")
const express = require("express");
const serverless = require("serverless-http");
const app = express()


//MIDDLEWARES
app.use(cors())
app.use(express.json())


//ROUTES
app.use(require('../routes/index'));


module.exports = app;
module.exports.handler = serverless(app);