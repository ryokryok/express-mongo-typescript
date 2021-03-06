import express, { Request, Response } from "express";
import { userRouter } from "./router";
import { establishDatabaseConnection } from "./database";
import { readOption } from "./corsOption";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(__dirname, "../.env") });

const app = express();
const PORT = process.env.LISTEN_PORT ? process.env.LISTEN_PORT : 3000;

app.use(express.json());
app.use(cors());

app.get("/", cors(readOption), (req: Request, res: Response) => {
  res.json({ message: "Hello World" });
});
app.use("/api", userRouter);

establishDatabaseConnection();
// execute
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
