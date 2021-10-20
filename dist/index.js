"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const uploadRoute_1 = require("./routes/uploadRoute");
const app = (0, express_1.default)();
app.get("/", (req, res) => { });
app.use(express_1.default.static("./public"));
app.use("/uploads", express_1.default.static("uploads"));
// midllewares
app.use((0, morgan_1.default)("dev"));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({
    extended: true,
}));
app.use((0, cors_1.default)());
app.use("/api", uploadRoute_1.uploadRoute);
app.use((req, res) => {
    res.status(404).json({
        errors: "page not found",
    });
});
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
