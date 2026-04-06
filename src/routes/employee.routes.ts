import { Router } from "express";
import * as controller from "../controllers/employee.controller";

const router = Router();

router.post("/", controller.createEmployee);
router.get("/", controller.getEmployees);
router.get("/:id", controller.getEmployeeById);
router.put("/:id", controller.updateEmployee);
router.delete("/:id", controller.deleteEmployee);
router.get("/:id/salary", controller.getSalary);

export default router;