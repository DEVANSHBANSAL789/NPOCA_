import Admin from "../models/adminModel.js";
import CryptoJS from "crypto-js";
import { senderError } from "../utils/helper.js";

// Login controller using CryptoJS for password comparison
export const adminLoginController = async (req, res) => {
  try {
    const { id, password } = req.body;
    if (!id.trim() || !password.trim()) {
      return senderError(res, "Admin ID or password is missing");
    }
    const admin = await Admin.findOne({ id });
    if (!admin) {
      return senderError(res, "Admin not found");
    }
    // Hash the provided password and compare it with the stored hashed password
    const hashedPassword = CryptoJS.SHA256(password).toString(
      CryptoJS.enc.Base64
    );
    const isMatched = hashedPassword === admin.password;
    if (!isMatched) {
      return senderError(res, "Incorrect admin ID or password");
    }
    res.json({
      success: true,
      message: "Admin logged in successfully",
      admin: {
        id: admin.id,
        _id: admin._id,
      },
    });
  } catch (error) {
    console.error("Error logging in as admin:", error);
    return res.status(500).send({
      success: false,
      message: "Error logging in",
      error: error.message,
    });
  }
};
