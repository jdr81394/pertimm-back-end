Pertimm Back-End Server

1. Table of Contents:
    2. Description of Functionality
    3. Technical Description and Decision
    4. Best Practices Implemented
    5. Installation
    6. Final Words and Technical Recommendations

2. Description of Functionality
    This server allows for GET, POST, PATCH and DELETE requests to be made upon an local array data structure

3. Technical Description and Decision
    3a. Node.js was used 
        i. Node.js is a great, lightweight runtime environment that gives you a great amount of flexibility in how you want to design your server. 
        ii. We were interacting with a local data source, and other heavier frameworks ( such as Java Springboot ) force you to interact with some kind of database. Node gives us flexibility to do this project!
    3b. Typescript was not implemented
        i. Due to the fact that typescript must be recompiled, I decided to not use typescript so I could use nodemon! Nodemon allows me to do fast reloads. This sped up the development time!

4. Best Practices Implemented
    4a. Health Check implemented
    4b. Each route is prefaced with "/api/" followed by the plural of the name of the data source which it was interacting with.
    4c. The route names do NOT describe anything with the action. They are plain and non-descriptive.
    4d. Parameter checks were implemented on the variables coming up from the front-end. This may seem redundant, however, this was done with SECURITY in-mind in order to prevent hackers from taking advantage of our routes!
    4e. Statuses are sent down with every request
    4f. On error, not much information is sent to the user. This is done to prevent giving hackers information about our system! For example:
        i. "An incorrect password" error can tell a hacker that the user DOES exist, and that he should keep trying with this email! This exact error was not implemented, however this is the pattern I have set up for the future.

5. Installation:
    5a. Download the code to a local folder
    5b. If not already installed, please install node and npm from https://nodejs.org/en/download
    5c. Navigate to the root directory of this project and run: "npm install"
    5d. Aftewards, run "npm start".
    ***OR*** 
    5e. instead of "npm start", run "npm run dev" to start it in dev mode!

6. Final Words and Recommendations:
    There were some features that were not implemented in this project due to it being out of the project's scope. However, if the developer would like to continue to build it out, there are some features that are recommended to be created next. They are:
        6a. Check the date to make sure there is no NAN errors.
        6b. Create business logic that would update the email if the user updated their email.