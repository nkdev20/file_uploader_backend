"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadRoute = void 0;
const express_1 = require("express");
const uploads_1 = require("../middlewares/uploads");
const validation_1 = require("../middlewares/validation");
const route = (0, express_1.Router)();
route.post("/upload", uploads_1.fileUpload, validation_1.validations, (req, res) => {
    res.json("File created succeshylly");
});
exports.uploadRoute = route;
