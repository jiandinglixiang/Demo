var http = require('http')
var events = new (require('events'))
var fs = require('fs')
var stream = require('stream')
var path = require('path')
var zlib = require('zlib')
http.createServer(function (request, response) {
  fs.createReadStream('asd.json').setEncoding('utf8').pipe(fs.createWriteStream('asd2.json'))

  fs.readFile('./365_dj/index.html', function (err, data) {
    response.end(data)
  })
}).listen(8888)
