// Starter data
const settings = {
  darkMode: true,
  notifications: false,
  autoSave: true,
  spellCheck: false,
  grammarCheck: true
};

let output = "";

output += "All Settings:\n";
Object.entries(settings).forEach(([key, value]) => {
  output += `${key}: ${value}\n`;
});

output += "\n";

const trueCount = Object.values(settings).filter(v => v === true).length;
output += `Number of enabled settings: ${trueCount}\n\n`;

output += "Enabled Settings Array:\n";
const enabledEntries = Object.entries(settings).filter(([_, value]) => value === true);
enabledEntries.forEach(([key, value]) => {
  output += `${key}: ${value}\n`;
});

output += "\n";

output += "Rebuilt Enabled Settings Object:\n";
const enabledSettings = Object.fromEntries(enabledEntries);
Object.entries(enabledSettings).forEach(([key, value]) => {
  output += `${key}: ${value}\n`;
});

const pre = document.createElement("pre");
pre.textContent = output;
document.body.appendChild(pre);
