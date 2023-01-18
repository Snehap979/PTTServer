
const TrainerService = require('../services/TrainerService');

const createTrainer = async (request, response) => {
    try {
      console.log("coming in request",request.body)
   
      const trainer = request.body;
       const trainerResponse = await TrainerService.createTrainer(trainer);
    response.status(200).send(trainerResponse);
    } catch (error) {
      console.log("eror in create ",error);
     
    }
  };
  
const  ifTrainerAlreadyExists=async(request,response)=>{
  try {
    console.log("coming in request",request.params.emailId)
     const trainerResponse = await TrainerService.ifTrainerAlreadyExists(request.params.emailId);
     
      response.status(200).send(trainerResponse);

  } catch (error) {
    console.log("eror in create ",error);
   
  }
}

module.exports.createTrainer=createTrainer
module.exports.ifTrainerAlreadyExists=ifTrainerAlreadyExists