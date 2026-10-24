
import Router from "express";


import {
  getUserByIdController,
  updateUserController,
  deleteUserController,
  getAllUsersController,
} from "./user.controller.js";

const router = Router();

router.get("/", getAllUsersController);
router.get("/:id", getUserByIdController);
router.put("/:id", updateUserController);
router.delete("/:id", deleteUserController);

export default router;
