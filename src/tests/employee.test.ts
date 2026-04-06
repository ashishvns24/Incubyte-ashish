import request from "supertest";
import app from "../app";

describe("Employee API", () => {
  it("should create employee", async () => {
    const res = await request(app).post("/employees").send({
      fullName: "Ashish",
      jobTitle: "Developer",
      country: "India",
      salary: 50000
    });

    expect(res.status).toBe(201);
    expect(res.body.fullName).toBe("Ashish");
  });

  it("should calculate salary", async () => {
    const emp = await request(app).post("/employees").send({
      fullName: "Test",
      jobTitle: "Dev",
      country: "India",
      salary: 1000
    });

    const res = await request(app).get(`/employees/${emp.body.id}/salary`);

    expect(res.body.net).toBe(900);
  });
});