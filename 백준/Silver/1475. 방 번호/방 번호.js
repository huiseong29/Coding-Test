const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

function solution(input) {
    const roomNumber = String(input);
    const counts = new Array(10).fill(0);
    
    let plasticSet = 0;
    let specialCount = 0;
    
    for (let i = 0; i < roomNumber.length; i++) {
        const num = Number(roomNumber[i]);
        
        if (num === 6 || num === 9) {
            if (counts[6] + counts[9] < plasticSet * 2) {
                counts[num]++;
            } else {
                plasticSet++;
                counts[num]++;
            }
        } else {
            if (counts[num] < plasticSet) {
                counts[num]++;
            } else {
                plasticSet++;
                counts[num]++;
            }
        }
    }
    return plasticSet;
}

console.log(solution(input));