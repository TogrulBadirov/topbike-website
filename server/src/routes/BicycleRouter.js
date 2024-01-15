import express from "express";
import { createUser, getAllUsers, loginUser } from "../controllers/UserController.js";
import cloudinary from "../utils/cloudinary.js";
import upload from "../middlewares/multer.js";
import { createBicycle, deleteBicycle, getAllBicycles, getBicycleById } from "../controllers/BicycleController.js";

export const BicycleRouter = express.Router()

BicycleRouter.get('/',getAllBicycles )
BicycleRouter.get('/:id',getBicycleById )
BicycleRouter.post('/',upload.single('image'),createBicycle )
BicycleRouter.delete('/:id',deleteBicycle )

BicycleRouter.post('/upload', upload.single('image'), function (req, res) {
    cloudinary.uploader.upload(req.file.path, function (err, result){
      if(err) {
        console.log(err);
        return res.status(500).json({
          success: false,
          message: "Error"
        })
      }
  
      res.status(200).json({
        success: true,
        message:"Uploaded!",
        data: result
      })
    })
  });