"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileUpload = void 0;
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./src/uploads/");
    },
    filename: function (req, file, cb) {
        console.log(file);
        cb(null, "congar" + "-" + Date.now() + path_1.default.extname(file.originalname));
    },
});
const fileFilter = (req, file, cb) => {
    cb(null, true);
};
let upload = (0, multer_1.default)({
    storage: storage,
    fileFilter: fileFilter,
});
exports.fileUpload = upload.single("csvFile");
