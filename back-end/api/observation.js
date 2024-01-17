const express = require('express');
const router = express.Router();
const observations = require("../db/observations.js")
// const dotenv = require('dotenv');
// dotenv.config();

console.log("HERE")

const eTag = process.env.E_TAG;

router.get("/observations", (req,res) => {

    const ifNoneMatch = req.get('If-None-Match');

    console.log("HERE " , ifNoneMatch , eTag)
    if (ifNoneMatch === eTag) {
        // If the client has the same data, respond with a 304 status code
        res.status(304).send();
        return;
    } else {
        // If the client doesn't have the same data, respond with a 200 status code
        // and send the data
        res.status(200).json(observations).set('eTag', eTag);
        return;
    }

    // res.send("HI")
})

module.exports = router;