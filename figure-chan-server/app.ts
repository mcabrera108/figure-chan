import express from "express";
import path from "node:path";
import cors from "cors";
import cookieParser from "cookie-parser";
import indexRouter from "./routes/index.ts";
import rateLimit from "express-rate-limit";
import compression from "compression";
import dotenv from "dotenv";

dotenv.config({
  path: [".env.dev", ".env.prod"],
});

const app = express();

// const limiter = rateLimit({
//   windowMs: 1 * 60 * 1000,
//   max: 20,
// });
// Define Cors Origin URL
const corsOptions = {
  origin: ["http://localhost:5173"],
  optionsSuccessStatus: 200,
  credentials: true,
};

//app.use(limiter);
app.use(cors(corsOptions));
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      "script-src": ["'self'", "code.jquery.com", "cdn.jsdelivr.net"],
    },
  })
);
app.use(compression());
app.set("views", path.join(import.meta.dirname, "views"));
app.set("view engine", "ejs");
app.use(cookieParser());
// // Importing Passport Strategy Functions
import "./config/passport.ts";
import helmet from "helmet";

// Parses HTTP Responses
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);

app.listen(3000, (error) => {
  if (error) {
    throw error;
  }
  console.log("App listening on port 3000");
});
