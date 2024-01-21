const { model } = require('mongoose');
const Snippet = require('../models/snippetModel');

const controller = {};

//Controller get ALL of the snippets in the DB
// controller.getSnips = {

// };

//Controller to create NEW snippet, add to database, and return
//new snippet
controller.postSnip = async (req, res, next) => {
    try{
        const {
            title,
            tags,
            code,
            description,
        } = req.body;
    
    const newSnip = await Snippet.create({
        title:title,
        tags:tags,
        code:code,
        description:description,
    });
    res.locals.newSnip = newSnip;
    return next();
    } catch (err) {
        return next({
            log: `controller.postSnip error: ${err}`,
            message: { err: 'Error occured in Controllor PostSnip middleware.'},
            status: 500,
        });
    };
};

module.exports = controller;