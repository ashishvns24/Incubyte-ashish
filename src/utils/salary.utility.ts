export const calculateSalary = (salary: number, country: string) => {
  let tds = 0;

  if (country === "India") tds = salary * 0.1;
  else if (country === "United States") tds = salary * 0.12;

  return {
    gross: salary,
    tds,
    net: salary - tds
  };
};