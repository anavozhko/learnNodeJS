var User = require('models/user').User;

module.exports.get = function (req, res, next) {
  User.find({}, function (err, users) {
      if (err) return next(err);
      res.json(users);
  });
};