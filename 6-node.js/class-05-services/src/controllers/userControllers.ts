import { Request, NextFunction, Response } from "express";
import { userServices } from "../services/userServices";
import { z } from "zod";

export const userControllers = {
  read(req: Request, res: Response, next: NextFunction) {
    try {
      return res.status(200).json({ message: "User read!" });
    } catch (error) {
      return next(error);
    }
  },

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const userSchema = z.object({
        name: z.string().max(255),
        age: z.number().max(255),
        password: z.string().min(7, "Mínimo de 7 caracteres").max(255),
      });

      const { name, age, password } = userSchema.parse(req.body);

      const user = await userServices.create({ name, age, password });

      return res.status(201).json({ message: "User created!", user });
    } catch (error) {
      return next(error);
    }
  },
};
