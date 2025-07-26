"use strict"

const express = require("express");
const app = express();
const itemsRoutes = require("./itemsRoutes");

app.use(express.json());
app.use(express.urlencoded());
app.use("/items", itemsRoutes)

module.exports = app;