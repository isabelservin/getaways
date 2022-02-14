import mongoose from "mongoose"

//create a mongoose schema
const listingsSchema = mongoose.Schema({
    hostName: String,
    address: String,
    price: Number,
    phoneNumber: Number,
    email: String,
    img: String,
    description: String,
    propertyType: String,

})

export default Listings