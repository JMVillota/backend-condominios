// const mongoose = require('mongoose')
// mongoose.set("strictQuery", false);
// (async() => {
//     try {
//         const db = await mongoose.connect('mongodb+srv://paquinatoau:MCwfpotYHIibxXnQ@cluster0.hwb4wuh.mongodb.net/dbCondominos?retryWrites=true&w=majority', {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         })
//         console.log(db.connection.name)
//     } catch (error) {
//         console.error(error);
//     }
// })();
const { connect, connection } = require("mongoose");

const connectDB = async() => {
    await connect('mongodb+srv://paquinatoau:MCwfpotYHIibxXnQ@cluster0.hwb4wuh.mongodb.net/dbCondominos?retryWrites=true&w=majority');
    // console.log(db.connection.name);
};

connection.on("error", (err) => {
    console.log(err);
});

module.exports = { connectDB, connection };