const MongoClient = require('mongodb').MongoClient;
const DB_URI = "mongodb+srv://paquinatoau:MCwfpotYHIibxXnQ@cluster0.hwb4wuh.mongodb.net/dbCondominos?retryWrites=true&w=majority"
const client = new MongoClient(DB_URI, { useNewUrlParser: true });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});