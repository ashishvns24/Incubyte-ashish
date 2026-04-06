export const getSalary = async (id: number) => {
  const emp = await repo.findById(id);

  if (!emp) {
    throw new Error("Employee not found");
  }

  return calculateSalary(emp.salary, emp.country);
};