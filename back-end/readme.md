Pertimm Back-End Server

1. Table of Contents:&nbsp;
    2. Description of Functionality
    3. Technical Description and Decision
    4. Best Practices Implemented
    5. Installation
    6. Final Words and Technical Recommendations

2. Description of Functionality:&nbsp;
    This server allows for GET, POST, PATCH and DELETE requests to be made upon an local array data structure

3. Technical Description and Decision:&nbsp;
    1. Node.js was used.
        1. Node.js is a great, lightweight runtime environment that gives you a great amount of flexibility in how you want to design your server.
        2. We were interacting with a local data source, and other heavier frameworks ( such as Java Springboot ) force you to interact with some kind of database. Node gives us flexibility to do this project!
    2. Typescript was not implemented.
        1. Due to the fact that typescript must be recompiled, I decided to not use typescript so I could use nodemon! Nodemon allows me to do fast reloads. This sped up the development time!

4. Best Practices Implemented:&nbsp;
    1. Health Check implemented.
    2. Each route is prefaced with "/api/" followed by the plural of the name of the data source which it was interacting with.
    3. The route names do NOT describe anything with the action. They are plain and non-descriptive.
    4. Parameter checks were implemented on the variables coming up from the front-end. This may seem redundant, however, this was done with SECURITY in-mind in order to prevent hackers from taking advantage of our routes!
    5. Statuses are sent down with every request
    6. On error, not much information is sent to the user. This is done to prevent giving hackers information about our system! For example:
        1. "An incorrect password" error can tell a hacker that the user DOES exist, and that he should keep trying with this email! This exact error was not implemented, however this is the pattern I have set up for the future.

5. Installation:&nbsp;
    1. Download the code to a local folder
    2. If not already installed, please install node and npm from https://nodejs.org/en/download
    3. Navigate to the root directory of this project and run: "npm install"
    4. Aftewards, run "npm start".
    ***OR***
    5. instead of "npm start", run "npm run dev" to start it in dev mode!

6. Final Words and Recommendations:&nbsp;
    There were some features that were not implemented in this project due to it being out of the project's scope.&nbsp;
    However, if the developer would like to continue to build it out, there are some features that are recommended to be created next. They are:&nbsp;
    1. Check the date to make sure there is no NAN errors.
    2. Create business logic that would update the email if the user updated their email in the patch route.