import express, { Express } from "express";
import dotenv from "dotenv";
const mongoose = require("mongoose");
const router = express.Router();
dotenv.config();
import User from "../models/user";

router.post("/register", (req, res) => {
  console.log(req.body.username);

  //add prior user verification here

  mongoose
    .connect(process.env.CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      const newUser = new User({
        username: req.body.username,
      });
      newUser.save();
    })
    .catch((err: Error) => {
      console.log(err);
    });

  res.send({ message: `yo i'm ${req.body.username}!` });
});

export default router;
