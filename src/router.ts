import express from "express";
import { Users } from "./MOCK_DATA";
export const router = express.Router();

router.use((req, res, next) => {
  console.log(`access from ${req.hostname} Time: ${Date.now()}`);
  next();
});

router.get("/users", (req, res) => {
  res.json(Users);
});

router.get("/users/:id", (req, res) => {
  const { id } = req.params;
  res.json(Users.find((user) => user.id === Number(id)));
});
