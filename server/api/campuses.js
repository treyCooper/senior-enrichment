const router = require('express').Router();
const { Student, Campus } = require('../db/models');

module.exports = router;

router.get('/', function (req, res, next){
  Campus.findAll()
  .then(campuses => res.json(campuses))
  .catch(next);
});

router.get('/:campusId', function (req, res, next){
  Campus.findById(campusId)
  .then(campus => res.json(campus))
  .catch(next);
});
