import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = mongoose.connect(process.env.MONGO_URI);
    console.log(
      "mongoDB connected Successfully ",
      (await conn).connection.host
    );
  } catch (e) {
    console.log("mongoDB error: ", e);
  }
};
