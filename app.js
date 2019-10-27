// Global imports
var express = require("express");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

//DB imports
var { DB_URL, DB_OPTIONS } = require("./config/db");
var mongoose = require("mongoose");

//Routes imports
var vocabRouter = require("./routes/vocabularies");

//App launching
var app = express();
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

//DB config
mongoose.connect(DB_URL, DB_OPTIONS);
const db = mongoose.connection;
db.on("error", error => {
  console.error("Database unavailable");
});
db.once("open", () => {
  console.log("Database connected !");
});

//Routes construction
app.use("/vocabulary", vocabRouter);

module.exports = app;
