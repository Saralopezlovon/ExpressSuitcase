const Users = require('../models/users')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const createUser = async (req, res) =>{
 try{
    const {email, password, nickname} = req.body;
    const hash = await  bcrypt.hash(password,10);
    const newUser = await Users.create({
        email: email,
        password: hash,
        nickname: nickname   
    });

    res.status(200).json(newUser)

 }catch(err){
    res.status(400).json({'error':err})
 }
};

//Aqui añadiriamos el login
const loginUser = async (req, res) =>{
   try{

      const {email, password} = req.body;
      const user = await Users.findOne({email: email});

      if (user){
          const {email, password:pass, nickname, id_suitcase, id_user} = user
          const validPass = await bcrypt.compare(password, pass);
          if(validPass){
              const payload = {check:true};
              const token = jwt.sign(payload, process.env.SECRET, {expiresIn: '30m'}); 
              res.status(200).json({
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

   }catch(err){
      res.status(400).json({'error':err})
   }
};

//Aqui añadiriamos el logout
const logout = async (req, res) =>{
   try{
   
  
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

//loginUser
//logoutUser


const users = {
    loginUser,
    logout,
    createUser,
    findUserByEmail

}

module.exports = users