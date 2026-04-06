import { Router } from "express";
import * as controller from "../controllers/metrics.controller";

const router = Router();

router.get("/country/:country", controller.getCountryMetrics);
router.get("/job/:jobTitle", controller.getJobMetrics);

export default router;