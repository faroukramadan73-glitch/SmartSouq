
import AppError from "../utils/AppError.js";

const checkOwnership = (req, res, next) => {
  
  if (req.user.role === "admin") {
    return next();
  }

  if (req.user._id.toString() !== req.params.id) {
    return next(new AppError("You can only access your own account", 403));
  }

  next();
};

export default checkOwnership;
