// Starter data
const students = [
  { name: "Anna", grade: 92 },
  { name: "Ben", grade: 78 },
  { name: "Clara", grade: 88 },
  { name: "David", grade: 84 },
  { name: "Ella" } // no grade
];

let output = "";

const origNames = students.map(student => student.name).join(", ");
const upperNames = students.map(student => student.name.toUpperCase()).join(", ");
output += "Original Names: " + origNames + "\n";
output += "UPPERCASE NAMES: " + upperNames + "\n\n";

output += "Students with grades ≥ 85:\n";
students.forEach(student => {
  if ((student.grade ?? 0) >= 85) {
    output += "> " + student.name + " - " + student.grade + "\n";
  }
});
output += "\n";

const total = students.reduce((sum, student) => sum + (student.grade ?? 0), 0);
const average = total / students.length;
output += "Average Grade: " + average + "\n\n";

const displayStudent = ({ name, grade }) =>
  `> ${name} - Grade: ${grade ?? "No Grade"}`;

output += "All Students:\n";
students.forEach(student => {
  output += displayStudent(student) + "\n";
});

const pre = document.createElement("pre");
pre.textContent = output;
pre.style.color = "blue";
document.body.appendChild(pre);
