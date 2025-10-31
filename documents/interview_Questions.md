// interview Questions - 8/9/2025



Lexical scope

Different between sum and every

popup box

use strict



object . freeze methods





Q1: Main difference between rest parameters and the arguments object?



Answer: The primary difference is that rest parameters are a true array, whereas the arguments object is only "array-like". Rest parameters have access to all standard array methods like map() and filter() without needing conversion, and they contain only the arguments after their position in the function signature.



Q2: When might you use a default parameter with an arrow function?



Answer: Combining a default parameter with an arrow function is useful for creating concise callbacks that have built-in fallback values. For example, when using an array method like reduce(), a default parameter can prevent errors by providing a fallback value for potentially missing data.



###### Scenario Based Questions:



Q1: You have a list of products displayed on the screen. When a user clicks the "Add to Cart" button, the cart count in the header should update. How would you implement this using useState?



Answer:

* The cart count state lives in a common parent component (e.g., App), since both the products and header need access to it.
* When "Add to Cart" is clicked, update the state using the function provided by useState.
* The header automatically re-renders to display the latest count whenever the state changes.



Q2: A counter application increments the number each time a button is clicked. Why does the entire component re-render each time the count changes? How do you minimize unnecessary re-rendering?



Answer:

* In React, when a state variable created by useState updates, it causes the whole component to re-render because the UI needs to show the latest state.
* If there are nested child components, all child components will also re-render unless they are optimized.


-----------------------------------------------------------------------------------


// interview questions - 28/10/2025

1.	usereduce
2. redex
3. customhook
4. HOC
5. OUTLET
6. LasyLoading
7. some upgrade things in react


-----------------------------------------------------------------------------------



// interview Questions - 29/10/2025



1. what is react performance optimization?

2\. what are react hooks, adv, disadv, usage.

3\. diff between useEffect, useMemo, useCallback, adv \& disadv, usages.

4\. diff between state and useState.

5\. what are props?

6\. Is there any alternate methods for higher order component?



