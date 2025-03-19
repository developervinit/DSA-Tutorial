//Here we are learning Recursion technique.

//What is Recursion?
//Recursion is a programming technique where a function calls itself to solve smaller subproblems of a larger problem. It continues to call itself until a base condition (the condition to stop the recursion) is met.

//Recursion is particularly useful for problems that can be divided into smaller subproblems of the same type, such as:-

////1. Traversing trees or graphs
////2. Solving mathematical problems like factorial, Fibonacci series, etc.
////3. Breaking down complex problems into smaller, manageable problems.

//---------------------------------------------------------

//How Recursion Solves Problems?
// Divide the Problem: Break the larger problem into smaller subproblems of the same type.
// Conquer: Solve the smaller subproblem(s) using the same function.
// Combine: Combine the results to solve the original problem.

//Example: Factorial Calculation:- The factorial of a number n is the product of all positive integers up to n. For example, the factorial of 5 (denoted as 5!) is 5 × 4 × 3 × 2 × 1 = 120.

// The factorial of a number n is defined as: n!=n×(n−1)×(n−2)×…×1
// Recursive Formula:  n!=n×(n−1)!
// Base Case: 0!=1 (because the factorial of 0 is 1)

//---------------------------------------------------------

//Code Example:-

function factorial(n) {
  // Base case: when n is 0, return 1
  if (n === 0) {
    return 1;
  }
  // Recursive case: n * factorial of (n-1)
  return n * factorial(n - 1);
}

// Example: Calculate factorial of 5
const result = factorial(5);
console.log("Factorial of 5:", result);

//Step-by-Step explanation of execution:-

//Recursive Calls (Growth Phase):- The function calls itself with decreasing values of n until it reaches the base case.

// factorial(1) calls factorial(0) (Base case reached)
// factorial(2) calls factorial(1)
// factorial(3) calls factorial(2)
// factorial(4) calls factorial(3)
// factorial(5) calls factorial(4)

//Base Case:- The base case is reached, and the function returns a value to the previous call.

//Return Values (Shrink Phase):- The function returns the value to the previous call, and the results are combined to solve the original problem.

// factorial(1) returns 1 * 1 = 1.
// factorial(2) returns 2 * 1 = 2.
// factorial(3) returns 3 * 2 = 6.
// factorial(4) returns 4 * 6 = 24.
// factorial(5) returns 5 * 24 = 120.

//output:- Factorial of 5: 120

//---------------------------------------------------------

//Visualizing the Call Stack:- We are explaining how call stack works when we call factorial(5) function. so there are two phases of call stack which is call-stack-growth and call-stack-shrink.

//Growth Phase:- The call stack grows as each recursive call waits for the next. it goes from bottom to top.

//           factorial(0)
//         factorial(1)
//       factorial(2)
//     factorial(3)
//   factorial(4)
// factorial(5)

//Shrink Phase:- The call stack shrinks as each function returns a value to the previous call. it goes from top to bottom.

// factorial(0) → returns 1
// factorial(1) → 1 * 1 = 1
// factorial(2) → 2 * 1 = 2
// factorial(3) → 3 * 2 = 6
// factorial(4) → 4 * 6 = 24
// factorial(5) → 5 * 24 = 120

//---------------------------------------------------------

//Key Concepts in JavaScript
//1. Base Case: Stops recursion to prevent infinite loops.
//2. Recursive Case: Reduces the problem size to eventually reach the base case.
//3. Call Stack: JavaScript uses a stack to manage function calls; each recursive call adds a frame to the stack.
//4. Performance: Recursive solutions can cause stack overflow for very large inputs; iterative solutions are sometimes more efficient.
