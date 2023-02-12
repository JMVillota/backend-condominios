const mongoose = require('mongoose')

mongoose.set("strictQuery", false);

const DB_URI = "mongodb+srv://paquinatoau:MCwfpotYHIibxXnQ@cluster0.hwb4wuh.mongodb.net/dbCondominos?retryWrites=true&w=majority"
mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})