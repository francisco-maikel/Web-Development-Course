import { Router } from "express";

export const router = Router();

router.get("/", (req, res) => {
  res.json({ className: "Class 02 Routes" });
});