// import mongoose from "mongoose";
const Joi = require('joi');
// import Joi from "joi"
// import * as Joi from "joi";


const Contact = Joi.object({
  name: Joi.string().alphanum().min(3).max(30).required(),

});

module.exports = Contact;
