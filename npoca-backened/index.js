import express from "express";
import connectDB from "./config/db_config.js";
import dotenv from "dotenv";
import registerRoutes from "./routes/registerRoutes.js";
import contentRoutes from "./routes/contentRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import bannerRoutes from "./routes/bannersRoutes.js";

// import authRoutes from "./routes/authRoutes.js";

import cors from "cors";
import compression from "compression";

// Configure dotenv
dotenv.config();

const app = express();

// Middleware setup
app.use(cors());
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());

// Connecting to database
connectDB();

// Basic route
app.get("/", (req, res) => {
  res.send("Hello");
});

// Define routes
app.use("/content", contentRoutes);
app.use("/register", registerRoutes);
app.use("/event", eventRoutes);
app.use("/admin", adminRoutes);
app.use("/banner", bannerRoutes);

// Start server
const port = process.env.PORT || 7070;
app.listen(port, () => console.log(`Server running on port ${port}`));
