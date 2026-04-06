import { Request, Response, NextFunction } from "express";
import * as service from "../services/employee.service";
import { employeeSchema } from "../validations/employee.validation";

export const createEmployee = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const parsed = employeeSchema.parse(req.body);
    const data = await service.create(parsed);

    res.status(201).json(data);
  } catch (err) {
    next(err);
  }
};

export const getEmployeeById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const emp = await service.getById(Number(req.params.id));

    if (!emp) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.json(emp);
  } catch (err) {
    next(err);
  }
};