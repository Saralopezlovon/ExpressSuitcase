const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const objectSchema = {
    name: {type:String},
    type: {type:String},
    fridayClothes: {
        top: {type: String},
        bottom: {type: String},
        lingerie: {type: String}
    },
    saturdayClothes: {
        top: {type: String},
        bottom: {type: String},
        lingerie: {type: String}
    },
    sundayClothes: {
        top: {type: String},
        bottom: {type: String},
        lingerie: {type: String}
    },
    bag: [String],
    id_user: {type: mongoose.Schema.ObjectId, ref: "User"}
};

const suitcasesSchema = mongoose.Schema(objectSchema);

suitcasesSchema.plugin(AutoIncrement, {inc_field: 'id_suitcase'});

const Suitcases = mongoose.model('Suitcases', suitcasesSchema);

module.exports = Suitcases;