const factorial = () => { 
const n = 5; 
let result = 1; 
for (i = n; i > 0; i--) { 
result *= i; 
} 
return result; 
}; 

console.log(factorial());