import fs from "fs";

// create a new file and write data to it

fs.writeFile(
  "fibonacci.js",
  "const fibonacci = () => { \n let n1 = 0, n2 = 1, nextTerm; \n const terms = 10; \n let result = []; \n for (let i = 1; i <= terms; i++) { \n result.push(n1); \n nextTerm = n1 + n2; \n n1 = n2; \n n2 = nextTerm; \n } \n return result; \n}; \n\n console.log(fibonacci());",
  (err) => {
    if (err) throw err;
    console.log("File created and data written successfully");
  }
);

fs.writeFile(
  "palindrome.js",
  "const palindrome = () => { \n const given_str = 'Hello'; \n\n if (given_str === given_str.split('').reverse().join('')) { \n return 'Palindrome'; \n } else { \n return 'Not a Palindrome'; \n } \n}; \n\nconsole.log(palindrome());",
  (err) => {
    if (err) throw err;
    console.log("File created and data written successfully");
  }
);

fs.writeFile(
  "factorial.js",
  "const factorial = () => { \nconst n = 5; \nlet result = 1; \nfor (i = n; i > 0; i--) { \nresult *= i; \n} \nreturn result; \n}; \n\nconsole.log(factorial());",
  (err) => {
    if (err) throw err;
    console.log("File created and data written successfully");
  }
);

fs.writeFile(
  "prime_num.js",
  "const primeNum = () => { \nconst num = 15; \nfor (i = 0; i <= num; i++) { \nif (num % i === 0 && i !== 1 && i !== num) { \nreturn 'Not a Prime Number'; \n} \n} \n\nreturn 'It is a Prime Number'; \n}; \nconsole.log(primeNum());",
  (err) => {
    if (err) throw err;
    console.log("File created and data written successfully");
  }
);

fs.writeFile(
  "amstrong.js",
  "function isArmstrong(number) { \nlet digits = number.toString(); \nlet power = digits.length; \nlet sum = 0; \n\nfor (let digit of digits) { \nsum += Math.pow(parseInt(digit), power); \n} \n\nreturn sum === number; \n} \n\nlet num = 153; \nif (isArmstrong(num)) { \nconsole.log(`${num} is an Armstrong number`); \n} else { \nconsole.log(`${num} is not an Armstrong number`); \n}",
  (err) => {
    if (err) throw err;
    console.log("File created and data written successfully");
  }
);

// reading the files

fs.readFile("fibonacci.js", (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});

fs.readFile("palindrome.js", (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});

fs.readFile("factorial.js", (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});

fs.readFile("prime_num.js", (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});

fs.readFile("amstrong.js", (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});
