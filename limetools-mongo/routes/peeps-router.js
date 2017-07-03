const express = require('express');

const peepsRouter = express.Router();

const peepsController = require('../controllers/peeps-controller');

peepsRouter.get('/peeps', peepsController.getPeeps);

module.exports = peepsRouter;