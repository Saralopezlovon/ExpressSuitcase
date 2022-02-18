const users = require('../controllers/users');
const routes = require('express').Router();
const validateToken = require('../middlewares/validateToken') //Validar token para poder realizar determinadas acciones


//http://localhost:4000/api/user
routes.post('/user', users.createUser);

//http://localhost:4000/api/user/login
routes.post('/user/login', users.loginUser);

//http://localhost:4000/api/user/logout
routes.post('/user/logout', validateToken, users.logoutUser );

//http://localhost:4000/api/user?email=carolina@gmail.com
routes.get('/user',validateToken, users.findUserByEmail);

module.exports = routes;