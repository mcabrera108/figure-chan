import {
  blacklistUserTokenQuery,
  registerUserQuery,
} from "../config/queries.ts";
import { prisma } from "../lib/prisma.ts";

export async function registerUser(req: any, res: any, next: any) {
  try {
    const { username, password, email } = req.body;

    if (!username || !password || username.length > 50) {
      res.status(401).json({ message: "Please enter valid credentials" });
    }

    const userExist = await prisma.users.findFirst({
      where: {
        OR: [
          {
            email: email,
          },
          {
            username: username,
          },
        ],
      },
    });

    if (userExist) {
      res.status(401).json({
        message: "A user with this username or email already exists...",
      });
    }

    const response = await registerUserQuery(username, password, email);

    if (response) {
      res.status(201).json({
        message:
          "Successfully Registered User. Please verify your account through email.",
      });
    } else {
      throw new Error("Unable to register User");
    }
  } catch (error: any) {
    res.status(400).json({
      message: "Unable to connect to database. An error has occurred. ",
    });
  } finally {
    next();
  }
}

export async function logoutUser(req: any, res: any, next: any) {
  try {
    const response = await blacklistUserTokenQuery();
    if (response) {
      res.status(200).json({
        message: "Successfully Logged Out",
      });
    } else {
      throw new Error("Unable to connect to database.");
    }
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error while logging token to blacklist: ", error });
  } finally {
    next();
  }
}

export async function getUserProfile(req: any, res: any, next: any) {
  try {
    const { id } = req.params;
    const response = await prisma.users.findFirst({
      where: {
        username: id,
      },
      include: {
        profileId: true,
      },
    });
    if (response) {
      res.status(200).json({
        message: "Successfully fetched user profile",
        username: response.username,
        profilePic: response.profileId?.profilePhoto,
        authenticated: false,
      });
    } else {
      throw new Error("Unable to fetch user profile.");
    }
  } catch (error) {
    res.status(400).json({ message: "Error while fetching profile details" });
  } finally {
    next();
  }
}

export async function getAccountSettings(req: any, res: any, next: any) {
  try {
    const { id } = req.params;
    const response = await prisma.users.findFirst({
      where: {
        username: id,
      },
      include: {
        profileId: true,
      },
    });
    console.log(response);
    if (response) {
      res.status(200).json({
        message: "Successfully fetched account settings",
        username: response.username,
        email: response.email,
        authenticated: response.email,
      });
    }
  } catch (error) {
    res.status(400).json({ message: "Error while fetching account settings" });
  } finally {
    next();
  }
}

export async function getProfileSettings(req: any, res: any, next: any) {
  try {
    const { id } = req.params;
    const response = await prisma.users.findFirst({
      where: {
        username: id,
      },
      include: {
        profileId: true,
      },
    });

    if (response) {
      res.status(200).json({
        message: "Successfully fetched profile settings",
      });
    }
  } catch (error) {
    res.status(400).json({ message: "Error while fetching profile settings" });
  } finally {
    next();
  }
}
