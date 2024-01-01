import mongoose, { mongo } from "mongoose";

const connection = {};

export const connectWithDb = async () => {
  try {
    if (connection.isConnected) {
      console.log("Using existing connection");
      return;
    }

    const mongoUrl = process.env.MONGO;

    if (!mongoUrl) {
      throw new Error("Mongo URL is undefined");
    }

    const db = await mongoose.connect(mongoUrl);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
    throw new Error(error instanceof Error ? error.message : "Unknown error");
  }
};
