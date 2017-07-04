
var environment = process.env.NODE_ENV  || 'development';
var knexConfig = require('../knexfile')[environment];
var knexPool = require('knex')(knexConfig);

module.exports = knexPool;