// root router for all middleware
const express = require('express');
const snipsController = require('../controllers/controllers');
const router = express.Router();

//router to GET all snippet objects that include inputted TAGS sent on request body
router.get('/', controllers.getSnips, (req, res) =>{
    res.status(200).json(res.locals.snipsArray);
})    
//


//router to POST snippet object



// grab all posts under our user
    // title, tags
    // str, arrOfStr

// onclick grabs the whole snippet object
    // title, tags, code, description
    // str, arrOfStr, str, str

// creating a new snippet