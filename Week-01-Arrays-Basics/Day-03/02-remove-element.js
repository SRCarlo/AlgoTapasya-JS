/*
 * Name: Remove Element
 * 
 * Approach: Two Pointer (Filter in-place)
 * 
 * Input: nums = [3,2,2,3], val = 3
 * 
 * Output: 2
 * 
 * Explanation:
 * Move all elements not equal to val to the front.
 * Return new valid length.
 * 
 * Algorithm Used: Two Pointer
 * 
 * Key Learning: Filter array without extra space
 * 
 * Time Complexity: O(n)
 * 
 * Space Complexity: O(1)
 */

function removeElement(nums, val) {
    // Edge case
    if (!nums || nums.length === 0) return 0;

    let insertIndex = 0;

    for (let currentIndex = 0; currentIndex < nums.length; currentIndex++) {
        if (nums[currentIndex] !== val) {
            nums[insertIndex] = nums[currentIndex];
            insertIndex++;
        }
    }

    return insertIndex;
}

// Test Cases
console.log(removeElement([3,2,2,3], 3)); // 2
console.log(removeElement([0,1,2,2,3], 2)); // 3
console.log(removeElement([], 1)); // 0