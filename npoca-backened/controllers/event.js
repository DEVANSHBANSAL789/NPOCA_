import Events from "../models/eventModel.js"; // Ensure the model is correctly imported
import { senderError } from "../utils/helper.js";

// Search Event Controller
export const searchEventController = async (req, res) => {
  try {
    const { query, date } = req.body;

    // Build the search criteria
    const searchCriteria = {
      $and: [
        date ? { date: new Date(date) } : {}, // Match exact date if provided
        {
          $or: [
            { heading: { $regex: query, $options: "i" } }, // Case-insensitive search in 'heading'
            { para: { $regex: query, $options: "i" } }, // Case-insensitive search in 'para'
          ],
        },
      ],
    };

    // Fetch matching events
    const results = await Events.find(searchCriteria);

    res.status(200).json({
      success: true,
      message: "Search results fetched successfully.",
      data: results,
    });
  } catch (error) {
    console.error("Error searching events:", error);
    senderError(res, "Error searching events", 500);
  }
};
export const fetchEventController = async (req, res) => {
  try {
    // Extract the id from the request parameters
    const { id } = req.params; // Correctly access id from req.params

    // Fetch the event with the given id (if that's your intention)
    const latestEvents = await Events.find({ _id: id }); // Assuming you're looking for a specific event by id

    if (!latestEvents.length) {
      return res.status(404).json({
        success: false,
        message: "Event not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Event fetched successfully.",
      data: latestEvents,
    });
  } catch (error) {
    console.error("Error fetching event:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching event",
    });
  }
};

// Fetch Latest Events Controller
export const fetchLatestEventsController = async (req, res) => {
  try {
    // Fetch the latest three events, sorted by date in descending order
    const latestEvents = await Events.find({})
      .sort({ date: -1 }) // Sort by date in descending order
      .limit(3); // Limit the result to 3 events

    res.status(200).json({
      success: true,
      message: "Latest events fetched successfully.",
      data: latestEvents,
    });
  } catch (error) {
    console.error("Error fetching latest events:", error);
    senderError(res, "Error fetching latest events", 500);
  }
};
export const fetchEventsController = async (req, res) => {
  try {
    // Fetch the latest three events, sorted by date in descending order
    const latestEvents = await Events.find({}).sort({ date: -1 }); // Sort by date in descending order
    // Limit the result to 3 events

    res.status(200).json({
      success: true,
      message: "Latest events fetched successfully.",
      data: latestEvents,
    });
  } catch (error) {
    console.error("Error fetching latest events:", error);
    senderError(res, "Error fetching latest events", 500);
  }
};

// Add Event Controller
export const addEventController = async (req, res) => {
  try {
    const { link, heading, date, title, para } = req.body;

    // Create a new event
    const newEvent = new Events({ link, heading, date, title, para });
    await newEvent.save();

    res.status(201).json({
      success: true,
      message: "Event added successfully.",
      data: newEvent,
    });
  } catch (error) {
    console.error("Error adding event:", error);
    senderError(res, "Error adding event", 500);
  }
};

// Update Event Controller
export const updateEventController = async (req, res) => {
  try {
    const { id } = req.params; // Extract event ID from route parameters
    const { link, heading, date, title, para } = req.body;

    const updatedEvent = await Events.findByIdAndUpdate(
      id,
      { link, heading, date, title, para },
      { new: true } // Return the updated document
    );

    if (!updatedEvent) {
      return res.status(404).json({
        success: false,
        message: "Event not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Event updated successfully.",
      data: updatedEvent,
    });
  } catch (error) {
    console.error("Error updating event:", error);
    senderError(res, "Error updating event", 500);
  }
};

// Delete Event Controller
export const deleteEventController = async (req, res) => {
  try {
    const { id } = req.params; // Extract event ID from route parameters

    const deletedEvent = await Events.findByIdAndDelete(id);

    if (!deletedEvent) {
      return res.status(404).json({
        success: false,
        message: "Event not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Event deleted successfully.",
      data: deletedEvent,
    });
  } catch (error) {
    console.error("Error deleting event:", error);
    senderError(res, "Error deleting event", 500);
  }
};
