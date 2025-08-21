const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

const mainRoute = require("./routes");

const PORT = 5000;
const MONGO_URL ="mongodb+srv://meryem:1915@cluster0.huzwcc5.mongodb.net/MernStack"


const connect = async() =>{
    try {
        await mongoose.connect(MONGO_URL);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}
app.use(express.json());
app.use(cors());
app.use("/api",mainRoute)

app.get("/", (req, res) => {
  res.send("Localhost => server get");
});

app.listen(PORT, () => {
    connect();
  console.log(`Server is running on ${PORT}`);
});