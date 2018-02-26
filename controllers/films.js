//since we don't have a database we'll use our front end models at the moment
const films = require('../client/src/models/films')();
const Film = require('../client/src/models/film');
const Review = require('../client/src/models/review');

const express = require('express');
const filmRouter = new express.Router();

//Films show
filmRouter.get('/:id', function(req, res){
    res.json({data: films[req.params.id]});
});

//Films index
filmRouter.get('/', function(req, res){
    res.json({data: films});
});

module.exports = filmRouter;