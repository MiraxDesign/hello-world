javascript
// collegeData.js
const fs = require('fs');  // Require the 'fs' module for file reading

// Define the Data class
class data {
    constructor(students, courses) {
        this.students = students;
        this.courses = courses;
    }
}

let dataCollection = null;  // This will hold the instance of Data class

// Function to initialize the data by reading from students.json and courses.json
function initialize() {
    return new Promise((resolve, reject) => {
        fs.readFile('./data/students.json', 'utf8', (err, studentData) => {
            if (err) {
                reject("Unable to load students");
                return;
            }

            fs.readFile('./data/courses.json', 'utf8', (err, courseData) => {
                if (err) {
                    reject("Unable to load courses");
                    return;
                }

                // Parse the JSON data
                let students = JSON.parse(studentData);
                let courses = JSON.parse(courseData);

                // Create a new instance of the Data class
                dataCollection = new Data(students, courses);

                // Resolve the promise indicating success
                resolve();
            });
        });
    });
}

// Function to get all students
function getAllStudents() {
    return new Promise((resolve, reject) => {
        if (dataCollection.students.length > 0) {
            resolve(dataCollection.students);
        } else {
            reject("No results returned");
        }
    });
}

// Function to get all TAs
function getTAs() {
    return new Promise((resolve, reject) => {
        const TAs = dataCollection.students.filter(student => student.TA === true);
        if (TAs.length > 0) {
            resolve(TAs);
        } else {
            reject("No results returned");
        }
    });
}

// Function to get all courses
function getCourses() {
    return new Promise((resolve, reject) => {
        if (dataCollection.courses.length > 0) {
            resolve(dataCollection.courses);
        } else {
            reject("No results returned");
        }
    });
}

// Export the functions for use in a2.js
module.exports = { initialize, getAllStudents, getTAs, getCourses };


