import express from "express";
import {
  uploadBanner,
  getAllBanners,
  updateBanner,
  deleteBanner,
} from "../controllers/banner.js";

const router = express.Router();

// Route to upload banner using Formidable
router.post("/upload", uploadBanner);

// Route to get all banners
router.get("/", getAllBanners);
router.patch("/update/:id", updateBanner);
router.delete("/delete/:id", deleteBanner);

export default router;
