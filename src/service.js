const url = require('url')
var client = require('./index.js').client
var MongoClient = require('mongodb').MongoClient;

exports.sampleRequest = function (req, res) {
    const reqUrl = url.parse(req.url, true)
    var name = 'nuSapb'
    if (reqUrl.query.name) {
        name = reqUrl.query.name
    }

    var response = {
        "text": "Hello " + name
    }

    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(response))
}

exports.authenticate = function (req, res) {
    MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
        console.log(db);
        /*if (!user || user.password !== req.body.password) return res.status(401).send('Username or password is incorrect');
        //Create and assign a token
        const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
        // res.cookie('cookieJWT', token, { maxAge: 900000, httpOnly: true });
        res.header('auth-token', token).send(token);*/
    });
}

exports.createpage = function (req, res) {

}

exports.listpage = function (req, res) {

}

exports.readpage = function (req, res) {

}

exports.updatepage = function (req, res) {

}

exports.deletepage = function (req, res) {

}

exports.createarticles = function (req, res) {

}

exports.listarticles = function (req, res) {

}

exports.readarticle = function (req, res) {

}

exports.updatearticle = function (req, res) {

}

exports.deletearticle = function (req, res) {

}

exports.publishcomments = function (req, res) {

}

exports.deletecomments = function (req, res) {

}

exports.articlevspage = function (req, res) {

}

exports.testRequest = function (req, res) {
    body = ''

    req.on('data', function (chunk) {
        body += chunk
    })

    req.on('end', function () {

        postBody = JSON.parse(body)

        var response = {
            "text": "Post Request Value is  " + postBody.value
        }

        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(response))
    })
}

exports.invalidRequest = function (req, res) {
    res.statusCode = 404
    res.setHeader('Content-Type', 'text/plain')
    res.end('Invalid Request')
}