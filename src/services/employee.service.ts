import * as repo from "../repositories/employee.repo";
import { calculateSalary } from "../utils/salary";

export const create = (data: any) => repo.create(data);

export const getAll = () => repo.findAll();

export const getById = (id: number) => repo.findById(id);

export const update = (id: number, data: any) => repo.update(id, data);

export const remove = (id: number) => repo.deleteById(id);

export const getSalary = async (id: number) => {
  const emp = await repo.findById(id);
  if (!emp) throw new Error("Employee not found");

  return calculateSalary(emp.salary, emp.country);
};