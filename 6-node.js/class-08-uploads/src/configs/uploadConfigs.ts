import multer, { MulterError } from "multer";
import path from "path";
import crypto from "node:crypto";
import { Request } from "express";

export const UPLOADS_FOLDER = path.resolve(__dirname, "..", "uploads");

const storage = multer.diskStorage({
  destination: UPLOADS_FOLDER,
  filename(_req, file, callback) {
    const hash = crypto.randomBytes(10).toString("hex");
    const filename = `${hash}-${file.originalname}`;
    return callback(null, filename);
  },
});

const fileFilter = (
  req: Request,
  file: Express.Multer.File,
  callback: multer.FileFilterCallback
) => {
  const formatFiles = ["image/jpeg", "image/pjpeg", "image/png", "image/gif", "application/pdf"];

  if (formatFiles.includes(file.mimetype)) return callback(null, true);

  const error = new Error("Invalid image type!") as MulterError & { status: number };
  error.status = 400;

  return callback(error, false);
};

export const MULTER = {
  storage,
  fileFilter,
  limits: {
    fileSize: 2 * 1024 * 1024, // 2MB
  },
};
