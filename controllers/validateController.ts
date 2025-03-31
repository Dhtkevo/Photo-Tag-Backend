import type { Request, Response } from "express";
import { getCharacterByName } from "../db/queries";

export const validateUserController = async (req: Request, res: Response) => {
  const { targetName, location } = req.body;

  const targetCharacter = await getCharacterByName(targetName);

  if (!targetCharacter) return res.json({ characterFound: false });

  if (
    location.x >= targetCharacter.x - 15 &&
    location.x <= targetCharacter.x + 15 &&
    location.y >= targetCharacter.y - 15 &&
    location.y <= targetCharacter.y + 15
  ) {
    return res.json({ characterFound: true });
  }

  res.json({ characterFound: false });
};
