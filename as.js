/*********************************************************************************
*  WEB700 – Assignment 2
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Miracle Uchime Student ID: 133177238 Date: 27/09/2024
*
********************************************************************************/ 


// a2.js

const collegeData = require('./modules/collegeData.js');  // Import the collegeData module

// Initialize the data
collegeData.initialize()
    .then(() => {
        console.log("Data successfully initialized");

        // Get and display all students
        return collegeData.getAllStudents();
    })
    .then((students) => {
        console.log(`Successfully retrieved ${students.length} students`);

        // Get and display all courses
        return collegeData.getCourses();
    })
    .then((courses) => {
        console.log(`Successfully retrieved ${courses.length} courses`);

        // Get and display all TAs
        return collegeData.getTAs();
    })
    .then((TAs) => {
        console.log(`Successfully retrieved ${TAs.length} TAs`);
    })
    .catch((err) => {
        console.error(err);
    });
