import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    collection: "admins",
  }
);

const Admin = mongoose.model("Admin", adminSchema);

export default Admin;
