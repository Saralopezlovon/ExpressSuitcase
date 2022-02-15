const Suitcases = require('../models/suitcases')
const Users = require('../models/users')

const createSuitcase = async (req, res) =>{
 try{
    const {name, type, bag} = req.body
    const {userEmail} = req.query

    const user = Users.findOne({email: userEmail})

    const newSuitcase = await Suitcases.create({
        name: name,
        type: type,
        bag: bag,
        id_user: user._id   
    }, "-__v -_id -id_user -id_suitcase");

    res.status(200).json(newSuitcase)

 }catch(err){
    res.status(400).json({'error':err})
 }
};

const findAllSuitcasesByType = async (userEmail, type) => {
        const user = Users.findOne({email: userEmail})

        const suitcases = await Users.find(
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
        const suitcase = await Users.findById(suitcaseId, "-__v -_id -id_user -id_suitcase");
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
            const suitcases = await Users.find({}, "-__v -_id -id_user -id_suitcase");
            res.status(200).json(suitcases)
        }

    }catch(err){
       res.status(400).json({'error':err})
    }
};

const suitcases = {
    createSuitcase,
    findSuitcase
}

module.exports = suitcases