const errorHandling = async (err, req, res, next) => {
  switch (err.name) {
    default:
      res.status(500).json({
        message: "Internal Server Error",
        err,
      });
      break;
  }
};
module.exports = errorHandling;
