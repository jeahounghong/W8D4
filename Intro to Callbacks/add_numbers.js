const readline = require('readline');

const reader = readline.createInterface({
  // it's okay if this part is magic; it just says that we want to
  // 1. output the prompt to the standard output (console)
  // 2. read input from the standard input (again, console)

  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft,completionCallback) {
    if (numsLeft > 0) {
        reader.question(`numsLeft: ${numsLeft} : Give me a number\n`, function (answer) {
            //console.log(`Hello ${answer}!`);
            let int = parseInt(answer);
            sum += int;
            console.log(sum);
            addNumbers(sum,numsLeft-1,completionCallback);
        });
    }
    else {
        completionCallback(sum);
    }
}

addNumbers(0, 3, tum => console.log(`Total Sum: ${tum}`));
