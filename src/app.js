// Creation and configuration of the Express APP
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// configuración  de rutas


module.exports = app;
