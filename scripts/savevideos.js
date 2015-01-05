#!/usr/bin/env node

/* Utility script to copy and rename videos from backup.
 * 
 * videos.json contains an array of videos name, path as retrieved from mongodb.
 * There should be a videos folder where each one is copied.
*/
var fs = require('fs');
var images = JSON.parse(fs.readFileSync('videos.json', 'utf8'));

var cp = function(src, dest){
    fs.createReadStream(src).pipe(fs.createWriteStream(dest))
};

for (var idx in images){
    var img = images[idx];
    cp(img.path, 'videos/' + img.name);
}
