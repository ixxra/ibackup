var formidable = require('formidable');
var mongoose = require('mongoose');
var util = require('util');
var Image = mongoose.model('Image');


exports.index = function(req, res){
    Image.find().sort({lastModifiedDate: -1}).exec(function(err, images){
        if (err) {
            res.writeHead(200, {'content-type': 'text/plain'});
            res.write('Error\n\n');
            res.end(util.inspect(err));
        } 

        for (var idx in images){
            if (images[idx].type.substring(0, 6) == 'video/'){
                images[idx].isVideo = true;
            }
        }

        res.render('backup/backup', {images: images});
    });
};

exports.create = function(req, res){
    var form = new formidable.IncomingForm({
        uploadDir: __dirname + '/../backup',
        multiples: true,
        hash: 'md5'
    });
    form.parse(req, function(err, fields, files){
        res.writeHead(200, {'content-type': 'text/plain'});
        res.write('received upload:\n\n');
        res.write(util.inspect({fields: fields, files: files}));
        if (files.image1.constructor === Array){
            for (var idx in files.image1){
                var f = files.image1[idx];
                var image = new Image(f);
    
                image.save(function(err, image){
                    if (err){
                        console.error(err);
                    }
                });
    
                res.write(util.inspect({file: f}));
                res.write('\n\n');   
            }
        } else {
            var f = files.image1;
            var image = new Image(f);
    
            image.save(function(err, image){
                if (err){
                    console.error(err);
                }
            });
    
            res.write(util.inspect({file: f}));
            res.write('\n\n');
        }
        res.end(util.inspect({fields: fields, files: files}));
    });  
};

exports.new = function(req, res){
    res.render('backup/new');
};