var express = require('express');
var router = express.Router();
var cfenv = require("cfenv");
var appEnv = cfenv.getAppEnv();
var config = require('./../config');

if (appEnv.isLocal) {
  newrelic_license_key = process.env.NEW_REILIC_LICENSE_KEY;
} else {
  newrelic_service = appEnv.getService("newrelic");
}

router.get('/newrelic', function(req, res, next) {
  console.log("config");
  res.json(newrelic_service);
});

module.exports = router;
