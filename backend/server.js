const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");

const taskRoutes = require("./routes/taskRoutes");

const app = express();

app.use(express.json());
app.use(cors());

mongoose.set("strictQuery", false);

mongoose.connect(process.env.MONGO_URI, {
    serverSelectionTimeoutMS: 5000
})
.then(() => {
    console.log("MongoDB Connected");
})
.catch((err) => {
    console.error("MongoDB Error:");
    console.error(err);
});

app.use("/api/auth", authRoutes);

app.use("/api/tasks", taskRoutes);

app.get("/", (req, res) => {
    res.send("API Running");
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});