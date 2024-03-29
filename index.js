//PACKAGES
const express = require("express")
const cors = require("cors")
const app = express()
const sql = require("./Conexiones/slq")
const nosql = require("./Conexiones/noSql")

//MIDDLEWARES
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//CONTROLLER
// const index_controller = require('./controllers/alquiler')

//ROUTES
app.use(require('./routes/index'));

//EJECUTION

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Tu server esta listo por el puerto ${port}`)
})