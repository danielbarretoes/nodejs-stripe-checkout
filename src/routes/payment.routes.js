import { Router } from "express";
import {
  cancel,
  createSession,
  success,
} from "../controllers/payment.controller.js";

const router = Router();

router.post("/create-checkout-session", createSession);

router.get("/success", success);

router.get("/cancel", cancel);

export default router;
