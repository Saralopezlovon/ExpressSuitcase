const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence'); //Plugin para incrementar ID

const usersSchema = mongoose.Schema({
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
usersSchema.plugin(AutoIncrement, {inc_field: 'id_user'});

module.exports = Users;