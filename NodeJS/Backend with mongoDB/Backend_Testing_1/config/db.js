import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.Mongo_URI);
    console.log("MongoDB successfully connected ", conn.connection.host);
  } catch (e) {
    console.log("server error", e);
  }
};

export default connectDB;
