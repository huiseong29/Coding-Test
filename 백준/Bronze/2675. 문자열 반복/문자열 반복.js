const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const T = parseInt(input[0])

for (let i = 1; i <= T; i++) {
    const [repeatCnt, word] = input[i].split(' ');
    const cnt = parseInt(repeatCnt);
    
    let result = [];
    
    for (let j = 0; j < word.length; j++) {
        const char = word[j];
        
        result.push(char.repeat(cnt));
    }
    
    console.log(result.join(''));
}