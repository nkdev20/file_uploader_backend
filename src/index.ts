import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path";
import { uploadRoute } from "./routes/uploadRoute";

const app = express();

app.get("/", (req, res) => {});
app.use(express.static("./public"));
app.use("/uploads", express.static("uploads"));

// midllewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

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
