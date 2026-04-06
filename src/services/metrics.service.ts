import prisma from "../utils/prisma";

export const countryMetrics = async (country: string) => {
  const result = await prisma.employee.aggregate({
    where: { country },
    _min: { salary: true },
    _max: { salary: true },
    _avg: { salary: true }
  });

  return result;
};

export const jobMetrics = async (jobTitle: string) => {
  const result = await prisma.employee.aggregate({
    where: { jobTitle },
    _avg: { salary: true }
  });

  return result;
};