import express from "express";

import { validateUserController } from "../controllers/validateController";

export const validateRouter = express.Router();

validateRouter.post("/target", validateUserController);
