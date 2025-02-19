require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("../models/user.model");
const connectDB = require("../config/database");

const seedUsers = async () => {
  try {
    // Conectar a la base de datos
    await connectDB();

    // Eliminar todos los usuarios previos (opcional)
    await User.deleteMany();
    console.log("🗑 Usuarios eliminados");

    // Crear usuarios de prueba
    const users = [
      {
        name: "Admin User",
        email: "admin@example.com",
        password: await bcrypt.hash("admin123", 10),
      },
      {
        name: "Test User",
        email: "test@example.com",
        password: await bcrypt.hash("test1234", 10),
      },
      {
        name: "Luis Barajas Mora",
        email: "luismora@example.com",
        password: await bcrypt.hash("luis123", 10),
      },
    ];

    // Insertar usuarios en la base de datos
    await User.insertMany(users);
    console.log("✅ Usuarios creados correctamente");

    // Cerrar conexión
    mongoose.connection.close();
    console.log("🔌 Conexión cerrada");
  } catch (error) {
    console.error("❌ Error al poblar la base de datos:", error);
    mongoose.connection.close();
  }
};

// Ejecutar el seeder solo si se llama directamente
if (require.main === module) {
  seedUsers();
}

module.exports = seedUsers;
