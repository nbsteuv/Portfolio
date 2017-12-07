// server.js

// modules =================================================
var express        = require('express');
var app            = express();
var fs             = require('fs');

// configuration ===========================================

const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  writeFile('/public/views/index.html', req, res);
});

app.get('/WorkoutAppCSharp', function (req, res) {
  res.download(__dirname + '/public/WorkoutAppCSharp/WorkoutAppC#.zip');
});

app.get('/TileGameDemoDownload', function (req, res) {
  res.download(__dirname + '/public/TilePuzzlerDemo/TileGameDemo.zip');
});

app.get('/BreakoutCloneDemoDownload', function (req, res) {
  res.download(__dirname + '/public/BreakoutCloneDemo/Bricked.zip');
});

app.get('/AlienAttackDemoDownload', function (req, res) {
  res.download(__dirname + '/public/AlienAttackDemo/AlienAttackDemo.zip');
});

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

app.listen(PORT, function(){
  console.log('App is testable on port ' + PORT);
});

