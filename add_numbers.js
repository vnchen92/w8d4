const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers (sum, numsLeft, completionCallback) {
    
   if (numsLeft>0) {
    let response;
    reader.question('Choose a Number', function(res) {
    response = parseInt(res);
    sum += response;
    console.log(`your number is ${res}`);
    console.log(`partial sum = ${sum}`)
    addNumbers(sum, numsLeft-1, completionCallback)
})
    // numsLeft--;
    // sum += response
}
else  {
    completionCallback(sum)
}
    // console.log(`partial sum = ${sum}`)


// completionCallback(sum)

}

console.log(addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`) ));
reader.close()