import express from "express";
import path from "node:path";
import cors from "cors";
import cookieParser from "cookie-parser";
import indexRouter from "./routes/index.ts";
import settingsRouter from "./routes/setting.ts";
import rateLimit from "express-rate-limit";
import compression from "compression";
import "dotenv/config";
import helmet from "helmet";

const app = express();

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 20,
});

const corsOptions = {
  origin: ["http://localhost:5173"],
  optionsSuccessStatus: 200,
  credentials: true,
};

app.use(cors(corsOptions));
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      "script-src": ["'self'", "code.jquery.com", "cdn.jsdelivr.net"],
    },
  }),
);

app.use(compression());
app.set("views", path.join(import.meta.dirname, "views"));
app.set("view engine", "ejs");
app.use(cookieParser());
import "./config/passport.ts";
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", indexRouter);
app.use("/settings", settingsRouter);

app.listen(3000, (error) => {
  if (error) {
    throw error;
  }
  console.log("App listening on port 3000");
});
