
const EventService = require('../services/EventService');
const createEvent=async(request,response)=>{

try{
    console.log("in create events",request.body)
        const event=request.body
        const eventResponse = await EventService.createEvent(event);
        response.status(200).send(eventResponse);
        } catch (error) {
          console.log("eror in create ",error);
        }


}

const getEvents=async(request,response)=>{
        try{   
          
            let events = await EventService.getEvents() 
            response.status(200).send(events);
        } catch(error){
            console.log('error', error);
        }
    }

    const deleteEvents=async(request,response)=>{
        try{   
          console.log("in delete Events",request.body)
            let event = await EventService.deleteEvent(request.body) 
            console.log("response",response)
            response.status(200).send(event);
        } catch(error){
            console.log('error', error);
        }
    }
    module.exports.createEvent=createEvent,
    module.exports.getEvents=getEvents,
    module.exports.deleteEvents=deleteEvents