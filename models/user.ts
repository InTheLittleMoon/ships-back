const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  credits: {
    type: Number,
    required: true,
    default: 0,
  },
  shipsOwned: {
    type: Number,
    required: true,
    default: 0,
  },
  // userAPIKey: {
  //   type: String,
  //   required: true,
  //   unique: true,
  // },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", userSchema);
export default User;
