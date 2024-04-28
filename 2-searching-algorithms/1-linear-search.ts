/**
 * Linear Search
 *
 * Linear search, also known as sequential search, is a simple search algorithm that checks
 * each element in a list sequentially until the target element is found or the entire list
 * has been traversed.
 *
 * Time Complexity: O(n)
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
