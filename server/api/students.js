const router = require('express').Router();
const Student = require('../db/models/student');
// const  Campus  = require('../db/models/campus')

module.exports = router;

router.get('/', function (req, res, next){

  Student.findAll()
  .then(students => res.json(students))
  .catch(next);
});

router.post('/', function (req,res, next){
  Student.create(req.body)
  .then(student => res.json(student))
  .catch(next);
});

router.get('/:studentId', function (req, res, next){

  Student.findById(+req.params.studentId)
  .then(student => res.json(student))
  .catch(next);
});
