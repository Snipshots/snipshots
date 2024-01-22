// root router for all middleware
const express = require('express');
const snipsController = require('../controllers/controllers');
const router = express.Router();

//router to GET all snippet objects that include inputted TAGS sent on request body
router.get('/all', snipsController.getAll, (req, res) =>{
    res.status(200).json(res.locals.allSnips);
});   

//router to RETURN one snippet based on its TITLE
router.get('/one', snipsController.getOne, (req, res) =>{
    res.status(200).json(res.locals.oneSnip);
});   

//router to RETURN multiple snippets based on its TAG
router.get('/tag', snipsController.getTag, (req, res) =>{
    res.status(200).json(res.locals.taggedSnips);
});   


//router to CREATE a NEW snippet
router.post('/', snipsController.createSnip, (req, res) =>{
    return res.status(201).json(res.locals.newSnip);
});

// grab all posts under our user
    // title, tags
    // str, arrOfStr

// onclick grabs the whole snippet object
    // title, tags, code, description
    // str, arrOfStr, str, str


// creating a new snippet
module.exports = router;