var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var imageSchema = new Schema({
    size: Number,
    path: String,
    name: String,
    type: String,
    hash: String,
    lastModifiedDate: Date
});

mongoose.model('Image', imageSchema);