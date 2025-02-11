import express from "express";
import {
  searchEventController,
  fetchLatestEventsController,
  fetchEventsController,
  fetchEventController,
  addEventController,
  updateEventController,
  deleteEventController,
} from "../controllers/event.js";

const router = express.Router();

// Add a new event
router.post("/add", addEventController);

// Update an event by ID
router.patch("/update/:id", updateEventController);

// Delete an event by ID
router.delete("/delete/:id", deleteEventController);

// Route to search events
router.post("/search", searchEventController);
router.get("/fetch/:id", fetchEventController);

// Route to fetch the latest three events
router.get("/latest-events", fetchLatestEventsController);
router.get("/events", fetchEventsController);

export default router;
