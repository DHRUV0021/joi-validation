
// import Contact from "../models/contact";
const Contact = require("../models/contact")

export const addOneContact = async (d) => {
  console.log(d, "final output");
  return await Contact.validate(d);
};
