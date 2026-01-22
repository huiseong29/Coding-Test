const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().toUpperCase();

const counts = {};

for (let i = 0; i < input.length; i++) {
    const char = input[i];
    
    if (counts[char]) {
        counts[char]++;
    } else {
        counts[char] = 1;
    }
}

let maxCount = 0;
let result = '';
let isDuplicate = false;

for (const char in counts) {
    if (counts[char] > maxCount) {
        maxCount = counts[char];
        result = char;
        isDuplicate = false;
    } 
    else if (counts[char] === maxCount) {
        isDuplicate = true;
    }
}

console.log(isDuplicate ? '?' : result);