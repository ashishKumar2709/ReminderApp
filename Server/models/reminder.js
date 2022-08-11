import mongoose from "mongoose";

const Reminder = new mongoose.Schema({
  title: String,
  message: String,
  sendTime: Date,
  name: String,
  creator: String,
  createdAt: {
    type: Date,
    default: Date().now,
  },
});

const reminderModel = mongoose.model("reminderData", Reminder);
export default reminderModel;
