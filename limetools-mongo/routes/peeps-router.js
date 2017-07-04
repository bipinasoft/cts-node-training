const express = require('express');

const peepsRouter = express.Router();

const peepsController = require('../controllers/peeps-controller');

// create related stuffs
peepsRouter.get('/peeps/create', peepsController.showCreateForm);
peepsRouter.post('/peeps/create', peepsController.createPeep);

peepsRouter.get('/peeps', peepsController.getPeeps);
peepsRouter.get('/peeps/:id', peepsController.getPeepById);
peepsRouter.post('/peeps', peepsController.createPeep);

peepsRouter.get('/peeps/:id/edit', peepsController.showEditForm);
peepsRouter.post('/peeps/:id/edit', peepsController.updatePeep);

peepsRouter.get('/peeps/:id/delete', peepsController.showDeleteConfirmation);
peepsRouter.post('/peeps/:id/delete', peepsController.deletePeep);

module.exports = peepsRouter;