import mongoose from "mongoose";

const registerSchema = new mongoose.Schema(
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
    time: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    type: {
      type: String,

      required: true,
    },
  },
  {
    timestamps: true, // Automatically adds `createdAt` and `updatedAt` fields
    collection: "register", // Explicitly specify the collection name
  }
);

const Register = mongoose.model("register", registerSchema);
export default Register;
