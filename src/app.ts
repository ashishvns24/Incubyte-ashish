import express from "express";
import employeeRoutes from "./routes/employee.routes";
import metricsRoutes from "./routes/metrics.routes";

const app = express();

app.use(express.json());

app.use("/employees", employeeRoutes);
app.use("/metrics", metricsRoutes);

export default app;