import { prisma } from "./prisma";

export const getAllCharacters = async () => {
  const users = await prisma.targetCharacter.findMany();
  return users;
};

export const getCharacterByName = async (targetName: string) => {
  const user = await prisma.targetCharacter.findUnique({
    where: {
      name: targetName,
    },
  });

  return user;
};

async function populateDB() {
  // await prisma.targetCharacter.create({
  //   data: {
  //     name: "kyle",
  //     x: 875,
  //     y: 334,
  //   },
  // });

  // await prisma.targetCharacter.create({
  //   data: {
  //     name: "john",
  //     x: 776,
  //     y: 551,
  //   },
  // });

  // await prisma.targetCharacter.update({
  //   where: {
  //     id: 2,
  //   },
  //   data: {
  //     x: 137,
  //     y: 476,
  //   },
  // });

  const users = await prisma.targetCharacter.findMany();
  console.log(users);
}

// populateDB();
