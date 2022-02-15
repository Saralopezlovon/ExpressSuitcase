const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence') (mongoose); //Plugin para incrementar ID

const objectSchema = {
    email: {type:String},
    password: {type:String},
    nickname: {type:String},    
    id_suitcase: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Suitcases'
    }]
};

const usersSchema = mongoose.Schema(objectSchema);

usersSchema.plugin(AutoIncrement, {inc_field: 'id_user'});

const Users = mongoose.model('Users', usersSchema);

module.exports = Users;