var express = require('express');
var router = express.Router();
var sequelize = require('sequelize')
const Op = sequelize.Op;

//Bring in our authentication method
var Config = require('../config');

/* Our Database model. We will use Sequelize to interact with our data */
var models = require('../models')
var Database = models.Database;

/*  NOTE: ALL OF THESE ROUTES ARE CONTAINED WITHIN THE /databases ROUTE  */

/* CRUD Operations for Database */

/* Creates a new database */
router.post('/', Config.ensureAuthenticated, function(req, res, next) {
    /* Get the post variables */
    var database = {
        resourceName: req.body.resourceName,
        resourceType: req.body.resourceType,
        resourceAdvisory: req.body.resourceAdvisory,
        resourceAdvisoryText: req.body.resourceAdvisoryText,
        shortDescription: req.body.shortDescription,
        longDescription: req.body.longDescription,
        coverageDates: req.body.coverageDates,
        access: req.body.access,
        vendor: req.body.vendor,
        link: req.body.link,
    }
    console.log(database)
    Database.create(database).then((database) => {
        res.json(database);
    });
});

/* Retrieves a list of databases. */
router.get('/', function(req, res, next) {
    Database.findAll({
        where: {
            resourceName: {
                [Op.iLike]: (req.query.letter) ? ((req.query.letter)  + '%') : '%%',
            }
        },
        order: ['resourceName']
    }).then(databases => {
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
router.put('/:id', Config.ensureAuthenticated, function(req, res, next){
    var database = {
        resourceName: req.body.resourceName,
        resourceType: req.body.resourceType,
        resourceAdvisory: req.body.resourceAdvisory,
        resourceAdvisoryText: req.body.resourceAdvisoryText,
        shortDescription: req.body.shortDescription,
        longDescription: req.body.longDescription,
        coverageDates: req.body.coverageDates,
        access: req.body.access,
        vendor: req.body.vendor,
        link: req.body.link,
    }
    
    Database.update(database, {where: {id: req.params.id}}).then(() => {
        Database.findById(req.params.id).then(database => {
            res.json(database);
        })
    })
});

/* Updating a specific database*/
router.patch('/:id', Config.ensureAuthenticated, function(req, res, next){
    var database = {}
    
    if (req.body.resourceName) database.resourceName = req.body.resourceName;
    if (req.body.resourceType) database.resourceType = req.body.resourceType;
    if (req.body.resourceAdvisory) database.resourceAdvisory = req.body.resourceAdvisory;
    if (req.body.resourceAdvisoryText) database.resourceAdvisoryText = req.body.resourceAdvisoryText;
    if (req.body.shortDescription) database.shortDescription = req.body.shortDescription;
    if (req.body.longDescription) database.longDescription = req.body.longDescription;
    if (req.body.coverageDates) database.coverageDates = req.body.coverageDates;
    if (req.body.access) database.access = req.body.access;
    if (req.body.vendor) database.vendor = req.body.vendor;
    if (req.body.link) database.link = req.body.link;
    
    Database.update(database, {where: {id: req.params.id}}).then(() => {
        Database.findById(req.params.id).then(database => {
            res.json(database);
        })
    })    
});

/* Deleting a specific database */
router.delete('/:id', Config.ensureAuthenticated, function(req, res, next){
    console.log(req.params.id)
    Database.destroy({where: {id: req.params.id}}).then(() => {
        res.send(200);
    })    
});

module.exports = router;
