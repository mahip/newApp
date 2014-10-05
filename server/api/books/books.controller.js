'use strict';

var _ = require('lodash');
var books = require('./books.model');

// Get list of books based on search
exports.searchBooks = function(req, res) {
    var re = new RegExp(req.params.searchValue, 'i');
    var searchType = req.params.searchType;
    if(searchType === 'name') {
        books.find({name: { $regex: re }}, function (err, books) {
            if (err) {
                return handleError(res, err);
            }
            return res.json(200, books);
        });
    }
    else if(searchType === 'author'){
        books.find({author : { $regex: re }}, function (err, books) {
            if(err) { return handleError(res, err); }
            return res.json(200, books);
        });
    }
    else if(searchType === 'publicationYear'){
        books.find({publicationYear : { $regex: re }}, function (err, books) {
            if(err) { return handleError(res, err); }
            return res.json(200, books);
        });
    }
};

function handleError(res, err) {
    return res.send(500, err);
}