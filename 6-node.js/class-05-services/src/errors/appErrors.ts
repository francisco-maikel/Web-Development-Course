import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";

export function appErrors(
  error: Error & { status: number },
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error("Middleware App Error: ", error);

  if (error instanceof ZodError) {
    return res
      .status(error.status || 500)
      .json({ message: JSON.parse(error.message)[0].message || "Server Error!" });
  }

  return res
    .status(error.status || 500)
    .json({ message: error.message || "Server Error!" });
}
