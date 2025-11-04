function isArmstrong(number) { 
let digits = number.toString(); 
let power = digits.length; 
let sum = 0; 

for (let digit of digits) { 
sum += Math.pow(parseInt(digit), power); 
} 

return sum === number; 
} 

let num = 153; 
if (isArmstrong(num)) { 
console.log(`${num} is an Armstrong number`); 
} else { 
console.log(`${num} is not an Armstrong number`); 
}