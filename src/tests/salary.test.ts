import { calculateSalary } from "../utils/salary";

describe("Salary Calculation", () => {
  it("should calculate India salary", () => {
    const res = calculateSalary(1000, "India");
    expect(res.net).toBe(900);
  });

  it("should handle unknown country", () => {
    const res = calculateSalary(1000, "France");
    expect(res.net).toBe(1000);
  });

  it("should throw for negative salary", () => {
    expect(() => calculateSalary(-1000, "India")).toThrow();
  });
});