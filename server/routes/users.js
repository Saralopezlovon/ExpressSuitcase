const users = require('../controllers/users');
const routes = require('express').Router();

//http://localhost:4000/api/user
routes.post('/user', users.createUser);

//http://localhost:4000/api/user/login
routes.post('/user/login', users.loginUser );

//http://localhost:4000/api/user?email=carolina@gmail.com
routes.get('/user', users.findUserByEmail);

module.exports = routes;