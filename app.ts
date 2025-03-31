import "dotenv/config";
import express, { urlencoded } from "express";
import cors from "cors";
import { validateRouter } from "./routes/validateRouter";
import type { Request, Response } from "express";

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Works");
});

app.use("/validate", validateRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
