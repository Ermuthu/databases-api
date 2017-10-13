var express = require('express');
var router = express.Router();

/*  NOTE: ALL OF THESE ROUTES ARE CONTAINED WITHIN THE /databases ROUTE  */

/* CRUD Operations for Database */

/* Creates a new database */
router.post('/', function(req, res, next) {
  
});

/* Retrieves a list of databases. */
router.get('/', function(req, res, next) {

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
