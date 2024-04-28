// Constant Time Complexity: O(1) 👍
// This function has constant time complexity.
// It always performs the same number of operations, regardless of the input size.
function constantTimeFunction(): void {
    console.log("This function has constant time complexity.");
    console.log("No matter how big the input is, it always does the same amount of work.");
}

// Linear Time Complexity: O(n) 👍
// This function has linear time complexity.
// The number of operations it performs grows linearly with the size of the input.
function linearTimeFunction(n: number): void {
    for (let i = 0; i < n; i++) {
        console.log("This function has linear time complexity.");
        console.log("As the input grows, it does more work, but at a steady rate.");
    }
}

// Quadratic Time Complexity: O(n^2) 😕
// This function has quadratic time complexity.
// The number of operations it performs grows quadratically with the size of the input.
function quadraticTimeFunction(n: number): void {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log("This function has quadratic time complexity.");
            console.log("As the input grows, it does more work, and the rate of increase speeds up.");
        }
    }
}

// Logarithmic Time Complexity: O(log n) 👍
// This function has logarithmic time complexity.
// The number of operations it performs grows logarithmically with the size of the input.
function logarithmicTimeFunction(n: number): void {
    let i = 1;
    while (i < n) {
        console.log("This function has logarithmic time complexity.");
        console.log("As the input grows, it does more work, but the rate of increase slows down.");
        i *= 2; // Doubling the value of i
    }
}

// Exponential Time Complexity: O(2^n) 😕
// This function has exponential time complexity.
// The number of operations it performs grows exponentially with the size of the input.
function exponentialTimeFunction(n: number): void {
    for (let i = 0; i < Math.pow(2, n); i++) {
        console.log("This function has exponential time complexity.");
        console.log("As the input grows, it does a lot more work, and the rate of increase becomes extreme.");
    }
}

// Test functions
console.log("Constant Time Complexity:");
constantTimeFunction();

console.log("\nLinear Time Complexity:");
linearTimeFunction(5);

console.log("\nQuadratic Time Complexity:");
quadraticTimeFunction(3);

console.log("\nLogarithmic Time Complexity:");
logarithmicTimeFunction(16);

console.log("\nExponential Time Complexity:");
exponentialTimeFunction(3);
