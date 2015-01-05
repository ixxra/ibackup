var express = require('express');
var router = express.Router();
var util = require('util');

router.get('/:fname', function (req, res){
    res.sendFile(req.params.fname, {
        root: 'backup',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    }, function(err){
        if (err){
            console.error(err);
            res.status(err.status).end(util.inspect(err));
        }
    });
});

module.exports = router;