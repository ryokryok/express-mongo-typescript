import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(__dirname, "../.env") });

interface IUser extends mongoose.Document {
  _id: string;
  name: string;
}

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

export const User = mongoose.model<IUser>("User", userSchema);

export async function establishDatabaseConnection() {
  const user = process.env.MONGODB_USERNAME;
  const password = process.env.MONGODB_PASSWORD;
  const url = process.env.MONGODB_URL;

  try {
    await mongoose.connect(`mongodb://${user}:${password}@${url}`, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("success to establish DB connection");
  } catch (error) {
    console.error(error);
    console.error("failed to establish DB connection.");
    process.exit(1);
  }
}
