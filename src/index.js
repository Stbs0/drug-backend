"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = require("dotenv");
var app_1 = require("./app");
dotenv_1.default.config();
app_1.default.listen(process.env.PORT, function () {
    console.log('Server started on port 3000');
});
