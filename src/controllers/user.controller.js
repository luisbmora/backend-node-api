const User = require("../models/user.model");
const Joi = require("joi");

// Validaciones con Joi
const userSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

// Crear usuario
exports.createUser = async (req, res) => {
  try {
    const { error } = userSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const user = new User(req.body);
    await user.save();
    res.status(201).json({ message: "Usuario creado", user });
  } catch (error) {
    res.status(500).json({ error: "Error al crear usuario" });
  }
};

// Obtener todos los usuarios
exports.getUsers = async (req, res) => {
  const users = await User.find().select("-password");
  res.json(users);
};

// Obtener un usuario por ID
exports.getUserById = async (req, res) => {
  const user = await User.findById(req.params.id).select("-password");
  if (!user) return res.status(404).json({ error: "Usuario no encontrado" });
  res.json(user);
};

// Actualizar usuario
exports.updateUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(user);
};

// Eliminar usuario
exports.deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "Usuario eliminado" });
};
