/*
 * Name: Next Greater Element I
 *
 * Approach: Monotonic Stack
 *
 * Input: nums1 = [4,1,2]
 *        nums2 = [1,3,4,2]
 *
 * Output: [-1,3,-1]
 *
 * Explanation: Find next greater element for every number.
 *
 * Algorithm Used: Monotonic Decreasing Stack
 *
 * Key Learning: Stack-based optimization
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(n)
 */

function nextGreaterElement(nums1, nums2) {
  const stack = [];

  const map = new Map();

  // Build next greater map
  for (let number of nums2) {
    while (stack.length > 0 && number > stack[stack.length - 1]) {
      map.set(stack.pop(), number);
    }

    stack.push(number);
  }

  return nums1.map((number) => map.get(number) || -1);
}

// Test Case
console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2])); // [-1,3,-1]
