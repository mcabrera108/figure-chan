import express from "express";
import {
  fetchUserProfile,
  registerUser,
} from "../controllers/userController.ts";
import passport from "passport";
import jwt from "jsonwebtoken";
import { fetchSearchResultPreview } from "../controllers/searchController.ts";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Hello World",
  });
});

router.post("/register", registerUser);
router.post("/login", (req, res, next) => {
  passport.authenticate(
    "local",
    { session: false },
    (err: any, user: any, info: any) => {
      if (err || !user) {
        return res.status(400).json({
          message: info ? info.message : "Login Failed",
        });
      }

      req.login(user, { session: false }, (err: any) => {
        if (err) {
          res.status(400).json({ message: err });
        }

        const payload = {
          id: user.id,
          username: user.username,
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET_DEV as string, {
          expiresIn: "1h",
        });

        res.status(200).cookie("token", token, {
          httpOnly: true,
          secure: false,
          sameSite: "lax",
        });
        res.status(200).json({
          message: "Logged In Successfully",
          username: user.username,
          profilePic: user.profileId.profilePhoto,
        });
      });
    }
  )(req, res, next);
});
router.post("/auth", (req, res, next) => {
  passport.authenticate(
    "jwt",
    { session: false },
    async (err: any, user: any, info: any) => {
      if (err) {
        return res
          .status(400)
          .json({ message: info ? err : "Profile not found." });
      }

      if (!user) {
        return res.status(200).json({ username: null, profilePic: null });
      } else {
        res.status(200).json({
          username: user.username,
          profilePic: user.profileId.profilePhoto,
        });
      }
    }
  )(req, res, next);
});
router.post("/logout", (req, res, next) => {
  res.clearCookie("token");

  return res.status(200).json({
    username: null,
    profilePic: null,
    message: "Logged out successfully.",
  });
});
router.get("/profile/:id", fetchUserProfile);
router.post("/search", fetchSearchResultPreview);
export default router;
