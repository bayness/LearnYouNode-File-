const fs = require('fs');


const text = fs.readFileSync(process.argv[2]);

const array = text.toString().split('\n').length - 1 ;

console.log(array);