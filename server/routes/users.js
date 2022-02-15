const users = require('../controllers/users');
const routes = require('express').Router();

//http://localhost:4000/api/user
routes.post('/user', users.createUser);

module.exports = routes;