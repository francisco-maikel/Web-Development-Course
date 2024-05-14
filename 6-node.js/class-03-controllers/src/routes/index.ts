import { Router } from "express";
import { userControllers } from "../controllers";

export const router = Router();

router.get("/user", userControllers.create);
