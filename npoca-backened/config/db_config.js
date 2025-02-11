import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.DATABASE_URL);
    console.log(`Connected to MongoDB database - ${connect.connection.host}`);
  } catch (error) {
    console.log(`Error in Mongodb:\n ${error}`);
  }
};

export default connectDB;
