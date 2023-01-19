const word = "hi";
const padend = word.padEnd(25 + word.length / 2, "=");
const padstart = padend.padStart(50, "=");
console.log(padstart);
