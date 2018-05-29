var humanModel = require('../models/human');
var mod = humanModel;

var BaseCRUD = {
  save: (obj, callback) =>{
  
    var newObject = new mod(obj);
    newObject.save((err, singleObject) =>{
        callback(err, singleObject);
    });
  },
  search: (search, callback) =>{
    humanModel.find({is_deleted:false}, (err, list)=>{
      callback(err, list);
    });
  },

  fetchAll: (search, callback) =>{
    humanModel.find({}, function(err, list){
      callback(err, list);
    });
  },

  view: (id, callback) =>{
    humanModel.findById(id, function(err, result){
      callback(err, result);
    })
  },
  delete: (id, formData, callback) =>{
    humanModel.findByIdAndUpdate(id, {$set: formData}, function(err, result){
      callback(err, result);
    });
  },
  update: (id, formData, callback)=>{
    humanModel.findByIdAndUpdate(id, {$set: formData}, function(err, result){
      callback(err, result);
    });
  }
};

module.exports = BaseCRUD;
