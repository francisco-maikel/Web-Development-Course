import { Request, Response } from "express";

export const userControllers = {
  async create(req: Request, res: Response) {
    try {
      res.json({
        className: "Class 03 Routes",
      });
    } catch (error) {
      console.log(error);
    }
  },
};
