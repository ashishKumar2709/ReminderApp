import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";
import reminderRoute from "./routes/reminderRoute.js";
import userRoute from "./routes/userRoute.js";
import jwt from "jsonwebtoken";
const app = express();

app.use(cors());
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(express.json({ limit: "30mb", extended: true }));

app.use("/user", userRoute);
app.use("/reminders", reminderRoute);

const PORT = process.env.PORT || 1337;

mongoose
  .connect(process.env.Connection_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => {
      console.log(
        `Server running on port: ${PORT} \nConnection Status: ${mongoose.connection.readyState}`
      );
    })
  )
  .catch((err) => console.error(err));
