  
'use strict';

function lostHandler (err, req, res, next) {
  res.status(404).send({ msg: 'not found' });
  next();
}

module.exports = lostHandler;