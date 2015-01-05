var images = require('images');
var express = require('express');
var router = express.Router();
var formidable = require('formidable');
var util = require('util');


router.get('/', images.index);
router.post('/', images.create);
router.get('/new', images.new);

/*
router.post('/', function(req, res) {
    var form = new formidable.IncomingForm({
        uploadDir: __dirname + '/../backup',
        multiples: true,
        hash: 'md5'
    });
    form.parse(req, function(err, fields, files){
        res.writeHead(200, {'content-type': 'text/plain'});
        res.write('received upload:\n\n');
        for (var idx in files.image1){
            var f = files.image1[idx];
            res.write(util.inspect({file: f}));   
        }
        res.end(util.inspect({fields: fields, files: files}));
    });  
});
*/
module.exports = router;
