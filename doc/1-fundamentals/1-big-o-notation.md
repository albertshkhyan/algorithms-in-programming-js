# Big O Notation

## Introduction

Big O notation is a mathematical notation used to describe the growth rate of a function relative to the size of its input. It is commonly used in computer science to analyze algorithms and understand their performance characteristics.

## Understanding Big O

Big O notation provides a way to classify algorithms based on how their runtimes or space requirements grow as the input size increases. It helps us answer questions like:

- How does the runtime of an algorithm change as the size of the input increases?
- How much additional memory does an algorithm require as the input size grows?

## Example: Summing Numbers

Let's consider a simple example to illustrate Big O notation. Suppose we have a function `sumUpTo(n)` that calculates the sum of all numbers from 1 to `n`.

```typescript
function sumUpTo(n: number): number {
    let sum = 0;  // Initialize sum to 0

    // Loop starts from 1 and goes up to n
    for (let i = 1; i <= n; i++) {
        sum += i; // Add the current value of i to sum
    }

    return sum;  // Return the final sum
}
