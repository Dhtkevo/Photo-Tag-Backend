import { prisma } from "./prisma";

async function populateDB() {
  await prisma.targetCharacter.create({
    data: {
      name: "kyle",
      x: 875,
      y: 334,
    },
  });

  await prisma.targetCharacter.create({
    data: {
      name: "john",
      x: 776,
      y: 551,
    },
  });

  const users = await prisma.targetCharacter.findMany();
  //console.log(users);
}

//populateDB();
