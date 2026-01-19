import { prisma } from "../lib/prisma.ts";

async function main() {
  // // Create a new user with a post
  // const user = await prisma.users.create({
  //   data: {
  //     email: "example@email.com",
  //     password: "ExamplePassword",
  //     username: "TestUser01",
  //     role: "User",
  //     emailVerified: false,
  //   },
  // });
  // console.log("Created user:", user);
  // // Fetch all users with their posts
  // const allUsers = await prisma.users.findMany();
  // console.log("All users:", JSON.stringify(allUsers, null, 2));
  //await prisma.users.deleteMany({});
  //To run: npx tsx config/script.ts
  // const companiesToCreate = [
  //   {
  //     logoImgUrl: "goodsmilelogo_mfv9ld",
  //     name: "Good Smile Company",
  //     url: "https://www.goodsmile.com/en",
  //   },
  //   {
  //     logoImgUrl: "freeinglogo_jixg5a",
  //     name: "FREEing",
  //     url: "https://freeingfigures.com/",
  //   },
  //   {
  //     logoImgUrl: "kotobukiya-logo_muvber",
  //     name: "Kotobukiya",
  //     url: "https://www.kotobukiya.co.jp/en/",
  //   },
  // ];
  // const createCompanies = await prisma.companies.createMany({
  //   data: companiesToCreate,
  //   skipDuplicates: true,
  // });
  // const charactersToCreate = [
  //   {
  //     characterImgUrl: "mario_ds6qqy",
  //     name: "Mario",
  //   },
  //   {
  //     characterImgUrl: "link_fcp0dn",
  //     name: "Link",
  //   },
  // ];
  // const createCharacters = await prisma.characters.createMany({
  //   data: charactersToCreate,
  //   skipDuplicates: true,
  // });
  // const categoriesToCreate = [
  //   {
  //     name: "Prepainted",
  //   },
  //   {
  //     name: "Action/Dolls",
  //   },
  //   {
  //     name: "Trading",
  //   },
  //   {
  //     name: "Kits",
  //   },
  // ];
  // const createCategories = await prisma.categories.createMany({
  //   data: categoriesToCreate,
  //   skipDuplicates: true,
  // });
  // const createOrigins = await prisma.subCategories.createMany({
  //   data: subCategoriesToCreate,
  //   skipDuplicates: true,
  // })
  // const subCategoriesToCreate = [
  //   {
  //     name: "Scale Figures",
  //     categoryId: 1,
  //   },
  //   {
  //     name: "Non-Scale Figures",
  //     categoryId: 1,
  //   },
  //   {
  //     name: "Prize Figures",
  //     categoryId: 1,
  //   },
  //   {
  //     name: "Dolls",
  //     categoryId: 2,
  //   },
  //   {
  //     name: "Plushies",
  //     categoryId: 2,
  //   },
  //   {
  //     name: "Poseable Figures",
  //     categoryId: 2,
  //   },
  //   {
  //     name: "Trading Figures",
  //     categoryId: 3,
  //   },
  //   {
  //     name: "Trading Dolls",
  //     categoryId: 3,
  //   },
  //   {
  //     name: "Garage Kits",
  //     categoryId: 4,
  //   },
  //   {
  //     name: "Model Kits",
  //     categoryId: 4,
  //   },
  // ];
  // const createSubCategories = await prisma.subCategories.createMany({
  //   data: subCategoriesToCreate,
  //   skipDuplicates: true,
  // });
  // const seriesToCreate = [
  //   {
  //     title: "The Legend of Zelda",
  //   },
  //   {
  //     title: "Super Mario",
  //   },
  //   {
  //     title: "Legend of Heroes",
  //   },
  //   {
  //     title: "Fate",
  //   },
  //   {
  //     title: "Naruto",
  //   },
  //   {
  //     title: "Vocaloid",
  //   },
  //   {
  //     title: "Pokemon",
  //   },
  // ];
  // const createSeries = await prisma.series.createMany({
  //   data: seriesToCreate,
  //   skipDuplicates: true,
  // });
  const seriesEntryToCreate = [
    {
      title: "VOCALOID1",
      seriesId: 6,
    },
    {
      title: "Super Mario Bros.",
      seriesId: 2,
    },
    {
      title: "Legend of Heroes: Trails in the Sky",
      seriesId: 3,
    },
    {
      title: "Fate Stay/Night",
      seriesId: 4,
    },
    {
      title: "Naruto",
      seriesId: 5,
    },
    {
      title: "The Legend of Zelda",
      seriesId: 1,
    },
    {
      title: "Pokemon Red/Blue",
      seriesId: 7,
    },
  ];
  const createSeriesEntry = await prisma.seriesEntry.createMany({
    data: seriesEntryToCreate,
    skipDuplicates: true,
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
