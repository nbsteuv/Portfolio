// server.js

// modules =================================================
var express        = require('express');
var app            = express();
var fs             = require('fs');

// configuration ===========================================

var ip = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
var port = process.env.OPENSHIFT_NODEJS_PORT || 8080

app.use(express.static(__dirname + '/public')); 

app.get('/', function (req, res) {
  writeFile('/public/views/index.html', req, res);
});

app.get('/WorkoutAppCSharp', function (req, res) {
  res.download(__dirname + '/public/WorkoutAppCSharp/WorkoutAppC#.zip');
})

function writeFile(fileName, req, res) {
  fs.readFile(__dirname + fileName, function (err, data) {
    if (err) {
      console.log(err);
    }
    else {
      res.writeHead(200, { "Content-Type" : "text/html"});
      res.write(data);
      res.end();
    }
  });
 }

app.listen(port, ip);               
               
console.log('App is testable on http://localhost:' + port);