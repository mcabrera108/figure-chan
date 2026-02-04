import { Pool } from "pg";

export default new Pool({
  host: process.env.DB_HOST_DEV,
  user: process.env.DB_USERNAME_DEV,
  database: process.env.DB_NAME_DEV,
  password: process.env.DB_PASSWORD_DEV,
  port: parseInt(process.env.DB_PORT_DEV as string),
});
