// import * as  db from './DB.js'
const mongoose=require('mongoose');
const db=require('./DB')
const CLIENT_MODEL='Clients'
const dbConnection=db.get()
const Schema = dbConnection.Schema;
const Types = Schema.Types;
const ClientSchema=new dbConnection.Schema({
    id:Types.Number,
    address:{},
    sessionsSubscribed:Types.Number,
    status:Types.String,
    phoneNumber:Types.String,
    firstName:Types.String,
    lastName:Types.String,
    modeOfPayment:Types.String,
    sessionCount:Types.Number

})
ClientSchema.statics.createClient=async function(client){
    console.log("in create",client)
   
    const clientResponse=await this.model(CLIENT_MODEL).create(client)
    console.log("clientResponse",clientResponse)
    return clientResponse
}
ClientSchema.statics.getClients=async function(){
    console.log("in schema")
    const clientList=await this.model(CLIENT_MODEL).find({status:'active'})
    console.log("clientList",clientList)
    return clientList
}
ClientSchema.statics.getFormerClients=async function(){
    console.log("former schema")
    const formerClientsList=await this.model(CLIENT_MODEL).find({status:'former'})
    console.log("clientList",formerClientsList)
    return formerClientsList
}
// export default dbConnection.model(CLIENT_MODEL,ClientSchema)

// module.exports.createClient=createClient,
//  module.exports.ClientSchema={
//      getClients},
module.exports.dbConnectionFUNCTIN=dbConnection.model(CLIENT_MODEL,ClientSchema)
var Client = mongoose.model(CLIENT_MODEL,ClientSchema);
module.exports = Client;
