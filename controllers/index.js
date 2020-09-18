// controllers/index.js
const User = require('../models/User');

exports.home = (req, res) => {
  res.send('Implementar');
};

exports.search = (req, res) => {
  res.send('Implementar')
}
// controllers/index.js
exports.home = (req, res) => {
  res.render('index');
};
exports.home = (req, res) => {
  User.find().sort('id').exec((err, users) => {
    res.render('index', { users: users });
  });
};
// controllers/index.js
exports.home = (req, res) => {
  User.find().sort('id').exec((err, users) => {
    for (let user of users) {
      user.age = Math.trunc((new Date() - user.birthday) / 31536000000);
    }
    res.render('index', { users: users });
  });
};
// controllers/index.js
exports.search = (req, res) => {
  let result = null;
  User.findOne({ id: req.query.id }).exec((err, user) => {
    if (user != null) {
      user.age = Math.trunc((new Date() - user.birthday) / 31536000000);
      result = [user];
    }
    res.render('index', { users: result });
  })
}