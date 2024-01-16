const express = require('express');
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

    const {author, productCode, observations, description, date} = req.body;

    // Check prenom to prevent greater than 50 characters
    const {firstName, lastName, dateOfBirth, gender, email} = author;

    if(firstName.length  > 50) { // tested
        res.status(400).send("Bad Request");
        console.error("Name is greater than 50 characters");
        return;
    }

    if(lastName.length  > 50) { // tested
        res.status(400).send("Bad Request");
        console.error("Last Name is greater than 50 characters");
        return;
    }

   
    const birthday = new Date(dateOfBirth);  // Determine how many years the date of birth is from today
    const currentDate = new Date();     // Get the current date
    const ageInYears = currentDate.getFullYear() - birthday.getFullYear(); // Calculate the difference in years
 
    if(ageInYears  > 100 ) {    // tested
        res.status(400).send("Bad Request");
        console.error("Older than 100 years");
        return;
    }

    if(ageInYears === NaN) {    // tested
        res.status(400).send("Bad Request");
        console.error("ageInYears is not a number");
        return;
    }

    const tlc = gender.toLowerCase();
    if (!(tlc === "male" || tlc === "female" || tlc === "non-binary")) {    // tested 
        res.status(400).send("Bad Request");
        console.error("Gender is not one of the specified values");
        return;
    }

    if(productCode.length < 10 || productCode.length > 13) {
        res.status(400).send("Bad Request");
        console.error("Product code length was not correct:  " + productCode.length);
        return;
    }

    
    // Check to make sure email was not already used before
    // I can use a map to make this a faster access, but requested type was a "tableau"/array
    if(emails.find(({email : e}) =>e === email) === undefined) {
        // Does not exist, so we can post it
        // first let's push the entire record
        const userId = reports[reports.length - 1].id + 1;
        
        const newReport = {
            id: userId,     // just add it to the end with an id that increments the greatest one
            author,
            productCode,
            observations,
            description,
            date
        };
        
        reports.push(newReport);    // push it into the data structure
        
        // then, add the email
        const newEmail = {
            id: emails[emails.length -1 ].id + 1,
            userId,
            email,
        }

        emails.push(newEmail);

        res.status(200).json(newReport);    
        return;

    } else {
        res.send("Bad Request");    // bad request
        console.error("Email already found");
        return;
    }

});

router.delete("/reports/:id", (req,res) => {
    const targetId = req.params.id;
    
    if(typeof targetId !== "number" ){
        res.status(400).send("Bad Request")
        console.error("target Id was not a number: " , targetId);
        return;
    }

    const index = reports.findIndex((obj) => obj.id == targetId);

    if(index === -1) {
        res.status(404).send("Bad Request");   // not found
        console.error("Record was not found with this id: " , id);
        return;
    }

    reports = reports.slice(0, index).concat(reports.slice(index + 1));
    
    res.status(200).json(reports);

})


module.exports = router;