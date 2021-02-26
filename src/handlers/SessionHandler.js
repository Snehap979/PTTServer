const SessionService=require('../services/SessionService')
const createSession=async(request,response)=>{
    try{   
    
        console.log("coming in session handler",request.body)
        let session = await SessionService.createSession(request.body)
        response.status(200).send(session);
    } catch(error){
        console.log('error', error);
    }

}

module.exports.createSession=createSession
