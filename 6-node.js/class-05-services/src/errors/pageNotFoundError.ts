import { NextFunction, Request, Response } from "express";

export function pageNotFoundError(req: Request, res: Response, next: NextFunction) {
  const error = new Error("Page not found!") as Error & { status: number };
  error.status = 404;
  next(error);
}
