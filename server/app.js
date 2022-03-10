require("env2")(".env")
const express = require("express");
const { join } = require("path");
const compression = require("compression");

const router = require("./router");

const app = express();
const port = app.set('PORT', process.env.PORT || 3000);

app.disable("x-powered-by");
app.use(express.urlencoded({
    extended: false,
}));
app.use(express.json());
app.use(compression());

app.use(express.static(join(__dirname, "..", "public")));
app.use(router);

module.exports = app;