const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n').map(line => 
                                                                  line.trim().split(/\s+/).map(Number));

let maxValue = 0;
let maxRow = 0;
let maxCol = 0;

for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
        if (input[i][j] >= maxValue) {
            maxValue = input[i][j];
            maxRow = i + 1;
            maxCol = j + 1;
        }
    }
}

console.log(maxValue);
console.log(maxRow, maxCol);