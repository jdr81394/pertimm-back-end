

const fieldCheck = (body) => {

    const {author, productCode, observations, description, date} = body;

        // Check prenom to prevent greater than 50 characters
    const {firstName, lastName, dateOfBirth, gender, email} = author;

    if(!firstName || !lastName || !dateOfBirth || !gender || !email || !productCode) {
        console.error("Missing field");
        return false;
    }

    if(firstName.length  > 50) { // tested
        console.error("Name is greater than 50 characters");
        return false;
    }

    if(lastName.length  > 50) { // tested
        console.error("Last Name is greater than 50 characters");
        return false;
    }

   
    const birthday = new Date(dateOfBirth);  // Determine how many years the date of birth is from today
    const currentDate = new Date();     // Get the current date
    const ageInYears = currentDate.getFullYear() - birthday.getFullYear(); // Calculate the difference in years
 
    if(ageInYears  > 100 ) {    // tested
        console.error("Older than 100 years");
        return false;
    }

    const tlc = gender.toLowerCase();
    if (!(tlc === "male" || tlc === "female" || tlc === "non-binary")) {    // tested 
        console.error("Gender is not one of the specified values");
        return false;
    }

    if(productCode.length < 10 || productCode.length > 13) {
        console.error("Product code length was not correct:  " + productCode.length);
        return false;
    }
    return true;

}

module.exports = fieldCheck;