// Starter data
const cart = [
  { name: "Pen", price: 20, quantity: 3 },
  { name: "Notebook", price: 50, quantity: 2 },
  { name: "Pencil", price: 10, quantity: 5 }
];

let output = "";

const prices = cart.map(item => ({
  name: item.name,
  totalPrice: item.price * item.quantity
}));
prices.forEach(item => {
  const line = `${item.name} --- ₱${item.totalPrice}`;
  output += line + "\n";
});

output += "\n";

const descriptions = cart.map(item => `${item.name} - ₱${item.price}`);
descriptions.forEach(desc => {
  output += desc + "\n";
});

output += "\n";

output += "------------------------------\n";
const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
output += `The total price is: ₱${totalPrice}\n`;
output += "------------------------------\n";

const pre = document.createElement("pre");
pre.textContent = output;
pre.style.color = "blue"; 
document.body.appendChild(pre);
