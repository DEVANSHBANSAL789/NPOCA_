import express from "express";
import {
  addContentController,
  updateContentController,
  deleteContentController,
  getAllContentController,
} from "../controllers/youtube.js";

const router = express.Router();

router.post("/add", addContentController); // Add content
router.patch("/update/:id", updateContentController); // Update content
router.delete("/delete/:id", deleteContentController); // Delete content
router.get("/all", getAllContentController); // Fetch all content

export default router;
