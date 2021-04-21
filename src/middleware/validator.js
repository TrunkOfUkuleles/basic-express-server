'use strict';

const validator = (req, res, next) => {
   req.query["name"] ? next() : next(500)
}

module.exports = validator;