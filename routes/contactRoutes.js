// import { Router } from "express";
const Router = require("express")
// import { getAllContact, addOneContact, deleteContact } from '../controllers/contactControllers'
const router = Router();
const { addOneContact } = require("../controllers/contactControllers")
// import Contact from "../models/contact";
const Contact = require("../models/contact");

// router.post("/",
//     async (req, res) => {
//         try {
//             if (!req.body.name) {
//                 return res.status(400).json({ error: 'Name is required.' });
//             }
//             else if (!req.body.email) {
//                 return res.status(400).json({ error: 'Email is required.' });
//             }
//             else if (!req.body.mobileNo) {
//                 return res.status(400).json({ error: 'mobileNo is required.' });
//             }
//             else if (!req.body.message) {
//                 return res.status(400).json({ error: 'Message is required.' });
//             }

//             const result = await addOneContact(req.body);
//             res.send({ result: result, message: "product image added successfully" });
//         } catch (error) {
//             console.error(error);
//             return res.status(500).json({ error: error.toString() });
//         }
//     }
// );




router.post('/add', async (req, res, next) => {
    // Validate the request body against the schema
    // const { error, value } = await addOneContact.(req.body);
    const result = await addOneContact(req.body);
    res.send({ result: result, message: "product image added successfully" });

    // if (error) {
    // If validation fails, send a 400 Bad Request response with the validation error details
    // return res.status(400).json({ error: error.details.map(detail => detail.message) });
    // } else {
    //     console.log(result);
    //     // next();
    //     res.json({ message: 'User created successfully 66666666', result });
    // }

    // };

});

// export default router;
module.exports = router
