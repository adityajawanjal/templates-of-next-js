import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (mongoose.connections[0].readyState === 1) {
      console.log(`Already Connected.`);
      return;
    }
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`DB Connected...`);
  } catch (err) {
    console.log(`The error in connectDB : ${err}`);
  }
};

export default connectDB;
