
const array = process.argv;

var sum = 0;
var index = 2;

while(index < array.length){

  sum += parseInt(array[index]);
  index++;
}

console.log(sum);