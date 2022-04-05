const outfits = require('../controllers/outfits');
const routes = require('express').Router();
const validateToken = require('../middlewares/validateToken') //Validar token para poder realizar determinadas acciones


//http://localhost:4000/api/outfit?suitcaseId=620bec36e22c5bb3197c9b71
routes.post('/outfit', validateToken, outfits.createOutfit);

routes.put('/outfit', outfits.updateOutfit);
routes.delete('/outfit', outfits.deleteAllOutfitsBySuitecase);

module.exports = routes;