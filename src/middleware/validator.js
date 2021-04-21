'use strict';

const validator = (error, req, res, next) => {
   req.query.name ? next() : next(500)
}

module.exports = validator;