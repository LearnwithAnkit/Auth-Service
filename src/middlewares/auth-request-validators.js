const validateUserAuth = (req, res, next) => {
  if (!req.body.email || req.body.password)
    return res.status(400).json({
      data: {},
      success: false,
      message: "Somthing Went wrong",
      err: "Email or password missing in the Auth request",
    });
  next();
};
module.exports = { validateUserAuth };
