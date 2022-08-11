import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.js";

export const loginUser = async (req, res) => {
  const { emailId, password } = await req.body;
  console.log(req.body);
  try {
    const existingUser = await User.findOne({ emailId });
    console.log(existingUser);

    if (!existingUser) {
      return res.status(400).json("User ID does not exist!");
    }
    const isPasswordValid = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (isPasswordValid) {
      const token = jwt.sign(
        { emailId: existingUser.emailId, id: existingUser._id },
        "testSecKey",
        { expiresIn: "1h" }
      );
      return res
        .status(200)
        .json({ message: "login successful", result: existingUser, token });
    } else {
      return res.status(400).json("Incorrect Password");
    }
  } catch (error) {
    res.status(500).json("Something went wrong.");
  }
};

export const registerUser = async (req, res) => {
  const {
    firstName,
    lastName,
    emailId,
    phoneNumber,
    password,
    confirmPassword,
  } = await req.body;
  console.log(req.body);
  try {
    const existingUser = await User.findOne({ emailId });
    if (existingUser) {
      return res.status(400).json("User already exists");
    }
    if (password !== confirmPassword) {
      return res.status(400).json("Passwords don't match");
    }
    const hashedPassword = await bcrypt.hash(password, 11);
    const result = await User.create({
      name: `${firstName} ${lastName}`,
      emailId: emailId,
      phonenumber: phoneNumber,
      password: hashedPassword,
    });
    const token = jwt.sign(
      { emailId: result.emailId, id: result._id },
      "testSecKey",
      { expiresIn: "1h" }
    );
    console.log(token);
    res.status(200).json({ message: "user registered", result, token });
  } catch (error) {
    res.status(500).json("Something went wrong.");
  }
};
