import AppError from "../utils/AppError.js";

const roleMiddleware = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user) {
      return next(
        new AppError("Authentication required", 401)
      );
    }

    if (!allowedRoles.includes(req.user.role)) {
      return next(
        new AppError("You do not have permission", 403)
      );
    }

    next();
  };
};

export default roleMiddleware;