import express from "express";
import { analyticController } from "../../controllers/analytic";

const router = express.Router();

router.post("/analytics", analyticController.add);

export const analyticRouter = router;
