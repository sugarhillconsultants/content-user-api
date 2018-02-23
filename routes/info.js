var express = require('express');
var router = express.Router();
var cfenv = require("cfenv");
var appEnv = cfenv.getAppEnv();

router.get('/info', function(req, res, next) {
  console.log("info");
  if (!appEnv.isLocal) {
    res.json(process.env.VCAP_SERVICES);
  } else {
    res.json({ "message": "This applications is not using VAC_SERVICES."});
  }
});

module.exports = router;
