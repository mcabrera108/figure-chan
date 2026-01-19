import { prisma } from "../lib/prisma.ts";
import bcrypt from "bcrypt";

export async function registerUserQuery(
  username: string,
  password: string,
  email: string
) {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const response = await prisma.users.create({
      data: {
        email,
        password: hashedPassword,
        username,
        role: "User",
        emailVerified: false,
      },
    });

    const profileResponse = await prisma.profile.create({
      data: {
        profilePhoto: "frog-chair_i2j0qw",
        userId: response.id,
      },
    });

    return profileResponse;
  } catch (error) {
    return false;
  }
}
export async function loginUserQuery(username: string, password: string) {
  try {
    const response = await prisma.users.findFirst({
      where: {
        username: username,
      },
    });
    const match = await bcrypt.compare(password, response?.password as string);

    if (!match) {
      throw new Error("Please enter valid credentials");
    }

    return true;
  } catch (error) {
    return false;
  }
}
export async function blacklistUserToken() {
  try {
    return true;
  } catch (error) {
    return false;
  }
}
