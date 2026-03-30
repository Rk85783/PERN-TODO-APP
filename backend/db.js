import { Pool } from "pg";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

const isProduction = process.env.NODE_ENV === "production";

let pool;

if (isProduction) {
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      ca: fs.readFileSync("ca.pem").toString(),
    },
  });
} else {
  pool = new Pool({
    connectionString: process.env.LOCAL_DATABASE_URL,
  });
}

export default pool;