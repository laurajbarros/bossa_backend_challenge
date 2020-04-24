var express = require("express");
var toolsRouter = require("./tools");
var app = express();

app.use("/tools/", toolsRouter);

module.exports = app;
