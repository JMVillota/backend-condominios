const DB_URI = "mongodb+srv://paquinatoau:MCwfpotYHIibxXnQ@cluster0.hwb4wuh.mongodb.net/dbCondominos?retryWrites=true&w=majority"
const mongoose = require('mongoose')
mongoose.set("strictQuery", false);
const connectDB = async() => {
    try {
        await mongoose.connect(DB_URI)
        console.log('mongodb connection established');
    } catch (error) {
        console.log(error)
    }
}
exports.db = connectDB