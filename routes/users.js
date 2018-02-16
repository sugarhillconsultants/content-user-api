var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find( function(err, users) {
    if (err) {
      res.status(500).send(err);
    }

    //Return a list of users
    res.json(users);
  });
});

router.get('/:user_id', function(req, res, next) {
  User.findById(req.params.user_id, function(err, user) {
    if (err) {
      res.status(404).send(err);
    }

    //Return a user
    res.json(user);
  });
})

router.post('/add', function(req, res, next) {
  User.findOne({ username: req.body.username }, function(err, user) {
    if (user) {
      res.json(user);
    } else {
      var user = new User();

      //Set the provider properties that came from the POST data
      user.username = req.body.username;
      user.email = req.body.email;
      user.password = req.body.password;

      user.save(function(err, user_data) {
        if (err) {
          console.log(err);
          res.status(500).send(err);
        }

        res.json(user_data);
      });
    }
  });
});

module.exports = router;
