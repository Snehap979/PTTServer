// import ClientService from '../services/ClientService'
// import TrainerHandler from './TrainerHandler'
const ClientService = require('../services/ClientService');
// import { request,response } from 'express'
//  import {HttpStatusCodes}  from 'src/constants/HttpStatusCodes.js'
const createClient = async (request, response) => {
    try {
      console.log("coming in request",request,request.body)
    //   console.log("request, response",request, response)
      const client = request.body;
       const clientResponse = await ClientService.createClient(client);
    response.status(200).send(clientResponse);
    } catch (error) {
      console.log("eror in create ",error);
      // response.status(HttpStatusCodes.INTERNAL_SERVER_ERROR)
      //     .json({message: error})
    }
  };

  const getClients=async(request,response)=>{
    try{   
        console.log(" in get clients",ClientService)     
        let clients = await ClientService.getClients() 


       
        response.status(200).send(clients);
    } catch(error){
        console.log('error', error);
    }
}
const getFormerClients=async(request,response)=>{
  try{
    console.log("in the get former methos")
let formerClients=await ClientService.getFormerClients()
response.status(200).send(formerClients)
  }
  catch(error)
  {

  }
}

module.exports.createClient=createClient,
module.exports.getClients=getClients,
module.exports.getFormerClients=getFormerClients