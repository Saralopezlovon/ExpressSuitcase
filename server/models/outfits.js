const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const objectSchema = {
    day: {type:String},
    top: {type: String},
    bottom: {type: String},
    lingerie: {type: String},
    shoes: {type: String},
    id_suitcase: {type: mongoose.Schema.ObjectId, ref: "Suitcase"}
};

const outfitsSchema = mongoose.Schema(objectSchema);

outfitsSchema.plugin(AutoIncrement, {inc_field: 'id_outfit'});

const Outfits = mongoose.model('Outfits', outfitsSchema);

module.exports = Outfits;