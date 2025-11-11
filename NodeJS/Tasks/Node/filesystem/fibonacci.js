const fibonacci = () => { 
 let n1 = 0, n2 = 1, nextTerm; 
 const terms = 10; 
 let result = []; 
 for (let i = 1; i <= terms; i++) { 
 result.push(n1); 
 nextTerm = n1 + n2; 
 n1 = n2; 
 n2 = nextTerm; 
 } 
 return result; 
}; 

 console.log(fibonacci());