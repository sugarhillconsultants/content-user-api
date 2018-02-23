var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET users listing. */
router.get('/users', function(req, res, next) {
  console.log("find user");
  User.find( function(err, users) {
    if (err) {
      res.status(500).send(err);
    }

    //Return a list of users
    res.json(users);
  });
});

router.get('/users/:user_id', function(req, res, next) {
  User.findById(req.params.user_id, function(err, user) {
    if (err) {
      res.status(404).send(err);
    }

    //Return a user
    res.json(user);
  });
})

router.post('/users', function(req, res, next) {
  User.findOne({ username: req.body.username }, function(err, user) {
    if (user) {
      res.json(user);
    } else {
      var user = new User();

      //Set the provider properties that came from the POST data
      console.log(req.body)
      user.username = req.body.username;
      user.email = req.body.email;
      user.first_name = req.body.first_name;
      user.last_name = req.body.last_name;

      if (req.body.active) {
        user.active = req.body.active;
      } else {
        user.active = true
      }

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

router.put('/users/:user_id', function(req, res, next) {
  User.findById(req.params.user_id, function(err, user) {
    if (err) {
      res.status(404).send(err);
    } else if (user) {
      //Set the provider properties that came from the POST data
      console.log(req.body)
      user.username = req.body.username;
      user.email = req.body.email;
      user.first_name = req.body.first_name;
      user.last_name = req.body.last_name;

      if (req.body.active) {
        user.active = req.body.active;
      } else {
        user.active = true
      }

      user.save(function(err, user_data) {
        if (err) {
          console.log(err);
          res.status(500).send(err);
        }

        res.json(user_data);
      });
    } else {
      res.status(404).send();
    }
  });
});

module.exports = router;
