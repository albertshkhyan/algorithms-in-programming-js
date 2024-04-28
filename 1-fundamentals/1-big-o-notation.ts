// let's start with a simple JavaScript function and then analyze its time complexity.

// Function to sum all numbers up to a given value
function sumUpTo(n: number) {
    let sum = 0;  // Initialize sum to 0

    // Loop starts from 1 and goes up to n
    for (let i = 1; i <= n; i++) {
        // At each iteration, add the current value of i to sum
        // Iteration 1: sum = 0 + 1 = 1
        // Iteration 2: sum = 1 + 2 = 3
        // Iteration 3: sum = 3 + 3 = 6
        // Iteration 4: sum = 6 + 4 = 10
        // Iteration 5: sum = 10 + 5 = 15
        sum += i;
    }

    return sum;  // Return the final sum
}

// Test the function
console.log(sumUpTo(5)); // Output: 15

/*
* This file contains a TypeScript function sumUpTo that calculates the sum of all numbers from 1 up to a given number n.
The function is then tested with an example input (n = 5) to verify its correctness.

Now, we can proceed with analyzing the time complexity of this function.
*/
