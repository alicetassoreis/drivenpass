import { Router } from "express";
import * as controller from "../controllers/credentialsController";
import authMiddleware from "../middlewares/authMiddleware";
import validateSchema from "../middlewares/validateSchemaMiddleware";
import { credentialSchema } from "../schemas/credentialsSchema";

const router = Router();

router.use(authMiddleware);

router.post("/", validateSchema(credentialSchema), controller.create);
router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.put("/:id", validateSchema(credentialSchema), controller.update);
router.delete("/:id", controller.remove);

export default router;
