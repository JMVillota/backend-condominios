require('dotenv').config()
const mongoose = require('mongoose')
mongoose.set("strictQuery", false);
(async() => {
    try {
        const db = await mongoose.connect(process.env.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log(db.connection.name)
    } catch (error) {
        console.error(error);
    }
})();