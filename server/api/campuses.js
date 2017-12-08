const router = require('express').Router();
// const Student = require('../db/models/student');
const  Campus  = require('../db/models/campus')

module.exports = router;

router.get('/', function (req, res, next){
  Campus.findAll()
  .then(campuses => res.json(campuses))
  .catch(next);
});

router.get('/:campusId', function (req, res, next){
  Campus.findById(+req.params.campusId)
  .then(campus => res.json(campus))
  .catch(next);
});

router.post('/', function (req,res, next){
  Campus.create(req.body)
  .then(campus => res.json(campus))
  .catch(next);
});

router.put('/:campusId', function (req, res,next){
  const campusId = +req.params.campusId;
  Campus.findById(campusId)
  .then(campus => campus.update(req.body))
  .then(res.status(200).send())
  .catch(next);
});

router.delete('/:campusId', function(req, res, next){
  const id = +req.params.campusId;
  console.log(id)
  Campus.destroy({where: { id } })
  .then(() => res.status(204).end())
  .catch(next);
});


