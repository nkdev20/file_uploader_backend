import fs from "fs";

export const validations = (req: any, res: any, next: any) => {
  if (typeof req.file === "undefined" || typeof req.body === "undefined") {
    return res.status(400).json({
      errors: "problem with sending data",
    });
  }

  let name = req.file.filename;
  let csv = req.file.path;

  console.log(req.file);

  if (!req.file.mimetype.includes("csv")) {
    fs.unlinkSync(req.file.path);
    return res.status(400).json({
      errors: "File format not supported",
    });
  }

  if (req.file.size > 40000000) {
    fs.unlinkSync(req.file.path);
    return res.status(400).json({
      errors: "File is Too large",
    });
  }
  console.log(req.file);

  if (!name || !csv) {
    return res.status(400).json({
      sucess: false,
      message: "All fields are required",
    });
  }

  next();
};
