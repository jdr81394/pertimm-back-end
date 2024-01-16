/*
Data structure
- id: int primary key
• Author: string
o First Name: string - max 50 characters.
o Last Name: string - max 50 characters.
o Date of Birth: date - not more than 100 years ago.
o Gender: selection - [Male / Female / Non-binary].
o Email: valid email – Unique. (See Annex 4)
• Product Code: numeric string – minimum 10 and maximum 13 characters.
• Observations: checkbox selection - Array from an API route. (See Annex 3)
• Description: a text field.
• Date: a date field.
*/
// Array of Type ^ jake - does it need to be a table?
let table = [  
    {
        id: 0,
        author: {
        firstName: 'John',
        lastName: 'Doe',
        dateOfBirth: '1980-01-15',
        gender: 'Male',
        email: 'john.doe@example.com'
        },
        productCode: '1234567890',
        observations: [0, 1],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        date: '2022-01-16'
    },
    {
        id: 1,
        author: {
        firstName: 'Jane',
        lastName: 'Smith',
        dateOfBirth: '1995-05-20',
        gender: 'Female',
        email: 'jane.smith@example.com'
        },
        productCode: '9876543210123',
        observations: [2, 1],
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        date: '2022-01-17'
    },
    {
        id: 2,
        author: {
          firstName: "Alice",
          lastName: "Johnson",
          dateOfBirth: "1985-03-10",
          gender: "Female",
          email: "alice.j@example.com"
        },
        productCode: "9876543210987",
        observations: [1, 0],
        description: "This is a sample description for Alice's entry.",
        date: "2022-02-20"
      },
      {
        id: 3,
        author: {
          firstName: "Bob",
          lastName: "Williams",
          dateOfBirth: "1978-11-05",
          gender: "Male",
          email: "bob.w@example.com"
        },
        productCode: "1122334455667",
        observations: [0, 1],
        description: "A description for Bob's entry.",
        date: "2022-03-15"
      },
      {
        id: 4,
        author: {
          firstName: "Charlie",
          lastName: "Miller",
          dateOfBirth: "1990-07-18",
          gender: "Non-binary",
          email: "charlie.m@example.com"
        },
        productCode: "9988776655443",
        observations: [1, 2],
        description: "Charlie's entry description goes here.",
        date: "2022-04-10"
      }  
];

module.exports = table;