import mongoose from "mongoose";
import Reminder from "../models/reminder.js";

export const createReminder = async (req, res) => {
  console.log(req.body, req.userId);
  const reminderData = await req.body;
  const newReminder = new Reminder({
    ...reminderData,
    name: reminderData.userName,
    creator: req.userId,
    createdAt: new Date(),
  });
  try {
    await newReminder.save();
    res.status(201).json(newReminder);
    console.log(newReminder);
  } catch (error) {
    res.status(409).json(error);
  }
};

export const fetchReminders = async (req, res) => {
  try {
    const reminderData = await Reminder.find();
    res.status(200).json(reminderData);
  } catch (error) {
    res.status(404).json(error);
  }
};
export const updateReminder = async (req, res) => {
  const _id = await req.params.id;
  const newReminderData = await req.body;
  console.log(req.params, req.body);

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    res.status(404).json("invalid request");
  }
  const updatedReminder = await Reminder.findByIdAndUpdate(
    _id,
    { ...newReminderData, _id },
    { new: true }
  );
  console.log(updatedReminder);
  res.json(updatedReminder);
};

export const deleteReminder = async (req, res) => {
  const { id } = req.params;
  console.log(req.params);
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json("invalid request");
  }
  await Reminder.findByIdAndDelete(id);
  res.json({ message: "Reminder deleted" });
};
