const primeNum = () => { 
const num = 15; 
for (i = 0; i <= num; i++) { 
if (num % i === 0 && i !== 1 && i !== num) { 
return 'Not a Prime Number'; 
} 
} 

return 'It is a Prime Number'; 
}; 
console.log(primeNum());