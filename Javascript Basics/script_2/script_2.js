var number = prompt("Choose the number to calculate factorial", "<enter number>")

function factorialize(number){
  var result = 1;
  for(let count = 1; count <= number; count++){
    result = result * count;
    // ou alors result *= count;
}  
console.log(result);
}

factorialize(`The factorial of ${number} is ${result}`);