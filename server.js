//PACKAGES
const express = require("express")
const cors = require("cors")
const app = express()
require("./Conexiones/noSql")
const dbConnectSql = require("./Conexiones/slq")

//MIDDLEWARES
app.use(cors())
app.use(express.json())
    // app.use(express.static("storage"))
    // app.use("/api", require("./routes"))


//CONTROLLER
// const index_controller = require('./controllers/alquiler')

//ROUTES
app.use(require('./routes/index'));


module.exports.handler = serverless(app);