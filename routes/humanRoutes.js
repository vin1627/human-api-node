var express = require('express');
var router = express.Router();
var humanController = require('../controllers/humanController');
var humanModel = require('../models/human');

router.get('/', (res, req, next) =>{
  humanController.search({}, (err, result) =>{
    var respond = {data: result};
      res.send(respond);
  });
});

router.get('/all', (res, req, next) =>{
  humanController.fetchAll({}, function(err, result){
      var respond = {data: result};
      res.send(respond);
  });
});

router.post('/basic-search', (res, req, next) =>{
  var data = req.body;
  humanController.find(data, function(err, results){
    objectResponse = {result: "success", data: results };
    res.send(objectResponse);
  });
});

//create data
router.post('/', (req, res, next) =>{
  var data = req.body;
  humanController.save(data, function(err, result){
        result.send(JSON.stringify(response));
  });
});

//find by id
router.get('/:id', (req, res, next) =>{
    var id = req.params.id;
    humanController.view(id, function(err, result){
          var response = {data: result};
      res.send(response)
    });
});

router.delete('/:id', (req, res, next) =>{
  var id = req.params.id;
    humanController.delete(id, function(err, result){
      var response = {data: result};
      res.send(response)
    })
})

//update thru id

router.post('/:id', (req, res, next) =>{
  var id = req.params.id;
  var formData = req.body;
    humanController.update(id, formData, function(err, result){
        var response = {data: result};
        res.send(response);
    });
});
module.exports = router;
