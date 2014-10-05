'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var bookSchema = new Schema({
    name: String,
    author: String,
    publicationYear: Number,
    available: Boolean
});

module.exports = mongoose.model('books', bookSchema);