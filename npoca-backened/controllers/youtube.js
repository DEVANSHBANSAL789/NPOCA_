import Content from "../models/contentModel.js"; // Import your content model
import { senderError } from "../utils/helper.js";

// Add Content Controller
export const addContentController = async (req, res) => {
  try {
    const { link, heading, para } = req.body;

    const newContent = new Content({ link, heading, para });
    await newContent.save();

    res.status(201).json({
      success: true,
      message: "Content added successfully.",
      data: newContent,
    });
  } catch (error) {
    console.error("Error adding content:", error);
    senderError(res, "Error adding content", 500);
  }
};

// Update Content Controller
export const updateContentController = async (req, res) => {
  try {
    const { id } = req.params;
    const { link, heading, para } = req.body;

    const updatedContent = await Content.findByIdAndUpdate(
      id,
      { link, heading, para },
      { new: true }
    );

    if (!updatedContent) {
      return senderError(res, "Content not found", 404);
    }

    res.status(200).json({
      success: true,
      message: "Content updated successfully.",
      data: updatedContent,
    });
  } catch (error) {
    console.error("Error updating content:", error);
    senderError(res, "Error updating content", 500);
  }
};

// Delete Content Controller
export const deleteContentController = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedContent = await Content.findByIdAndDelete(id);

    if (!deletedContent) {
      return senderError(res, "Content not found", 404);
    }

    res.status(200).json({
      success: true,
      message: "Content deleted successfully.",
    });
  } catch (error) {
    console.error("Error deleting content:", error);
    senderError(res, "Error deleting content", 500);
  }
};

// Fetch All Content Controller
export const getAllContentController = async (req, res) => {
  try {
    const contents = await Content.find();

    res.status(200).json({
      success: true,
      data: contents,
    });
  } catch (error) {
    console.error("Error fetching content:", error);
    senderError(res, "Error fetching content", 500);
  }
};
