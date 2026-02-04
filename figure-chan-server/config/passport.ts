import { Strategy as JWTStrategy, type VerifiedCallback } from "passport-jwt";
import { Strategy as LocalStrategy } from "passport-local";
import bcrypt from "bcrypt";
import { prisma } from "../lib/prisma.ts";
import passport from "passport";

passport.use(
  new LocalStrategy(async (username: string, password: string, done: any) => {
    try {
      const user = await prisma.users.findFirst({
        where: {
          username,
        },
        include: {
          profileId: true,
        },
      });

      if (!user) {
        return done(null, false, { message: "Incorrect Credentials" });
      }

      const match = await bcrypt.compare(password, user.password);

      if (!match) {
        return done(null, false, { message: "Incorrect Credentials" });
      }

      return done(null, user);
    } catch (error) {
      return done(error);
    }
  }),
);

function cookieExtractor(req: any) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies.token;
  }
  return token;
}
const options = {
  jwtFromRequest: cookieExtractor,
  secretOrKey: process.env.JWT_SECRET_DEV as string,
};
passport.use(
  new JWTStrategy(options, async (payload: any, done: VerifiedCallback) => {
    try {
      const user = await prisma.users.findFirst({
        where: {
          id: payload.id,
        },
        include: {
          profileId: true,
        },
      });

      if (user) {
        return done(null, user);
      } else {
        return done(null, false, { message: "Incorrect Credentials" });
      }
    } catch (error) {
      done(error, false, { message: "Something went wrong" });
    }
  }),
);
