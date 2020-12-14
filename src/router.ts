import express, { Request, Response, NextFunction } from "express";
import { User } from "./database";
const router = express.Router();

router.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`access from ${req.hostname} Time: ${Date.now()}`);
  next();
});

router.get("/users", (req: Request, res: Response) => {
  User.find((err, result) => {
    if (err) {
      res.status(400);
      res.json(err);
    } else {
      res.status(200);
      res.json(result);
    }
  });
});

router.get("/users/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  User.findById(id, (err, result) => {
    if (err) {
      res.status(400);
      res.json(err);
    } else {
      res.status(200);
      res.json(result);
    }
  });
});

router.post("/users/new", (req: Request, res: Response) => {
  const { name } = req.body;
  const newUser = new User({ name: name });
  newUser.save((err, result) => {
    if (err) {
      res.status(400);
      res.json(err);
    } else {
      res.status(200);
      res.json(result);
    }
  });
});

router.put("/users/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;
  User.findByIdAndUpdate(id, { name: name }, { new: true }, (err, result) => {
    if (err) {
      res.status(400);
      res.json(err);
    } else {
      res.status(200);
      res.json(result);
    }
  });
});

router.delete("/users/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  User.findByIdAndDelete(id, (err, result) => {
    if (err) {
      res.status(400);
      res.json(err);
    } else {
      res.status(200);
      res.json(result);
    }
  });
});

export const userRouter = router;
