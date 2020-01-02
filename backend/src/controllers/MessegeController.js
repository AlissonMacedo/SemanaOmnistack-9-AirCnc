const Messege = require("../models/Messege");
const Group = require("../models/GroupMessege");

module.exports = {
  async index(req, res) {
    const { user_id_send } = req.headers;

    const groups = await Group.find({
      Group: user_id_send
    });

    console.log(groups);

    const messege = await Messege.find({
      user_sending: user_id_send
    });

    return res.json(messege);
  },

  async store(req, res) {
    const { user_id_send } = req.headers;
    const { user_id } = req.params;
    const { messege_send } = req.body;

    const messege = await Messege.create({
      user_sending: user_id_send,
      user_received: user_id,
      messege: messege_send,
      date: new Date()
    });

    await messege
      .populate("user_sending")
      .populate("user_received")
      .execPopulate();

    return res.json(messege);
  }
};
