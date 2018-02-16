var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

  res.json(process.env.VCAP_SERVICES);
});

module.exports = router;
