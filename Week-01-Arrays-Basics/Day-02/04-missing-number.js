/*
 * Name: Missing Number

 * Approach: Math (Sum Formula)

 * Input: nums = [3,0,1]

 * Output: 2

 * Explanation:
 * Expected sum - actual sum = missing number
 * 
 * Algorithm Used: Arithmetic Formula
 * 
 * Key Learning: Math can optimize brute force
 * 
 * Time Complexity: O(n)
 * 
 * Space Complexity: O(1)
 */

function missingNumber(nums) {
  let n = nums.length;

  let expectedSum = (n * (n + 1)) / 2;
  let actualSum = nums.reduce((sum, num) => sum + num, 0);

  return expectedSum - actualSum;
}

// Test Cases
console.log(missingNumber([3, 0, 1])); // 2
console.log(missingNumber([0, 1])); // 2
