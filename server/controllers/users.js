const Users = require('../models/users')

const createUser = async (req, res) =>{
 try{
    const {email, password, nickname} = req.body
    const newUser = await Users.create({
        email: email,
        password: password,
        nickname: nickname   
    }, "-__v -_id -id_user");

    res.status(200).json(newUser)

 }catch(err){
    res.status(400).json({'error':err})
 }
};

const findUserByEmail = async (req, res) =>{
    try{
       const {email} = req.query
       const newUser = await Users.findOne({email: email}, "-__v -_id -id_user");
   
       res.status(200).json(newUser)
   
    }catch(err){
       res.status(400).json({'error':err})
    }
   };

//loginUser
//logoutUser


const users = {
    createUser,
    findUserByEmail

}

module.exports = users