const express = require('express')
const bcrypt = require('bcrypt');
const Joi = require ('joi')
const {Admin} = require('../models/user' )


    async function verifyexistency(req, res, next) {
        let admin= await Admin.findOne({login:req.body.login });
          if (!admin) return res.status(403).send({message:"not an admin"});
             if(bcrypt.compare(req.body.password,admin.password)) {
               console.log(admin);
              next();
              }
              else {
                // Forbidden
                return  res.status(403).send({message:"wrong data"});
              }
          }





      module.exports.verifyexistency= verifyexistency;
