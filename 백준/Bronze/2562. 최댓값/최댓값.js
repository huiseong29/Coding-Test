const fs = require('fs');

const input = fs.readFileSync(0).toString().trim().split(/\s+/).map(Number);

let maxValue = input[0];
for (let i = 1; i < input.length; i++) {
    if (input [i] > maxValue) {
        maxValue = input[i];
    }
}

let maxIndex = 0;
for (let i = 0; i < input.length; i++) {
    if (input[i] === maxValue) {
        maxIndex = i + 1;
        break;
    }
}

console.log(maxValue);
console.log(maxIndex);