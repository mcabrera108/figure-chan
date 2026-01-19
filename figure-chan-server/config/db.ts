import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config({
  path: [".env.dev", ".env.prod"],
});

export default new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT as string),
});
