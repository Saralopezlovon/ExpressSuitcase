const mongoose = require('mongoose');

const objectSchema = {
    id_suitcase: {type: Number},
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
    id_user: {type: mongoose.Schema.ObjectId, ref: "User"}
};

const suitcasesSchema = mongoose.Schema(objectSchema);

const Suitcases = mongoose.model('Suitcases', suitcasesSchema);

module.exports = Suitcases;