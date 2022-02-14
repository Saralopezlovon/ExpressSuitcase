const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
    id_user: Number,
    email: String,
    password: String,
    nickname: String,
    address: String,
    id_suitcase: [{
        type: Schema.Types.ObjectId,
        ref: 'Suitcases'
    }]
});

const Users = mongoose.model('Users', usersSchema);

module.exports = Users;