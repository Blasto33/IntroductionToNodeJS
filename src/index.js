const host = '0.0.0.0'
const port = '8080'

const server = require('./controller')
var MongoClient = require('mongodb').MongoClient;
const dbName = "introtonode";
var url = "mongodb://localhost:27017";

// Connect to database
MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {

    if (err)
        throw err;

    var dbo = db.db("dbName");
    var myobj = [
        {
            username: 'azerty',
            password: 'oui',
        },
        {
            username: 'fr',
            password: 'nop',
        }];

    //Write databse Insert/Update/Query code here..
    dbo.collection("users").insertMany(myobj, function (err, res) {
        if (err) throw err;
        console.log(res);
        db.close();
    });
});

server.listen(port, host, () => {
    console.log(`Server running on http://localhost:${port}/`)
})

exports.client;