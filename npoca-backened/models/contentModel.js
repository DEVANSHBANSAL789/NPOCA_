import mongoose from "mongoose";

const contentSchema = new mongoose.Schema(
  {
    link: {
      type: String,
      required: true,
    },
    heading: {
      type: String,
      required: true,
    },
    para: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    collection: "youtube",
  }
);

const Content = mongoose.model("Content", contentSchema);
export default Content;
