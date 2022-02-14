import mongoose from "mongoose";

//create a mongoose schema
const listingsSchema = mongoose.Schema({
  address: String,
  price: Number,
  img: String,
  description: String,
  propertyType: String,
});

export default Listings;
