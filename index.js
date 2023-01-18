const express=require('express')
var http = require('http');
const routes=express()
const port=process.env.PORT||7000
const bodyParser=require('body-parser')
const cors=require('cors')
routes.use(bodyParser.json());
routes.use(bodyParser.urlencoded({extended: false}));
routes.use(cors());
const ClientHandler=require('./src/handlers/ClientHandler.js')
const EventHandler=require('./src/handlers/EventHandler.js')
const SessionHandler=require('./src/handlers/SessionHandler')
const TrainerHandler=require('./src/handlers/TrainerHandler')
routes.post('/clients',(req,res)=>ClientHandler.createClient(req,res))
routes.get('/clients',(req,res)=>ClientHandler.getClients(req,res))
routes.listen(port,()=>{
    console.log("served started at the port")
})
routes.post('/events',(req,res)=>EventHandler.createEvent(req,res))
routes.get('/events',(req,res)=>EventHandler.getEvents(req,res))
routes.put('/events',(req,res)=>EventHandler.deleteEvents(req,res))
routes.get('/clients/former',(req,res)=>ClientHandler.getFormerClients(req,res))
routes.post('/sessions',(req,res)=>SessionHandler.createSession(req,res)),
routes.post('/trainers',(req,res)=>TrainerHandler.createTrainer(req,res))
routes.get('/trainers/emailId/:emailId',(req,res)=>TrainerHandler.ifTrainerAlreadyExists(req,res))