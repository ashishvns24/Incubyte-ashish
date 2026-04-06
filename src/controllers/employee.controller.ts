import { Request, Response } from "express";
import * as service from "../services/employee.service";

export const createEmployee = async (req: Request, res: Response) => {
  const data = await service.create(req.body);
  res.status(201).json(data);
};

export const getEmployees = async (_: Request, res: Response) => {
  res.json(await service.getAll());
};

export const getEmployeeById = async (req: Request, res: Response) => {
  res.json(await service.getById(Number(req.params.id)));
};

export const updateEmployee = async (req: Request, res: Response) => {
  res.json(await service.update(Number(req.params.id), req.body));
};

export const deleteEmployee = async (req: Request, res: Response) => {
  await service.remove(Number(req.params.id));
  res.status(204).send();
};

export const getSalary = async (req: Request, res: Response) => {
  const result = await service.getSalary(Number(req.params.id));
  res.json(result);
};