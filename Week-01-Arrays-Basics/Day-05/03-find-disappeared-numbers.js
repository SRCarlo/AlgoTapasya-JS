/*
 * Name: Find All Numbers Disappeared in an Array

 * Approach: Marking (Index-based)

 * Input: nums = [4,3,2,7,8,2,3,1]

 * Output: [5,6]
 * 
 * Explanation:
 * Mark visited indices negative
 * 
 * Algorithm Used: In-place marking
 * 
 * Key Learning: Use array as hash map
 * 
 * Time Complexity: O(n)
 * 
 * Space Complexity: O(1)
 * 
 */

function findDisappearedNumbers(nums) {
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        let index = Math.abs(nums[i]) - 1;
        if (nums[index] > 0) nums[index] *= -1;
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) result.push(i + 1);
    }

    return result;
}

// Test Cases
console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1])); // [5,6]
console.log(findDisappearedNumbers([1,1])); // [2]