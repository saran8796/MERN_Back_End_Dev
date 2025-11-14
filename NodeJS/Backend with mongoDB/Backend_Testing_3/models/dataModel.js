import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const dataModel = mongoose.model("userList", dataSchema);

export default dataModel;
