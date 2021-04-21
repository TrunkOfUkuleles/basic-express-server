  
'use strict';

function lostHandler (err, req, res, next) {
  res.status(404).send({ msg: 'route not found', error: err });
  next();
}

module.exports = lostHandler;