import { Router } from "express";
import * as controller from "../controllers/authController";
import validateSchema from "../middlewares/validateSchemaMiddleware";
import { signInSchema, signUpSchema } from "../schemas/authSchema";

const router = Router();

router.post("/sign-up", validateSchema(signUpSchema), controller.signUp);
router.post("/sign-in", validateSchema(signInSchema), controller.signIn);

export default router;
