const errorHandling = (err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    "success": false,
    "error": "Internal Server Error",
    "message": err.message
  });
};

const log = (req, res, next) => {
    console.log(new Date(), req.path);
    next();
}

export { errorHandling, log }