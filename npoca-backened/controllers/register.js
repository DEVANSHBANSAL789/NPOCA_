import register from "../models/registerModel.js";

import { senderError } from "../utils/helper.js";

// Add Link Controller
export const addLinkController = async (req, res) => {
  try {
    const { link, heading, date, time, name, title, type } = req.body;

    if (!link || !heading || !date || !time || !name || !title || !type) {
      return senderError(res, "All fields is required", 400);
    }

    const newRegister = new register({
      link,
      heading,
      date,
      time,
      name,
      title,
      type,
    });
    await newRegister.save();

    res.status(201).json({
      success: true,
      message: "Content Added successfully.",
      data: newRegister,
    });
  } catch (error) {
    console.error("Error adding Content:", error);
    senderError(res, "Error adding Content", 500);
  }
};

// Update Link Controller
export const updateLinkController = async (req, res) => {
  try {
    const { id } = req.params; // Extract ID from URL parameters
    const { link, heading, date, time, name, title, type } = req.body; // Extract the updated link from request body

    if (!link || !heading || !date || !time || !name || !title || !type) {
      return senderError(res, "All fields is required", 400);
    }

    const updatedRegister = await register.findByIdAndUpdate(
      id,
      { link, heading, date, time, name, title, type },
      { new: true } // Return the updated document
    );

    if (!updatedRegister) {
      return senderError(res, "Register not found", 404);
    }

    res.status(200).json({
      success: true,
      message: "Content updated successfully.",
      data: updatedRegister,
    });
  } catch (error) {
    console.error("Error updating Content:", error);
    senderError(res, "Error updating Content", 500);
  }
};

// Delete Link Controller
export const deleteLinkController = async (req, res) => {
  try {
    const { id } = req.params; // Extract ID from URL parameters

    const deletedRegister = await register.findByIdAndDelete(id);

    if (!deletedRegister) {
      return senderError(res, "Register not found", 404);
    }

    res.status(200).json({
      success: true,
      message: "Content deleted successfully.",
    });
  } catch (error) {
    console.error("Error deleting Content:", error);
    senderError(res, "Error deleting Content", 500);
  }
};

// Fetch All Links Controller
export const getAllLinksController = async (req, res) => {
  try {
    const registers = await register.find(
      {},
      { link: 1, heading: 1, date: 1, time: 1, name: 1, title: 1, type: 1 }
    );

    res.status(200).json({
      success: true,
      data: registers,
    });
  } catch (error) {
    console.error("Error fetching content:", error);
    senderError(res, "Error fetching content", 500);
  }
};
