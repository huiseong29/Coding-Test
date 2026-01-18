const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const alpha = 'abcdefghijklmnopqrstuvwxyz';
let result = [];

for (let i = 0; i < alpha.length; i++) {
    let foundIndex = -1;
    for (let j = 0; j < input.length; j++) {
        if (input[j] === alpha[i]) {
            foundIndex = j;
            break;   
        }
    }
    result.push(foundIndex);
}

console.log(result.join(' '));