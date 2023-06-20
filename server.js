const express = require("express");
const path = require("path");
const app = express();
const port = 5000;
const mainRouter = require("./routes/index");
const productRouter = require("./routes/products");
var bodyParser = require("body-parser");
const ErrorHandler = require("./errors/ErrorHandler");
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(productRouter);
app.use(express.json());
app.use(mainRouter);
app.use((req, res, next) => {
  return res.json({ message: "page not found" });
});
app.use((err, req, res, next) => {
  if (err instanceof ErrorHandler) {
    res.json({
      error: {
        message: err.message,
        status: err.status,
      },
    });
  } else {
    res.status(500).json({
      error: {
        message: err.message,
        status: err.status,
      },
    });
  }
});
app.listen(port, () => {
  console.log(`listeningg on ${port}`);
});
