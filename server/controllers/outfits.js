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

const updateOutfit = async (req, res) =>{
    try{
       const {top, bottom, lingerie, shoes} = req.body
       const {outfitId} = req.query   
   
       const outfit = await Outfits.findById(outfitId);
        
       outfit.top = top;
       outfit.bottom = bottom;
       outfit.lingerie = lingerie;
       outfit.shoes = shoes;

       await outfit.save()
   
       res.status(200).json(newOutfit)
   
    }catch(err){
       res.status(400).json({'error':err})
    }
};

const deleteAllOutfitsBySuitecase = async (req, res) =>{
    try{
       const {suitcaseId} = req.query   
   
       const outfits = await Outfits.deleteMany({ id_suitcase: suitcaseId });
       res.status(200).json({msg: 'borrados', outfits})
   
    }catch(err){
       res.status(400).json({'error':err})
    }
};


const outfits = {
    createOutfit,
    updateOutfit,
    deleteAllOutfitsBySuitecase
}

module.exports = outfits