
const createTrainer = async(user) => {
    try{    
        console.log("user",user) 
         
        let trainerResponse = await require('../schema/UserSchema').createUser(user)
        console.log("trainerResponse",trainerResponse)
        return trainerResponse
    } catch(error){
        console.log('error', error);
    }
}


module.exports.createTrainer=createTrainer
