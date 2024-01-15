import { Users } from "../models/UserModel.js"
import jwt from "jsonwebtoken"


export const getAllUsers = async (req, res) => {
    const allUsers = await Users.find({})
    res.send(allUsers)
  }

  export const createUser = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      const existingUser = await Users.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ success: false, message: 'Email already exists!' });
      }
  
      const newUser = new Users({
        email,
        password,
        role:"user"
      });
  
      await newUser.save();
      
      var token = jwt.sign({ userId: newUser._id, role: newUser.role, email:newUser.email }, "privateKey");

      res.status(200).json({ success: true, message: 'Registration Successful!', token });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: 'Server error' });
    }
  };
  

  export const loginUser = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      const user = await Users.findOne({ email });
  
      if (!user || !user.password === password ) {
        return res.status(401).json({ success: false, message: 'Invalid email or password' });
      }
  
      const token = jwt.sign({ userId: user._id, role: user.role, email: user.email }, "privateKey");
  
      res.status(200).json({ success: true, message: 'Login successful!', token });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: 'Server error' });
    }
  };