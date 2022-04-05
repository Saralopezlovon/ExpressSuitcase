const Users = require('../models/users')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const createUser = async (req, res) =>{
 let errors = [];  
 const {email, password, nickname} = req.body;

 try{
   if(!email || !password || !nickname) {
      errors.push("Complete all fields")    
   }

   if(!email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
      errors.push("Email have incorrect format")    
   }

   if(errors.length > 0) {
      res.status(500).json(errors)
   } else {

      const userExist = await Users.findOne({email})

      if(userExist){
         errors.push('User with this email Already exist')
         res.status(500).json(errors)
      }
      else{
         const hash = await  bcrypt.hash(password,10);
         const newUser = await Users.create({
             email: email,
             password: hash,
             nickname: nickname   
         });
      
         res.status(200).json(newUser)
      }
   }
 }catch(err){
    res.status(400).json({'error':err})
 }
};


const loginUser = async (req, res) =>{ 

   const {email, password} = req.body;
   let errors = [];

   try {

      if(!email || !password ) {
         errors.push("Complete all fields")    
      }

      if(errors.length > 0 ) {
         return res.status(403).json({ status: 'error', errors })

      } else {
         const user = await Users.findOne({email: email});

         if (user){
             const {email, password:pass, nickname, id_suitcase, id_user} = user
             const validPass = await bcrypt.compare(password, pass);
   
             if(validPass){
                 const payload = {check:true};
                 const token = jwt.sign(payload, process.env.SECRET, {expiresIn: '30m'}); 
   
                 res.cookie('access_token', token, {
                  expires: new Date(Date.now() + 18000000),
                  secure: false, // set to true if your using https
                  httpOnly: true,
                  })
                  .status(200).json({
                     mensaje: 'Valid Email and Password and correct authentication',
                     token: token,
                     email: email,
                     nickname: nickname,
                     id_suitcase: id_suitcase,
                     id_user: id_user
                 })
   
             }else{
                 res.json("Wrong Pass!")
             }

         }else{
             res.status(404).json("User not found");
         }
      }

   }catch(err){
      res.status(400).json({'error':err})
   }
};

const logoutUser = async (req, res) =>{
   try{
      if (req.cookies['access_token']) {
         res
         .clearCookie('access_token')
         .status(200)
         .json({ status: 'success', msg: 'logout success' })
     } else {
         res.status(401).json({ status: 'error', msg: 'something go wrong' })
     }
  
   }catch(err){
      res.status(400).json({'error':err})
   }
};


const findUserByEmail = async (req, res) =>{
    try{
       const {email} = req.query
       const newUser = await Users.findOne({email: email}, "-__v -_id -id_user").populate('id_suitcase', 'name type bag -_id');
   
       res.status(200).json(newUser)
   
    }catch(err){
       res.status(400).json({'error':err})
    }
   };


const users = {
    loginUser,
    logoutUser,
    createUser,
    findUserByEmail

}

module.exports = users