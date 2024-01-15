import { Bicycles } from "../models/BicycleModel.js";
import cloudinary from "../utils/cloudinary.js";
import upload from "../middlewares/multer.js";

export const getAllBicycles = async (req, res) => {
  try {
    const bicycles = await Bicycles.find({});
    res.status(200).send(bicycles);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: "Server error" });
  }
};

export const getBicycleById = async (req, res) => {
  const { id } = req.params;
  try {
    const bicycle = await Bicycles.findById(id);
    if (!bicycle) {
      return res.status(404).json({ error: "Bicycle not found" });
    }
    res.status(200).send(bicycle);
  } catch (error) {
    console.error("Error", error.message);
    res.status(500).json({ error: "Server error" });
  }
};

export const createBicycle = async (req, res) => {
  try {
    const cloudinaryUpload = await cloudinary.uploader.upload(req.file.path, {
      resource_type: "auto",
    });
    const newBicycle = new Bicycles({
      image: cloudinaryUpload.secure_url,
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      discount: req.body.discount,
    });
    await newBicycle.save();
    res.status(201).send("New Bicycle Created!");
  } catch (error) {
    console.error("Error", error.message);
    res.status(500).json({ error: "Server error" });
  }
};

export const deleteBicycle = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedBicycle = await Bicycles.findByIdAndDelete(id);
    if (!deletedBicycle) {
      return res.status(404).send({ message: "Bicycle not found" });
    }
    res.status(200).send("Bicycle Deleted!");
  } catch (error) {
    console.error("Error ", error.message);
    res.status(500).json({ error: "Server error" });
  }
};
