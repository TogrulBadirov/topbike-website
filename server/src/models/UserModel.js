import mongoose from "mongoose"
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    email: { type: String, required:true },
    password:  { type: String, required:true },
    role: { type: String, required:true },
  },
  { timestamps: true }
);

export const Users = mongoose.model('TopBikeUsers', UserSchema);