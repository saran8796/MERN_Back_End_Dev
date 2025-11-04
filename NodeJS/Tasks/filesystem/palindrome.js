const palindrome = () => { 
 const given_str = 'Hello'; 

 if (given_str === given_str.split('').reverse().join('')) { 
 return 'Palindrome'; 
 } else { 
 return 'Not a Palindrome'; 
 } 
}; 

console.log(palindrome());