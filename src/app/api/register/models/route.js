import { User } from "./models/user";
//import bcrypt from "bcrypt";
import mongoose from "mongoose";

// Ensure to set your actual MongoDB URL
const MONGO_URL = "mongodb+srv://food-order:bjIMKJQ1S3R3xpET@cluster0.xetqb6q.mongodb.net/food-ordering";

export async function POST(req) {
  const body = await req.json();
  mongoose.connect(process.env.MONGO_URL);
  const createdUser = await User.create(body);
  return Response.json(createdUser);
}
