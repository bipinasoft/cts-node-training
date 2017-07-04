var Joi = require('joi');
var PeepValidationSchema = require('../validations/peep');
var formatJoiValidationErrors = require('../validations/format');
var knexPool = require('../config/knex');
var tableName = 'peeps';

function getPeeps (req, res) {

    //Sample to filter : EmployeeModel.find({first_name: 'Angel', last_name: 'Gutmann'})
     knexPool(tableName).then(function(result) {
        res.render('peeps/list', { peeps: result });
    }).catch(function(err) {
        console.log('Error ');
        res.send('Error occured');
    });
    
}

function getPeepById(req, res) {
    const peepId = req.params.id;
    console.log('Peep id : ', peepId);

    knexPool(tableName).where('id', peepId).then(function(result) {
        console.log('Result : ', result);
        var successMessage = req.flash('creationSuccess');
        res.render('peeps/details', { peep: result[0] , successMessage: successMessage });
    }).catch(function(err) {
        console.log('Error in fetching employee');
        res.send('Error occured');
    });
}

function showCreateForm(req, res) {
    console.log('Show create form');
    var errors = req.flash('creationError');
    res.render('peeps/create', { errors: errors });
}

function createPeep(req, res) {
    console.log('Body : ', req.body);
    
}

function showEditForm(req, res) {
    
}

function updatePeep(req, res) {
    
}

function showDeleteConfirmation(req, res) {
    var peepId = req.params.id;
    res.render('peeps/delete', { peepId: peepId });
}

function deletePeep(req, res) {
    var peepId = req.params.id;
    
}

module.exports = {
    getPeeps: getPeeps,
    getPeepById: getPeepById,

    showCreateForm: showCreateForm,
    createPeep: createPeep,

    showDeleteConfirmation: showDeleteConfirmation,
    deletePeep: deletePeep,

    showEditForm: showEditForm,
    updatePeep: updatePeep,
};