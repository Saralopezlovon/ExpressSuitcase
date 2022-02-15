const outfits = require('../controllers/outfits');
const routes = require('express').Router();

//http://localhost:4000/api/outfit?suitcaseId=620bec36e22c5bb3197c9b71
routes.post('/outfit', outfits.createOutfit);



module.exports = routes;