const errorHandling = async (err, req, res, next) => {
  console.log("ERRORHANDLINGGGGGG", err);
  switch (err.name) {
    case "SequelizeValidationError":
      const sequelizeError = err.errors.map((el) => el.message);
      res.status(400).json({
        statusCode: 400,
        message: sequelizeError,
      });
      break;
    case "SequelizeUniqueConstraintError":
      res.status(400).json({
        message: err.errors[0].message,
      });
      break;
    case "loginError":
      res.status(401).json({
        message: "Invalid email or password",
      });
      break;
    case "AuthenticationError":
      res.status(401).json({
        message: "AuthenticationError"
      })
      break;
    case "JsonWebTokenError":
      res.status(401).json({
        message: "Invalid token"
      })
      break;
    case "Product Not Found":
      res.status(404).json({
        message: "Product not found",
      });
      break;
    case "Venue Not Found":
      res.status(404).json({
        message: "Venue Not Found",
      });
      break;
    case "Cathering Not Found":
      res.status(404).json({
        message: "Cathering Not Found",
      });
      break;
    case "Photography Not Found":
      res.status(404).json({
        message: "Photography Not Found",
      });
      break;
    case "Cart Not Found":
      res.status(404).json({
        message: "Cart Not Found",
      });
      break;
    case "Transaction Not Found":
      res.status(404).json({
        message: "Transaction Not Found",
      });
      break;
    case "User Not Found":
      res.status(404).json({
        message: "User Not Found",
      });
      break;
    default:
      res.status(500).json({
        message: "Internal Server Error",
      });
      break;
  }
};

module.exports = errorHandling;
