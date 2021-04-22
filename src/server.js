"use strict";

const express = require("express");
const app = express();

const lostHandler = require("./error-handlers/404.js");
const errors = require("./error-handlers/500.js");

const logger = require("./middleware/logger.js");
const validator = require("./middleware/validator.js");

const testRoute  = require('./routes/test-route.js')
// const bookRoute = require("./routes/book-route.js");
// const snackRoute = require("./routes/snack-route.js");

app.use(express.json());
app.use(logger);

// app.use(bookRoute, validator);
// app.use(snackRoute);
app.use( testRoute, validator )
app.get("/", (req, res) => {
  res.status(200).send("here we go again");
});

//error
app.use("*", lostHandler);
app.use(errors);

module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => {
      console.log(`server up: ${port}`);
    });
  },
};
