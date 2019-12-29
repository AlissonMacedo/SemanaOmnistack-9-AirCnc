const User = require("../models/Users");

module.exports = {
  async store(req, res) {
    const { email } = req.body;

    let user = await User.findOne({ email: email });

    if (user) {
      return res.json({ messege: "Usuário já existe!" });
    }

    user = await User.create({ email });

    return res.json(user);
  }
};
