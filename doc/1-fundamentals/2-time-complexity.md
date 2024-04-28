# Time Complexity

Time complexity is an important concept in computer science and algorithm analysis. It measures how the runtime of an algorithm grows as the size of the input grows. Understanding time complexity helps us evaluate the efficiency of algorithms and compare different approaches to solving a problem.

## Constant Time Complexity: O(1) 👍

Constant time complexity means that the runtime of an algorithm remains the same, regardless of the size of the input. It performs a constant number of operations, making it highly efficient.

### Example
```typescript
function constantTimeFunction(): void {
    // This function always performs the same number of operations, regardless of the input size.
}
```

## Linear Time Complexity: O(n) 👍

Linear time complexity means that the runtime of an algorithm grows linearly with the size of the input. As the input size increases, the algorithm performs a proportional number of operations.

### Example
```typescript
function linearTimeFunction(n: number): void {
    for (let i = 0; i < n; i++) {
        // This function performs more operations as the input size increases, but at a steady rate.
    }
}
```

## Quadratic Time Complexity: O(n^2) 😕

Quadratic time complexity means that the runtime of an algorithm grows quadratically with the size of the input. As the input size increases, the algorithm performs a quadratic number of operations.

### Example
```typescript
function quadraticTimeFunction(n: number): void {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            // This function performs more operations as the input size increases, and the rate of increase speeds up.
        }
    }
}
```

## Logarithmic Time Complexity: O(log n) 👍

Logarithmic time complexity means that the runtime of an algorithm grows logarithmically with the size of the input. As the input size increases, the algorithm performs fewer operations at a decreasing rate.

### Example
```typescript
function logarithmicTimeFunction(n: number): void {
    let i = 1;
    while (i < n) {
        // This function performs more operations as the input size increases, but the rate of increase slows down.
        i *= 2; // Doubling the value of i
    }
}
```

## Exponential Time Complexity: O(2^n) 😕

Exponential time complexity means that the runtime of an algorithm grows exponentially with the size of the input. As the input size increases, the algorithm performs an exponential number of operations, leading to inefficient performance.

### Example
```typescript
function exponentialTimeFunction(n: number): void {
    for (let i = 0; i < Math.pow(2, n); i++) {
        // This function performs a lot more operations as the input size increases, and the rate of increase becomes extreme.
    }
}
```

Understanding the time complexity of algorithms allows us to make informed decisions about which approach to use when solving problems.
```
This document provides a simple explanation of different time complexity classes, along with examples in TypeScript. Understanding time complexity helps us evaluate the efficiency of algorithms and make informed decisions when designing solutions to problems.
