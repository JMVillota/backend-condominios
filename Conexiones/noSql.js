const mongoose = require('mongoose')
mongoose.set("strictQuery", false);
(async() => {
    try {
        const db = await mongoose.connect('mongodb+srv://paquinatoau:MCwfpotYHIibxXnQ@cluster0.hwb4wuh.mongodb.net/dbCondominos?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log(db.connection.name)
    } catch (error) {
        console.error(error);
    }
})();