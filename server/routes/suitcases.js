const suitcases = require('../controllers/suitcases');
const routes = require('express').Router();
const validateToken = require('../middlewares/validateToken') //Validar token para poder realizar determinadas acciones

//http://localhost:4000/api/suitcase
routes.post('/suitcase',validateToken, suitcases.createSuitcase);

//http://localhost:4000/api/suitcase
//http://localhost:4000/api/suitcase?suitcaseId=620be75f4ae50f1fc83d72f1
//http://localhost:4000/api/suitcase?userEmail=carolina@gmail.com&type=weekend
routes.get('/suitcase', validateToken, suitcases.findSuitcase);

module.exports = routes;