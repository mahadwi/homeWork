const logger = (req, res, next) => {
  console.log(`[${new Date().toUTCString()}] ${req.method} ${req.url}`);
  next();
};

export default logger;