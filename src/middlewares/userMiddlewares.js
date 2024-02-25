const jwt = require("jsonwebtoken");
require("dotenv").config();
const tajna = process.env.SECRET;
function verifyToken(req, res, next) {
  const token = req.headers.authorization.split(" ");

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. Token not provided." });
  }

  jwt.verify(token[1], tajna, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid or expired token." });
    }

    req.userId = decoded._id;
    next();
  });
}

module.exports = {
  verifyToken,
};
