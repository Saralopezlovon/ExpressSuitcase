const Suitcases = require('../models/suitcases')
const Users = require('../models/users')

const createSuitcase = async (req, res) =>{
    const {name, type, bag} = req.body
    const {userEmail} = req.query
    let errors = []
    try{

        if(!name || !type) {
            errors.push('El nombre y el tipo no pueden estar vacios')
        }
        if(!userEmail){
            errors.push('No existe usuario')
        }

        if(errors.length > 0) {
            res.status(400).json({'errors':errors})
        }
        else {

            const user = await Users.findOne({email: userEmail})
    
            const newSuitcase = await Suitcases.create({
                name: name,
                type: type,
                bag: bag,
                id_user: user._id   
            });
    
            user.id_suitcase.push(newSuitcase._id)
            await user.save()
    
            res.status(200).json(newSuitcase)
        }

    }catch(err){
        res.status(400).json({'error':err})
    }
};

const findAllSuitcasesByType = async (userEmail, type) => {
    const user = Users.findOne({email: userEmail})

    const suitcases = await Suitcases.find(
        {
        $and: [
            {type: type},
            {id_user: user._id}
        ]
        }, 
        "-__v -_id -id_user -id_suitcase"
    );
    return suitcases
};

const findSuitcaseById = async (suitcaseId) =>{
        const suitcase = await Suitcases.findById(suitcaseId, "-__v -_id -id_user -id_suitcase").populate('id_outfit', '-_id -__v');
        return suitcase
};

const findSuitcase = async (req, res) =>{
    const {suitcaseId, userEmail, type} = req.query
    try{

        if(userEmail && type) {
            const suitcases = await findAllSuitcasesByType(userEmail, type)
            res.status(200).json(suitcases)

        } else if(suitcaseId) {
            const suitcase = await findSuitcaseById(suitcaseId)
            res.status(200).json(suitcase)

        } else {
            const suitcases = await Suitcases.find({}, "-__v -_id -id_user -id_suitcase");
            res.status(200).json(suitcases)
        }

    }catch(err){
       res.status(400).json({'error':err})
    }
};

const updateSuitcase = async (req, res) =>{
    const {suitcaseId} = req.query
    const {name, bag} =req.body
    let errors = []
    try{

        if(!name) {
            errors.push('El nombre no pueden estar vacio')
        }
        if(!suitcaseId){
            errors.push('No existe maleta')
        }

        if(errors.length > 0) {
            res.status(400).json({'errors':errors})
        }
        else {
            const suitcase = await Suitcases.findById(suitcaseId);
    
            suitcase.name = name;
            suitcase.bag = bag;
    
            await suitcase.save()
            res.status(200).json(suitcase)
        }

    }catch(err){
       res.status(400).json({'error':err})
    }
};

const deleteSuitcase = async (req, res) =>{
    const {suitcaseId} = req.query
    let errors = []
    try{

        if(!suitcaseId){
            errors.push('No existe maleta')
        }

        if(errors.length > 0) {
            res.status(400).json({'errors':errors})
        }
        else {

            const suitcase = await Suitcases.findById(suitcaseId);
            await suitcase.remove()
            res.status(200).json({msg: 'maleta eliminada'})
        }
    }catch(err){
       res.status(400).json({'error':err})
    }
};

const suitcases = {
    createSuitcase,
    findSuitcase,
    updateSuitcase,
    deleteSuitcase
}

module.exports = suitcases