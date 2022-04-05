import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import route from "./routes/index.js";

const app = express();

mongoose.connect("mongodb://0.0.0.0:27017/fullstack_db");

const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("database connected"));

app.use(cors());
app.use(express.json());
app.use("/product", route);

const PORT = 4000;
app.use(cors());
app.get("/", (req, res) => {
  res.send("hallo");
});

app.listen(PORT, () => {
  console.log("Connect to port 4000");
});
