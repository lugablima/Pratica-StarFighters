import { Router } from "express";
import createBattle from "../controllers/battleController";
import schemaValidator from "../middlewares/schemaValidator";
import battleSchema from "../schemas/battleSchema";

const battleRouter = Router();

battleRouter.post("/battle", schemaValidator(battleSchema), createBattle);

export default battleRouter;