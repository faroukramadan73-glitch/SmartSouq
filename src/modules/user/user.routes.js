
import Router from "express";
import authMiddleware from "../../middelware/auth.middelware.js";
import roleMiddleware from "../../middelware/role.middelware.js";
import checkOwnership from "../../middelware/checkOwnership.middleware.js";


import {
  getUserByIdController,
  updateUserController,
  deleteUserController,
  getAllUsersController,
} from "./user.controller.js";

const router = Router();

router.get("/", authMiddleware,roleMiddleware("admin"),
checkOwnership,getAllUsersController);
router.get("/:id", authMiddleware,roleMiddleware("admin","customer"),
checkOwnership,getUserByIdController);
router.put("/:id", authMiddleware,roleMiddleware("admin","customer"),
checkOwnership,updateUserController);
router.delete("/:id", authMiddleware,roleMiddleware("admin","customer"),
checkOwnership,deleteUserController);

export default router;
