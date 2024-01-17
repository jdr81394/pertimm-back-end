const express = require('express');
const fieldCheck = require("../helpers/fieldCheck.js");
const router = express.Router();
let reports = require("../db/reports.js");
let emails = require("../db/emails.js");


/*
List reports.
Modify a report.
Delete a report.
*/
// List all reports
router.get('/reports', (req, res) => {
  res.status(200).json(reports);
});

router.get("/reports/:id", (req,res) => {
    const targetId = req.params.id;
    const index = reports.findIndex((obj) => obj.id == targetId);
    if(index === -1) {
        res.status(404).send("Record not found");
        return;
    }

    res.status(200).json(reports[index]);
})

// for post they want to make sure the email wasn't already use to create something
router.post('/reports', (req, res) => {


    if(fieldCheck(req.body) === false) {
        res.status(400).send("Bad Request");
        return;
    } 

    // Check to make sure email was not already used before
    // I can use a map to make this a faster access, but requested type was a "tableau"/array

   
    const {email} = req.body.author;

    if(emails.find(({email : e}) => e.trim() === email.trim()) === undefined) {
        // Does not exist, so we can post it
        // first let's push the entire record
        const userId = reports.length === 0 ? 0 : reports[reports.length - 1].id + 1;
       
        const {author, productCode, observations, description, date} = req.body;

        const newReport = {
            id: userId,     // just add it to the end with an id that increments the greatest one
            author,
            productCode,
            observations,
            description,
            date
        };
        
        reports.push(newReport);    // push it into the data structure
        
        const emailId =  emails.length === 0 ? 0 : emails[emails.length -1 ].id + 1

        // then, add the email
        const newEmail = {
            id: emailId,
            userId,
            email,
        }

        emails.push(newEmail);

        res.status(200).json(newReport);    
        return;

    } else {
        const obj = {
            author: {
                email: [
                    "This value exists already"
                ]
            }
        }
        res.status(400).json(obj);    // bad request
        console.error("Email already found");
        return;
    }

});


router.patch("/reports", (req,res) => {

    const {body} = req;

    if(fieldCheck(body) === false) {
        res.status(400).send("Bad Request");
        return;
    } 

    // Make sure email isn't being reused
    const {email} = body.author;

    const emailAlreadyUsed = emails.findIndex(({email: e}) => e === email);

    const {id} = body;


    // user is attempting to use the same email for another post
    if(emailAlreadyUsed !== -1 && emails[emailAlreadyUsed].id !== id) {
        const obj = {
            author: {
                email: [
                    "This email cannot be reused."
                ]
            }
        }
        res.status(400).json(obj);    // bad request
        console.error("Email already used");
        return;
    }



    const index = reports.findIndex(({id: i}) => i === id );

    if(index !== -1) {

        const {author, productCode, observations, description, date} = body;

        const newReport = {id, author, productCode, observations, description, date};

        reports[index] = newReport;

        res.status(200).json(newReport);

    } else {
        res.status(400).send("Bad Request")
        console.log("Trying to update with an email that was already used: " , email);
        return;
    }


});

router.delete("/reports/:id", (req,res) => {
    const targetId = req.params.id * 1;

    console.log(targetId);
    

    if(typeof targetId !== "number" ){
        res.status(400).send("Bad Request")
        console.error("target Id was not a number: " , targetId);
        return;
    }

    // delete out of the email


    const index = reports.findIndex((obj) => obj.id == targetId);

    if(index === -1) {
        res.status(404).send("Bad Request");   // not found
        console.error("Record was not found with this id: " , id);
        return;
    }

    reports = reports.slice(0, index).concat(reports.slice(index + 1));

    emails = emails.filter(({userId}) => userId !== targetId);
    
    res.status(200).json(reports);

})


module.exports = router;