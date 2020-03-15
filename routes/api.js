'use strict'
const express = require("express");
const app = express();

let usercontroller = require("../services/usercontroller.js");

app.use('/users',usercontroller);

module.exports = app;