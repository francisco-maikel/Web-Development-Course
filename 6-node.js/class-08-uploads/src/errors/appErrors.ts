import { NextFunction, Request, Response } from "express";

export function appErrors(
  error: Error & { status: number },
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error("Middleware App Error: ", error);
  return res
    .status(error.status || 500)
    .json({ message: error.message || "Server Error!" });
}
