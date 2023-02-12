const mongoose = require('mongoose')
mongoose.set("strictQuery", false);

const DB_URI = "mongodb://mongo:to1rG4ZcGIGBs4JevL6F@containers-us-west-57.railway.app:7023"
const connectDB = mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err, res) => {
    if (!err) {
        console.log('**** CONEXION CORRECTA ****')
    } else {
        console.log('***** ERROR DE CONEXION ****')
    }
})

exports.db = connectDB