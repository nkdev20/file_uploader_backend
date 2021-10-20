import multer from "multer";
import path from "path";
import { parentPort, workerData } from "worker_threads";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./src/uploads/");
  },
  filename: function (req, file, cb) {
    console.log(file);
    cb(null, "congar" + "-" + Date.now() + path.extname(file.originalname));
  },
});

const fileFilter = (req: any, file: Express.Multer.File, cb: any) => {
  cb(null, true);
};

let upload = multer({
  storage: storage,

  fileFilter: fileFilter,
});

export const fileUpload = upload.single("csvFile");
