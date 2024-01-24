const Snippet = require('../models/userModel');
const bcrypt = require('bcrypt');

//instantiate number of salt rounds
const saltRounds = 11;

// invoke bcrypt's genSalt method, passing in saltRounds and
const hashPassword = (password) => {
  bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(password, salt, function (err, hash) {
      //store password to db
    });
  });
};

const controller = {};

module.exports = controller;
