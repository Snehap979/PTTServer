// import * as  db from './DB.js'
const mongoose=require('mongoose');
const db=require('./DB')
const SESSION_MODEL='Sessions'
const dbConnection=db.get()
console.log("dbConnection",dbConnection)
const Schema = dbConnection.Schema;
const Types = Schema.Types;
const SessionSchema=new dbConnection.Schema({
    id:Types.Number,
    clientId:Types.ObjectId,
      price:Types.String,
      date:Types.String,
      description:Types.String,
      isPresent:Types.String,
      count:Types.Number
})
SessionSchema.statics.createSession=async function(session){
    console.log("in create schema",session)
    const sessionResponse=await this.model(SESSION_MODEL).create(session)
    console.log("sessionResponse",sessionResponse)
    return sessionResponse
}
SessionSchema.statics.getSessions=async function(clientId){
    const session=await this.model(SESSION_MODEL).find({clientId:clientId}).sort({_id: -1}).limit(1);
    console.log("session",session)
    return session
}
SessionSchema.statics.getSessionsFromSessionId=async function(sessionId){
    const session=await this.model(SESSION_MODEL).find({_id:sessionId})
    console.log("session",session)
    return session
}
// export default dbConnection.model(CLIENT_MODEL,ClientSchema)

// module.exports.createClient=createClient,
//  module.exports.ClientSchema={
//      getClients},
module.exports.dbConnectionFUNCTIN=dbConnection.model(SESSION_MODEL,SessionSchema)
var Session = mongoose.model(SESSION_MODEL,SessionSchema);
module.exports = Session;
