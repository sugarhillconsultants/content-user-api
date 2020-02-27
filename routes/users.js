var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var users = {
    "users": [
      {
        "name": "Rob Durbin",
        "username": "rburbin",
        "email": "bdurbin@example.com"
      },
      {
        "name": "Sally Hemmings",
        "username": "shemmings",
        "email": "shemmings@example.com"
      },
      {
        "name": "Adam West",
        "username": "awest",
        "email": "thebatman@example.com"
      },
      {
        "name": "Casey Macys",
        "username": "cmacys",
        "email": "cmacys@example.com"
      }
    ]
  }
  res.json(users);
});

module.exports = router;
