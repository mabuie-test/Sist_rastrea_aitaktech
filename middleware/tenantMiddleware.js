module.exports = (req, res, next) => {
  // aplica-se após authMiddleware
  req.tenantId = req.user.tenantId;
  next();
};
