// import express from "express";
const express = require('express')
const router = express.Router();

// import contact from './contactRoutes'
const contact = require("../routes/contactRoutes")

router.use("/api/contact", contact);

// export default router;
module.exports = router
