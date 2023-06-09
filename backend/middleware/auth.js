const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
  const { token } = req.cookies;
  // console.log(token);
  if (!token) {
    return next(new ErrorHandler("Please login  to access this resource"));
  }
  const decodedData = jwt.verify(token, process.env.JWT_SECRET);
  req.user = await User.findById(decodedData.id);

  next();
});

exports.authorizeRoles = (...roles) => {
  return async (req, res, next) => {
    // if (!req.user) {
    //   return next(new ErrorHandler("Please login to access this resource", 401));
    // }

    const user = await User.findById(req.user.id);
    console.log(req.user.role);
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHandler(
          `Role: ${req.user.role} is not allowed to use this resource`,
          403
        )
      );
    }
    next();
  };
};
