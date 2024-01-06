import cors from "cors";
import express from "express";
import mongoose from "mongoose";

const ConnectionUrl =
  "mongodb+srv://togrul627:hXW1fNLYxz9IQwbP@topbikecluster.xzg3ge7.mongodb.net/";

const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect(ConnectionUrl)
  .then(() => console.log("DB Connected!"))
  .catch((err) => console.log("Error connecting to the database:", err));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

export default app;
