const mongoose = require('mongoose')
mongoose.set("strictQuery", false);
const connectDB = async() => {
    try {
        await mongoose.connect('mongodb+srv://paquinatoau:MCwfpotYHIibxXnQ@cluster0.hwb4wuh.mongodb.net/dbCondominos?retryWrites=true&w=majority')
        console.log('mongodb connection established');
    } catch (error) {
        console.log(error)
    }
}
connectDB()