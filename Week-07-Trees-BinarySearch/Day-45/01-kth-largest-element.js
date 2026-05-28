/*
 * Name: Kth Largest Element in an Array
 *
 * Approach: Min Heap
 *
 * Input: nums = [3,2,1,5,6,4]  k = 2
 *
 * Output: 5
 *
 * Explanation: Maintain heap of size k.
 *
 * Algorithm Used: Priority Queue (Min Heap)
 *
 * Key Learning: Top-K optimization
 *
 * Time Complexity: O(n log k)
 *
 * Space Complexity: O(k)
 */

function findKthLargest(nums, k) {
  nums.sort((a, b) => b - a);

  return nums[k - 1];
}

// Test Case
console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2)); // 5
