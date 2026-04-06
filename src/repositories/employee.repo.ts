import prisma from "../utils/prisma";

export const create = (data: any) =>
  prisma.employee.create({ data });

export const findAll = () =>
  prisma.employee.findMany();

export const findById = (id: number) =>
  prisma.employee.findUnique({ where: { id } });

export const update = (id: number, data: any) =>
  prisma.employee.update({ where: { id }, data });

export const deleteById = (id: number) =>
  prisma.employee.delete({ where: { id } });