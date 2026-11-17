const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/jwt");

const authMiddleware = (req, res, next) => {
  const token = req.cookies.jwt;
  
  if (!token) {
    return res.status(401).json({ message: "Not authorized, no token" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    console.error("JWT verification failed:", error);
    res.status(401).json({ message: "Not authorized, token failed" });
  }
};

module.exports = authMiddleware;
