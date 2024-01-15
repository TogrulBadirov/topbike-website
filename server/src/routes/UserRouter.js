import express from "express";
import { createUser, getAllUsers, loginUser } from "../controllers/UserController.js";
import cloudinary from "../utils/cloudinary.js";
import upload from "../middlewares/multer.js";

export const UserRouter = express.Router()

UserRouter.get('/',getAllUsers )
UserRouter.post('/',createUser )
UserRouter.post('/login',loginUser )
