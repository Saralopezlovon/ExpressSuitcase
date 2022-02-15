const suitcases = require('../controllers/suitcases');
const routes = require('express').Router();

//http://localhost:4000/api/suitcase
routes.post('/suitcase', suitcases.createSuitcase);

//http://localhost:4000/api/suitcase
//http://localhost:4000/api/suitcase?suitcaseId=620be75f4ae50f1fc83d72f1
//http://localhost:4000/api/suitcase?userEmail=carolina@gmail.com&type=weekend
routes.get('/suitcase', suitcases.findSuitcase);

module.exports = routes;