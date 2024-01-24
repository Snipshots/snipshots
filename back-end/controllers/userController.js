const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const session = require('express-session');
const express = require('express');
const app = express();

app.use(
  session({
    secret: 'valid login',
    // cookie: { secure: true },
  })
);

//instantiate number of salt rounds
const saltRounds = 11;
// invoke bcrypt's genSalt method, passing in saltRounds and
const controller = {};

//SIGNUP
controller.signup = (req, res, next) => {
  const signupResponse = {
    validUsername: false,
    message: '',
  };
  //give appropriate response to client in response obj
  res.locals.signupResponse = signupResponse;
  //user is created
  //backend grabs client's response (req.body) that contains username and pw
  const { username, password } = req.body;
  //check if username is unique

  //invoke bcrypt onto pw and store in db
  bcrypt
    .hash(password, saltRounds)
    .then((hash) => {
      User.create({ username, hashedPassword: hash }).then((user) => {
        if (user) {
          signupResponse.message = 'You created a new user!';
          signupResponse.validUsername = true;
          return next();
        } else {
          signupResponse.message = 'error in creating user';
          return next(error);
        }
      });
    })
    .catch((error) => {
      return next(error);
    });
  //could use better error handling to be specific
};

//LOGIN
//what are we grabbing from client? -> username/pw
//check if username is present in db
//apply the bcrypt compare method onto db password stored and compare with the pw given by client
//if returns true, create a cookie/session, and then invoke next function in the middleware and give appropriate response to client
// otherwise, give appropriate response to client in response obj

// app.use(/login, controller.login, controller.auth, (req, res)=> {

//})

controller.login = (req, res, next) => {
  const { username, password } = req.body;
  let existingUser;
  let boolean;
  User.findOne({ username })
    .then((user) => {
      existingUser = user;
      return bcrypt.compare(password, user.hashedPassword);
    })
    .then((boolean) => {
      //   console.log('boolean', boolean);
      //   console.log('existingUser', existingUser);
      if (boolean) {
        // req.session.user_id = existingUser._id;
        return next(); // next middleware needs to be controller.auth
      } else if (!boolean) {
        return next(); // next middleware needs to be controller.auth
      }
    })
    .catch((error) => {
      return next({
        log: `controller.login error: ${error}`,
        message: { err: 'Error occured in Controllor login middleware.' },
        status: 500,
      });
    });
  // console.log('user._id', user[0]._id);
  // i
  // }
};

//AUTH-SESSION (check if the current use has authorization to go to the next middleware function)
// checking the userId in the cookie/session is in the db
// if true, then invoke next middleware
// if false, then send response object so frontend routes user to signup page

//LOGOUT (end cookie session / remove userId)
// remove userId in the cookie/session
// give appropriate response to client in response obj

module.exports = controller;
