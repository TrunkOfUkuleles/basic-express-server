'use strict';

const validator = (req, res, next) => {
   if (req.query.name){
      next()
   }else{
      res.status(500).send("Gimme a NAME")
   }

}

module.exports = validator;