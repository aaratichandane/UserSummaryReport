'use strict'
const express = require("express");
const router = express.Router();
const userBL = require('../BL/userBL');
const requestValidator = require("../middleware/requestValidator");

router.get('/reports/age-summary-group-by-nationality',requestValidator,(req,res)=>{
    userBL.getAgeSummaryReportByNationality(req.query.gender)
    .then((users)=>{
        res.send(users);
    }).catch((err)=>{
        res.send(err);
    })
});
module.exports = router;