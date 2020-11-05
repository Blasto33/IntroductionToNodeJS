const host = '0.0.0.0'
const port = '8080'

const server = require('./controller')
var MongoClient = require('mongodb').MongoClient;

const dbName = "introtonode";

const client = new MongoClient("mongodb://localhost:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// Connect to database
client.connect(function (err, db) {
   
    if (err)
        throw err;

    db = client.db('dbName');
    console.log("MongoDB is up!");
    console.log("Database: " + dbName);

     //Write databse Insert/Update/Query code here..
                
});

server.listen(port, host, () => {
    console.log(`Server running on http://localhost:${port}/`)
})