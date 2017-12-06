const router = require('express').Router();
const { Student, Campus } = require('../db/models');

module.exports = router;

router.get('/', function (req, res, next){
  Student.findAll()
  .then(students => res.json(students))
  .catch(next);
});

router.get('/:studentId', function (req, res, next){
  Student.findById(studentId)
  .then(student => res.json(student))
  .catch(next);
});
