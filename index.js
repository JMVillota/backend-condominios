//PACKAGES
const express = require("express")
const cors = require("cors")
const app = express()
const dbConnectnoSql = require("./Conexiones/noSql")
const dbConnectSql = require("./Conexiones/slq")
const serverless = require("serverless-http");


//MIDDLEWARES
app.use(cors())
app.use(express.json())
    // app.use(express.static("storage"))
    // app.use("/api", require("./routes"))


//CONTROLLER
// const index_controller = require('./controllers/alquiler')

//ROUTES
app.use(require('./routes/index'));

//EJECUTION

app.listen(process.env.PORT || 3000, () => {
    console.log(`Tu server esta listo por el puerto ${port}`)
})

module.exports = app;
module.exports.handler = serverless(app);