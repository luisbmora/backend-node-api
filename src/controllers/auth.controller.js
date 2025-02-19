const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../config/jwt");

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ error: "Credenciales incorrectas" });
  }

  const token = generateToken(user._id);
  res.json({ token });
};
