import express from "express"

//create anoter router that handles all calls to /api/v1/listings
const listingsRouter = new express.Router()

//CRUD handlers go here 
listingsRouter.get("/", (req, res) => {

})


export default listingsRouter