const suitcases = require('../controllers/suitcases');
const routes = require('express').Router();

//http://localhost:4000/api/suitcase
routes.post('/suitcase', suitcases.createSuitcase);

//http://localhost:4000/api/user?email=carolina@gmail.com
routes.get('/suitcase', suitcases.findSuitcase);

module.exports = routes;