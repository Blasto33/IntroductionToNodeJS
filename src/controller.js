const http = require('http')
const url = require('url')

const routes = ('./routes')

module.exports = http.createServer((req, res) => {

    var service = require('./service.js')
    const reqUrl = url.parse(req.url, true)


    // GET 
    if (reqUrl.pathname == '/sample' && req.method === 'GET') {
        console.log('[' + res.statusCode + ']' + ' Request Type:' +
            req.method + ' Endpoint: ' +
            reqUrl.pathname)

        service.sampleRequest(req, res)
    }
    else if (reqUrl.pathname == '/authenticate' && req.method === 'POST') {
        console.log('[' + res.statusCode + ']' + ' Request Type:' +
            req.method + ' Endpoint: ' +
            reqUrl.pathname)

        service.authenticate(req, res)

        // POST 
    } else if (reqUrl.pathname == '/author' && req.method === 'GET') {
        console.log('[' + res.statusCode + ']' + ' Request Type:' +
            req.method + ' Endpoint: ' +
            reqUrl.pathname)

        service.sampleRequest(req, res)

        // POST 
    } else if (reqUrl.pathname == '/author' && req.method === 'GET') {

    } else if (reqUrl.pathname == '/test' && req.method === 'POST') {
        console.log('Request Type:' +
            req.method + ' Endpoint: ' +
            reqUrl.pathname)

        service.testRequest(req, res)

    } else {
        console.log('[400] Request Type:' +
            req.method + ' Invalid Endpoint: ' +
            reqUrl.pathname)

        service.invalidRequest(req, res)

    }
})
