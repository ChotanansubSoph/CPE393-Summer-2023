// Define initial variables
let numberOfStudents = 10;
let studentsEnrolled = 0;

// Simulate enrolling students until the enrollment limit is reached
console.log("👋 Welcome to CPE393 Enrollment:");
while (studentsEnrolled < numberOfStudents) {
  studentsEnrolled++;
  console.log(`️‼️ Student ${studentsEnrolled} enrolled.`);
}

console.log("✅ Enrollment complete. Class is full.");