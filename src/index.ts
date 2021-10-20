import express from "express";
import morgan from "morgan";
import cors from "cors";
import { uploadRoute } from "./routes/uploadRoute";
const cluster = require("cluster");

if (cluster.isMaster) {
  cluster.fork();
} else {
  const app = express();

  app.get("/", (req, res) => {});
  app.use(express.static("./public"));
  app.use("/uploads", express.static("uploads"));

  // middlewares
  app.use(morgan("dev"));

  app.use(cors());

  app.use("/api", uploadRoute);

  app.use((req, res) => {
    res.status(404).json({
      errors: "page not found",
    });
  });

  const port = process.env.PORT || 8000;

  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
}
