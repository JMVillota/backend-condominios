const { mongoose } = require('mongoose');

mongoose.set("strictQuery", false);

const DB_URI = "mongodb+srv://paquinatoau:MCwfpotYHIibxXnQ@cluster0.hwb4wuh.mongodb.net/dbCondominos?retryWrites=true&w=majority"

// colocamos la url de conexión local y el nombre de la base de datos
mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});