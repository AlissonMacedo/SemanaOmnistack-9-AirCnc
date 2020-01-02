const mongoose = require("mongoose");

const GroupSchema = new mongoose.Schema({
  Group: [String]
});

module.exports = mongoose.model("Group", GroupSchema);
