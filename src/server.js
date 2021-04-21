"use strict";

const express = require("express");
const app = express();

const notHere = require("./error-handlers/404.js");
const errors = require("./error-handlers/500.js");
const logger = require("./middleware/logger.js");
const validator = require("./middleware/validator.js");

app.use(express.json());
app.use(logger);
app.get("/person", validator, (req, res) => {
  // if (req.status === 500){res.status(500).send('no workie')}
  let build = { name: `${req.query.name}` };
  res.status(200).send(build);
});

app.get("/", (req, res) => {
  res.status(200).send("here we go again");
});

//error
app.use("*", notHere);
app.use(errors);

module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => {
      console.log(`server up: ${port}`);
    });
  },
};
