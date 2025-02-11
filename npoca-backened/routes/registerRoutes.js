import express from "express";
import {
  addLinkController,
  updateLinkController,
  deleteLinkController,
  getAllLinksController,
} from "../controllers/register.js";

const router = express.Router();

router.post("/link", addLinkController); // Add content
router.patch("/link/:id", updateLinkController); // Update content
router.delete("/link/:id", deleteLinkController); // Delete content
router.get("/links", getAllLinksController); // Fetch all content

export default router;
