import { IncomingForm } from "formidable";
import { createReadStream, rmSync } from "fs";
import { uploadFileToDrive } from "../middleware/fileUploader.js";
import Banner from "../models/bannerModel.js"; // Import the Banner model

// Upload Banner
// Upload Banner
export const uploadBanner = async (req, res) => {
  try {
    const form = new IncomingForm();
    form.parse(req, async (err, fields, files) => {
      if (err) {
        return res
          .status(500)
          .json({ success: false, message: "File parsing failed", error: err });
      }

      const file = Array.isArray(files.file) ? files.file[0] : files.file;
      if (!file) {
        return res
          .status(400)
          .json({ success: false, message: "No file uploaded" });
      }

      try {
        const fileStream = createReadStream(file.filepath);
        const mimeType = file.mimetype;
        const originalFileName = file.originalFilename;

        // Upload to Google Drive
        const webViewLink = await uploadFileToDrive(
          fileStream,
          originalFileName,
          mimeType
        );

        // Ensure 'link' is a string (in case it's an array)
        const link = Array.isArray(fields.link) ? fields.link[0] : fields.link;

        const banner = new Banner({ imageUrl: webViewLink, link });
        await banner.save();

        rmSync(file.filepath); // Remove temp file
        res.status(200).json({
          success: true,
          message: "Banner uploaded successfully",
          imageUrl: webViewLink,
        });
      } catch (error) {
        console.error("Error uploading banner:", error);
        res.status(500).json({
          success: false,
          message: "Banner upload failed",
          error: error.message,
        });
      }
    });
  } catch (error) {
    console.error("Unexpected error:", error);
    res.status(500).json({
      success: false,
      message: "Unexpected error occurred",
      error: error.message,
    });
  }
};

// Update Banner
export const updateBanner = async (req, res) => {
  try {
    const { id } = req.params;
    const banner = await Banner.findById(id);
    if (!banner) {
      return res
        .status(404)
        .json({ success: false, message: "Banner not found" });
    }

    const form = new IncomingForm();
    form.parse(req, async (err, fields, files) => {
      if (err) {
        return res
          .status(500)
          .json({ success: false, message: "File parsing failed", error: err });
      }

      const file = Array.isArray(files.file) ? files.file[0] : files.file;
      if (!file) {
        return res
          .status(400)
          .json({ success: false, message: "No file uploaded" });
      }

      try {
        const fileStream = createReadStream(file.filepath);
        const mimeType = file.mimetype;
        const originalFileName = file.originalFilename;

        // Upload new file to Google Drive
        const newWebViewLink = await uploadFileToDrive(
          fileStream,
          originalFileName,
          mimeType
        );
        rmSync(file.filepath); // Remove temp file

        // Ensure 'link' is a string (in case it's an array)
        const link = Array.isArray(fields.link) ? fields.link[0] : fields.link;

        // Update banner
        banner.imageUrl = newWebViewLink;
        banner.link = link;
        await banner.save();

        res.status(200).json({
          success: true,
          message: "Banner updated successfully",
          imageUrl: newWebViewLink,
        });
      } catch (error) {
        console.error("Error updating banner:", error);
        res.status(500).json({
          success: false,
          message: "Banner update failed",
          error: error.message,
        });
      }
    });
  } catch (error) {
    console.error("Unexpected error:", error);
    res.status(500).json({
      success: false,
      message: "Unexpected error occurred",
      error: error.message,
    });
  }
};

// Delete Banner
export const deleteBanner = async (req, res) => {
  try {
    const { id } = req.params;
    const banner = await Banner.findById(id);
    if (!banner) {
      return res
        .status(404)
        .json({ success: false, message: "Banner not found" });
    }

    try {
      // Optionally, delete the file from Google Drive if needed
      // await deleteFileFromDrive(banner.fileId);

      await Banner.findByIdAndDelete(id); // Delete from DB
      res
        .status(200)
        .json({ success: true, message: "Banner deleted successfully" });
    } catch (error) {
      console.error("Error deleting banner:", error);
      res.status(500).json({
        success: false,
        message: "Banner deletion failed",
        error: error.message,
      });
    }
  } catch (error) {
    console.error("Unexpected error:", error);
    res.status(500).json({
      success: false,
      message: "Unexpected error occurred",
      error: error.message,
    });
  }
};

// Get All Banners
export const getAllBanners = async (req, res) => {
  try {
    const banners = await Banner.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, banners });
  } catch (error) {
    console.error("Error fetching banners:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch banners",
      error: error.message,
    });
  }
};
