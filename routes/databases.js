var express = require('express');
var router = express.Router();
var sequelize = require('sequelize')

/* Our Database model. We will use Sequelize to interact with our data */
var models = require('../models')
var Database = models.Database;

/*  NOTE: ALL OF THESE ROUTES ARE CONTAINED WITHIN THE /databases ROUTE  */

/* CRUD Operations for Database */

/* Creates a new database */
router.post('/', function(req, res, next) {
    /* Get the post variables */
    var database = {
        title: req.body.title,
        body: req.body.body,
        link: req.body.link,
        advisory: req.body.advisory
    }
    console.log(database)
    Database.create(database).then((database) => {
        res.json(database);
    });
});

/* Retrieves a list of databases. */
router.get('/', function(req, res, next) {
    Database.findAll({}).then(databases => {
        res.json(databases);
    })
});

/* Retrieves a specific database */
router.get('/:id', function(req, res, next){
    Database.findById(req.params.id).then(database => {
        res.json(database)
    })
});

/* Replacing an existing database */
router.put('/:id', function(req, res, next){
    var database = {
        title: req.body.title,
        body: req.body.body,
        link: req.body.link,
        advisory: req.body.advisory
    }
    
    Database.update(database, {where: {id: req.params.id}}).then(() => {
        Database.findById(req.params.id).then(database => {
            res.json(database);
        })
    })
});

/* Updating a specific database*/
router.patch('/:id', function(req, res, next){
    var database = {}
    
    if (req.body.title) database.title = req.body.title;
    if (req.body.body) database.body = req.body.body;
    if (req.body.link) database.link = req.body.link;
    if (req.body.advisory) database.advisory = req.body.advisory;

    Database.update(database, {where: {id: req.params.id}}).then(() => {
        Database.findById(req.params.id).then(database => {
            res.json(database);
        })
    })    
});

/* Deleting a specific database */
router.delete('/:id', function(req, res, next){
    Database.destroy({where: {id: req.params.id}}).then(() => {
        res.send(200);
    })    
});

module.exports = router;
