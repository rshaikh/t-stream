var express = require('express'),
fileSystem = require('fs'),
path = require('path'),
util = require('util');
var torrentStream = require('torrent-stream');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/listen', function(req, res, next) {
    var magnetLink = "magnet:?xt=urn:btih:5F8579CA99DFE483D77DFA79C83C0A04751D0194&dn=billboard+2014+year+end+top+hot+100+songs+charts+best+singles&tr=udp%3A%2F%2Fopen.demonii.com%3A1337%2Fannounce";
    var engine = torrentStream(magnetLink);

    engine.on('ready', function() {
        var readStream = engine.files[3].createReadStream();
        res.writeHead(200, {
            'Content-Type': 'audio/mpeg',
            'Content-Length': engine.files[4].length
        });

        readStream.pipe(res);
    });
})

module.exports = router;
