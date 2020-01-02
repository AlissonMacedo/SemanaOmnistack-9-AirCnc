const mongoose = require("mongoose");

const MessegeSchema = new mongoose.Schema({
  date: String,
  messege: String,

  user_sending: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  user_received: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

module.exports = mongoose.model("Messege", MessegeSchema);
