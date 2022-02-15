const Users = require('../models/users')

const createUser = async (req, res) =>{
 try{
    const {email, password, nickname} = req.body
    const newUser = await Users.create({
        email: email,
        password: password,
        nickname: nickname   
    });

    res.status(200).json(newUser)

 }catch(err){
    res.status(400).json({'error':err})
 }
};

//loginUser
//logoutUser


const users = {
    createUser
}

module.exports = users