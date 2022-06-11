import { config } from "dotenv";

config();

// console.log(process.env.MONGODB_URI)

// if not connected to MONGODB_URI connect to test
export const MONGODB_URI = 
process.env.MONGODB_URI || "mongodb://localhost/test";

export const PORT = 
process.env.PORT || 3000;