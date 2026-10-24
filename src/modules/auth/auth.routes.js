import { Router } from "express";
import {registerController,loginController} from './auth.controller.js'

const router = Router()

// Regiser
router.post("/register", registerController )
// Login 
router.post("/login", loginController)

export default router
