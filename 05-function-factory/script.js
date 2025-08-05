// Starter examples

const makeMultiplier = (factor) => (num) => num * factor;

const double = makeMultiplier(2);
const triple = makeMultiplier(3);

const makeGreeter = (greeting) => (name) => `${greeting}, ${name}!`;

const sayHi = makeGreeter("Hi");
const sayHello = makeGreeter("Hello");

const multiplierOutput = document.createElement("pre");
multiplierOutput.textContent =
  "Multiplier Outputs:\n" +
  `double(5) = ${double(5)}\n` +
  `triple(4) = ${triple(4)}\n`;
multiplierOutput.style.color = "blue";
document.body.appendChild(multiplierOutput);

const greeterOutput = document.createElement("pre");
greeterOutput.textContent =
  "Greeter Outputs:\n" +
  `sayHi("Shamae") = ${sayHi("Shamae")}\n` +
  `sayHello("Trisha") = ${sayHello("Trisha")}\n`;
greeterOutput.style.color = "green";
document.body.appendChild(greeterOutput);
