
import jwt from "jsonwebtoken";
import userModel from "../modules/user/user.model.js";
import AppError from "../utils/AppError.js";

const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw new AppError("Authentication required", 401);
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await userModel.findById(decoded.userId);

    if (!user) {
      throw new AppError("User not found", 401);
    }

    req.user = user;

    next();
  } catch (err) {
    if (err instanceof AppError) {
      return next(err);
    }

    return next(new AppError("Invalid or expired token", 401));
  }
};

export default authMiddleware;
