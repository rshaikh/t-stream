phonecatApp.factory('torrentService', function() {
    var torrentStream = require('torrent-stream');
    var engine = null;

    getFiles = function(magnet, callback){
        var files = [];
        engine = torrentStream(magnet);
        engine.on('ready', function() {
          engine.files.forEach(function(file) {
              files.push(file);
          });
          callback(files);
        });
    };

    return {
        getFiles : getFiles
    }
 });