const jwt = require('jsonwebtoken');
const validateToken = require ("express").Router(); 

validateToken.use((req, res, next) => {
    const token = req.headers['access-token'];
	
    if (token) {
      jwt.verify(token, process.env.SECRET, (err, decoded) => {      
        if (err) {
          return res.json({ message: 'Invalid token' });    
        } else {
          req.decoded = decoded;    
          next();
        }
      });
    } else {
      res.send({ 
         message: 'Token not provided' 
      });
    }
 });

 module.exports= validateToken