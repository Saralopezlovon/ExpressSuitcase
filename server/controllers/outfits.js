const Outfits = require('../models/outfits');
const Suitcases = require('../models/suitcases');

const createOutfit = async (req, res) =>{
 try{
    const {day, top, bottom, lingerie, shoes} = req.body

    const {suitcaseId} = req.query   

    const newOutfit = await Outfits.create({
        day: day,
        top: top,
        bottom: bottom ,
        lingerie: lingerie,
        shoes: shoes,
        id_suitcase: suitcaseId

    });


    const suitcase = await Suitcases.findById(suitcaseId)

    suitcase.id_outfit.push(newOutfit._id)
    await suitcase.save()

    res.status(200).json(newOutfit)

 }catch(err){
    res.status(400).json({'error':err})
 }
};


const outfits = {
    createOutfit

}

module.exports = outfits