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

//Films create
filmRouter.post('/', function(req, res){
    const film = new Film({
        title: req.body.title,
        actors: req.body.actors,
        reviews: req.body.reviews
    });
    films.push(film);
    res.json({data: films});
});

module.exports = filmRouter;