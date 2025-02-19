require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/database");
const swaggerDocs = require("./config/swagger");

const app = express();
const PORT = process.env.PORT || 5000;

// Conectar a MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/users", require("./routes/user.routes"));
app.use("/api/auth", require("./routes/auth.routes"));

// Swagger
swaggerDocs(app);

app.listen(PORT, () => {
  console.log(`🔥 Servidor corriendo en http://localhost:${PORT}`);
});
