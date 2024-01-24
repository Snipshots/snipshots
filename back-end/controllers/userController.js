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

//SIGNUP
//user is created
//backend grabs client's response (req.body) that contains username and pw
//invoke bcrypt onto pw and store in db
//give appropriate response to client in response obj

//LOGIN
//what are we grabbing from client? -> username/pw
//check if username is present in db
//apply the bcrypt compare method onto db password stored and compare with the pw given by client
//if returns true, create a cookie/session, and then invoke next function in the middleware and give appropriate response to client
// otherwise, give appropriate response to client in response obj

//AUTH-SESSION (check if the current use has authorization to go to the next middleware funciton)
// checking the userId in the cookie/session is in the db
// if true, then invoke next middleware
// if false, then send response object so frontend routes user to signup page

//LOGOUT (end cookie session / remove userId)
// remove userId in the cookie/session
// give appropriate response to client in response obj

module.exports = controller;
