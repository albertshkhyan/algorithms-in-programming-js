# Linear Search

Linear search, also known as sequential search, is a simple search algorithm that checks each element in a list sequentially until the target element is found or the entire list has been traversed.

## Algorithm
1. Start from the first element of the array.
2. Compare each element with the target element.
3. If the current element matches the target, return its index.
4. If the target element is not found after traversing the entire array, return -1.

## Time Complexity
The time complexity of linear search is O(n), where n is the number of elements in the array. This means that the time taken to search for the target element increases linearly with the size of the array.

## Example
Consider an array `[3, 1, 4, 2, 5]` and a target element `4`. We want to find the index of `4` in the array using linear search.

- Start from index 0: Check if `3` equals `4` (no match).
- Move to index 1: Check if `1` equals `4` (no match).
- Move to index 2: Check if `4` equals `4` (match found). Return index 2.

Therefore, the index of `4` in the array is 2.

## Implementation
```typescript
/**
 * Linear Search
 * 
 * @param {number[]} array - The array to search.
 * @param {number} target - The target element to search for.
 * @returns {number} - The index of the target element if found, otherwise -1.
 */
function linearSearch(array: number[], target: number): number {
    // Loop through each element in the array
    for (let i = 0; i < array.length; i++) {
        // If the current element equals the target, return its index
        if (array[i] === target) {
            return i;
        }
    }
    // If the target element is not found, return -1
    return -1;
}

// Test the function
const array = [3, 1, 4, 2, 5];
const target = 4;
console.log(`Index of ${target} in the array:`, linearSearch(array, target)); // Output: Index of 4 in the array: 2
