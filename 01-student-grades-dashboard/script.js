// Starter data
const students = [
  { name: "Anna", grade: 92 },
  { name: "Ben", grade: 78 },
  { name: "Clara", grade: 88 },
  { name: "David", grade: 84 },
  { name: "Ella" } // no grade, should use default
];

const origNames = students.map(student => student.name);
const upperCased = students.map(student => student.name.toUpperCase());

console.log(`Original Names: ${origNames.join(", ")}`);
console.log(`Updated Names: ${upperCased.join(", ")}`);

console.log(" ");

const grades = students.filter(student => (student.grade ?? 0) >= 85);
console.log("The students that have grades greater than or equal to 85 are:");
grades.forEach(student => {
  console.log(`${student.name} - ${student.grade}`);
});

console.log(" ");

const totalGrades = students.reduce((sum, student) => sum + (student.grade ?? 0), 0);
const avg = totalGrades / students.length;
console.log(`The average is: ${avg}`);

console.log(" ");

const displayStudent = ({ name, grade }) => 
  `Student: ${name} - Grade: ${grade ?? "No Grade"}`;

students.forEach(student => {
  console.log(displayStudent(student));
});

console.log(" ");

const displayStudents = ({ name, grade }) => 
  `Student: ${name} - Grade: ${grade ?? 0}`;

students.forEach(student => {
  console.log(displayStudents(student));
});