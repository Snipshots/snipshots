// root router for all middleware
const express = require('express');
const snipsController = require('../controllers/snipController');
const router = express.Router();

//router to GET all snippet cards that include inputted TAGS sent on request body
router.get('/all', snipsController.getAll, (req, res) => {
  res.status(200).json(res.locals.allSnips);
});

//router to RETURN one snippet based on its TITLE
router.post('/one', snipsController.getOne, (req, res) => {
  res.status(200).json(res.locals.oneSnip);
});

//router to RETURN multiple snippets based on its TAG
router.get('/tag', snipsController.getTag, (req, res) => {
  res.status(200).json(res.locals.taggedSnips);
});

//router to CREATE a NEW snippet
router.post('/', snipsController.createSnip, (req, res) => {
  return res.status(201).json(res.locals.newSnip);
});

// router to DELETE a snippet
router.delete('/', snipsController.deleteOne, (req, res) => {
  return res.status(200).json(res.locals.deletedSnip);
});

// router to EDIT a snippet's TITLE
router.patch('/title', snipsController.editTitle, (req, res) => {
  return res.status(200).json(res.locals.newTitle);
});

// router to EDIT a snippet's DESCRIPTION
router.patch('/description', snipsController.editDescription, (req, res) => {
  return res.status(200).json(res.locals.newDescription);
});

// grab all posts under our user
// title, tags
// str, arrOfStr

// onclick grabs the whole snippet object
// title, tags, code, description
// str, arrOfStr, str, str

// creating a new snippet
module.exports = router;
