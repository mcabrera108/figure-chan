import { prisma } from "../lib/prisma.ts";

export async function fetchSearchResultPreview(req: any, res: any, next: any) {
  try {
    const { searchValue } = req.body;
    const response = await prisma.items.findMany({
      where: {
        title: {
          contains: searchValue,
        },
      },
    });
    res.status(200).json({ response });
  } catch (error) {
    res.status(400).json({ message: "Error fetching search results." });
  } finally {
    next();
  }
}
