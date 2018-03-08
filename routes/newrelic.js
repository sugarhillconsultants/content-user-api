var express = require('express');
var router = express.Router();
var cfenv = require("cfenv");
var appEnv = cfenv.getAppEnv();
var config = require('./config');

router.get('/newrelic', function(req, res, next) {
  console.log("config");
  res.json({ "newrelic_license_key": config.newrelic_license_key });
});

module.exports = router;
