import { Request, Response } from "express";
import * as service from "../services/metrics.service";

export const getCountryMetrics = async (req: Request, res: Response) => {
  res.json(await service.countryMetrics(req.params.country));
};

export const getJobMetrics = async (req: Request, res: Response) => {
  res.json(await service.jobMetrics(req.params.jobTitle));
};