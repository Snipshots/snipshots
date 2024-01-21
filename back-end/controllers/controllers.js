const { model } = require('mongoose');
const Snippet = require('../models/snippetModel');

const controller = {};

// function to find code snippet by TAGS
// returns all objects that contains all the tags passed in on req.body.tags array.
function byTag(arrOfTags, arrOfSnips){
    
    const tags = [...arrOfTags]; //creates a shallow copy to manipulate

    const result = [];

    arrOfSnips.forEach(snip => {
        let allTags = true;

        tags.forEach(tag => {
            if (!snip.tags.includes(tag)){
                allTags = false;
            };
        });
        if (allTags === true){
            result.push(snip)
        };
    });
    return result;
};

//Controller to create NEW snippet, add to database, and return
//new snippet
controller.createSnip = async (req, res, next) => {
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

//res.locals.oneSnip USE THIS SYNTAX
//Controller to return ONE snippet based on selected TAG
controller.getOne = async (req, res, next) => {
    try{
        const { title } = req.body;
        const oneSnip = await Snippet.find({title});
        if(oneSnip === null){
            const error = {
                log: `Error in getOne middleware: ${error}`,
                status: 404,
                message: {error: 'Could not find Snip!'},
            };
            return next(error);
        }
        res.locals.oneSnip = oneSnip;
        return next();
    } catch (err) {
        return next({
            log: `controller.getOne error: ${err}`,
            message: { err: 'Error occured in Controllor getOne middleware.'},
            status: 500,
        });
    };
}

//router to RETURN multiple snippets based on its TAG
controller.getTag = async (req, res, next) => {

    try{
        const {tags} = req.body
        const allSnips = await Snippet.find({});
        console.log("All Snips:", allSnips);
        res.locals.taggedSnips = byTag(tags, allSnips);
        return next();

     } catch (err){
        return next({
            log: `controller getTag error: ${err}`,
            message: { err: 'Error occured in Controllor getAll middleware.'},
            status: 500,
        });
     };
};
  

// res.locals.allSnips USE THIS SYNTAX
controller.getAll = async (req, res, next) => {

    try{

    const allSnips = await Snippet.find({},{ title: true, tags: true} );
    res.locals.allSnips = allSnips;
    return next();
    } catch (err) {
        return next({
            log: `controller getAll error: ${err}`,
            message: { err: 'Error occured in Controllor getAll middleware.'},
            status: 500,
        });
    };
};

module.exports = controller;