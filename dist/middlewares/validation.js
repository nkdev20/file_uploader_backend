"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validations = void 0;
const fs_1 = __importDefault(require("fs"));
const validations = (req, res, next) => {
    if (typeof req.file === "undefined" || typeof req.body === "undefined") {
        return res.status(400).json({
            errors: "problem with sending data",
        });
    }
    let name = req.file.filename;
    let csv = req.file.path;
    console.log(req.file);
    if (!req.file.mimetype.includes("csv")) {
        fs_1.default.unlinkSync(req.file.path);
        return res.status(400).json({
            errors: "File format not supported",
        });
    }
    if (req.file.size > 40000000) {
        fs_1.default.unlinkSync(req.file.path);
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
exports.validations = validations;
