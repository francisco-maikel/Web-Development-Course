import { Router } from "express";
import { userControllers } from "../controllers/userControllers";

export const router = Router();

router.get("/user", userControllers.read);
router.post("/user", userControllers.create);
