const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// scheme for creating a new snippet
    // title, tags, code, description
    // str, arrOfStr, str, str

const snippetSchema = new Schema({
    title: { type: String, required: true},
    tags: { type: Array, required: true}, 
    code: { type: String, required: true}, 
    description: { type: String, required: true},
});

const Snippet = mongoose.model('snippet', snippetSchema);

module.exports = Snippet;