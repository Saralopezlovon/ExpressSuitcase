const mongoose = require('mongoose');
const Suitcases = require ('./suitcases')

const objectSchema = {
    id_user: {type: Number},
    email:{type:String},
    password:{type:String},
    nickname: {type: String},
    address: {type: String},
    id_suitcase: {type: mongoose.Schema.ObjectId, ref: "Suitcases"}
};

const usersSchema = mongoose.Schema(objectSchema);

const Users = mongoose.model('Users', usersSchema);

module.exports = Users;