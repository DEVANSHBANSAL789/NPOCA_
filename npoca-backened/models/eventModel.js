import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    link: {
      type: String,
      required: true,
    },
    heading: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    para: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // Automatically adds `createdAt` and `updatedAt` fields
    collection: "events", // Explicitly specify the collection name
  }
);

const Events = mongoose.model("events", eventSchema);
export default Events;
