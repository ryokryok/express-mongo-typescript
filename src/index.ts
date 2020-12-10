import express, { Request, Response } from "express";
import cors from "cors";
import { router } from "./router";
import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(__dirname, "../.env") });

const app = express();
const PORT = process.env.LISTEN_PORT ? process.env.LISTEN_PORT : 3000;

app.use(express.json());
const readOption: cors.CorsOptions = {
  origin: "*",
  methods: "GET",
};
const writeOption: cors.CorsOptions = {
  origin: process.env.CLIENT_PORT,
};

app.get("/", cors(readOption), (req: Request, res: Response) => {
  res.json({ message: "Hello World" });
});
app.use("/api", router);

// execute
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
