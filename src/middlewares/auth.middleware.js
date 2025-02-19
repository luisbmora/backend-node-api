const { verifyToken } = require("../config/jwt");

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ error: "Acceso denegado. Token no proporcionado." });
  }

  const tokenWithoutBearer = token.replace("Bearer ", "");
  const decoded = verifyToken(tokenWithoutBearer);

  if (!decoded) {
    return res.status(401).json({ error: "Token inválido o expirado." });
  }

  req.user = decoded; // Agregar el usuario al request
  next();
};

module.exports = authMiddleware;
