// Define initial variables
let numberOfStudents = 10;
let studentsEnrolled = 0;

// Simulate enrolling students until the enrollment limit is reached
console.log("👋 Welcome to CPE393 Enrollment:");
do {
  studentsEnrolled++;
  console.log(`️‼️ Student ${studentsEnrolled} enrolled.`);
} while (studentsEnrolled < numberOfStudents);

console.log("✅ Enrollment complete. Class is full.");