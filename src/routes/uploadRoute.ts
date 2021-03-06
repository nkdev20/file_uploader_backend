import { Router } from "express";
import { fileUpload } from "../middlewares/uploads";
import { validations } from "../middlewares/validation";

import { Worker } from "worker_threads";
const route = Router();

route.post("/upload", fileUpload, validations, (req, res) => {
  res.json({
    message: "File created successfully",
  });
});

export const uploadRoute = route;
