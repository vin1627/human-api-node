var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var humanSchema = new Schema({
        name : {type: String, required: true},
        email : {type: String, unique: true},
        createdAt : {type: Date, default: Date.now},
        updatedAt : {type: Date, default: Date.now},
        is_deleted : {type : Boolean}

});

var human =  mongoose.model('human', humanSchema);
module.exports = human;
