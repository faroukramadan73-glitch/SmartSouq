
import {
  getUserById,
  updateUser,
  deleteUser,
  getAllUsers,
} from "./user.service.js";

import sendSuccess from "../../utils/response.js";

export const getUserByIdController = async (req, res, next) => {
  try {
    const user = await getUserById(req.params.id);

    return sendSuccess(res, 200, user, "User retrieved successfully");
  } catch (err) {
    next(err);
  }
};

export const updateUserController = async (req, res, next) => {
  try {
    const user = await updateUser(req.params.id, req.body);

    return sendSuccess(res, 200, user, "User updated successfully");
  } catch (err) {
    next(err);
  }
};

export const deleteUserController = async (req, res, next) => {
  try {
    const result = await deleteUser(req.params.id);

    return sendSuccess(res, 200, result, "User deleted successfully");
  } catch (err) {
    next(err);
  }
};

export const getAllUsersController = async (req, res, next) => {
  try {
    const users = await getAllUsers();

    return sendSuccess(res, 200, users, "Users retrieved successfully");
  } catch (err) {
    next(err);
  }
};
