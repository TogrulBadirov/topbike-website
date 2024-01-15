import mongoose from "mongoose";
const Schema = mongoose.Schema;

const BicycleSchema = new Schema(
  {
    image: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    discount: { type: Number, required: true, min: 5, max: 95 },
  },
  { timestamps: true }
);

export const Bicycles = mongoose.model('TopBikeBicycles', BicycleSchema);
