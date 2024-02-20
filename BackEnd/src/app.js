import dotenv from "dotenv"
import { connectDB } from "./connection.js";

dotenv.config()

connectDB();