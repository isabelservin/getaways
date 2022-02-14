import mongoose from "mongoose";

//create a mongoose schema
const usersSchema = mongoose.Schema({
  user: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
  email: { type: String, required: true },
  listings: { type: [String], required: false },
  rentals: { type: [String], required: false },
});

export default Users;
