const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET || "secretkey";

const signToken = (payload) => {
  return jwt.sign(payload, JWT_SECRET);
};

const verifyToken = (token) => {
  console.log(token, "DISINI");
  return jwt.verify(token, JWT_SECRET);
};
module.exports = { signToken, verifyToken };
