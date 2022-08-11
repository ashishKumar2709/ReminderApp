import mongoose from "mongoose";

const User = new mongoose.Schema({
  name: { type: String, required: true },
  emailId: { type: String, required: true },
  phonenumber: { type: Number },
  password: { type: String, required: true },
  id: { type: String },
});

const userModel = mongoose.model("userData", User);
export default userModel;
