export const calculateSalary = (salary: number, country: string) => {
  if (salary < 0) throw new Error("Invalid salary");

  let tds = 0;

  switch (country) {
    case "India":
      tds = salary * 0.1;
      break;
    case "United States":
      tds = salary * 0.12;
      break;
    default:
      tds = 0;
  }

  return {
    gross: salary,
    tds,
    net: salary - tds
  };
};