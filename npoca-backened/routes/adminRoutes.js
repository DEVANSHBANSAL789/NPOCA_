import express from "express";
import { adminLoginController } from "../controllers/admin.js";

const router = express.Router();

router.post("/admin-login", adminLoginController);

export default router;
