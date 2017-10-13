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
  
});

/* Retrieves a list of databases. */
router.get('/', function(req, res, next) {
    Database.findAll({}).then(results => {
        res.json(results);
    })
});

/* Retrieves a specific database */
router.get('/:id', function(req, res, next){

});

/* Replacing an existing database */
router.put('/:id', function(req, res, next){
    
});

/* Updating a specific database*/
router.patch('/:id', function(req, res, next){
    
});

/* Deleting a specific database */
router.delete('/:id', function(req, res, next){
    
});

module.exports = router;
