import mongoose from "mongoose";

const connectDatabase = () => {
  try {
    mongoose.set("strictQuery", false);

    const connectionString = "mongodb://localhost:27017/fewa_store";
    // const connectionString = process.env.MONGO_CLIENT;

    if (!connectionString) {
      console.log("MongoDB connection string is not defined");
      return;
    }

    const connectDb = mongoose.connect(connectionString);

    connectDb && console.log("MongoDB connection succeeded");
  } catch (error) {
    console.log(error);
  }
};

export default connectDatabase;
