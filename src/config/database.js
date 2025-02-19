const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/api_users');
    console.log('✅ Conexión a MongoDB establecida con éxito');
  } catch (error) {
    console.error('❌ Error al conectar MongoDB:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
