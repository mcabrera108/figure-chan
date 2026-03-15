import express from "express";
import {
  getAccountSettings,
  getProfileSettings,
} from "../controllers/userController.ts";

const router = express.Router();

router.get("/account/:id", getAccountSettings);

router.get("/profile/:id", getProfileSettings);
export default router;
