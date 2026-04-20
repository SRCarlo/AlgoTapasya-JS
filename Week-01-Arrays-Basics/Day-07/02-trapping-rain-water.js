/*
 * Name: Trapping Rain Water
 *
 * Approach: Two Pointer
 *
 * Input: height = [...]
 *
 * Output: 6
 *
 * Explanation:
 * Water = min(leftMax, rightMax) - height
 *
 * Algorithm Used: Two Pointer
 *
 * Key Learning: Maintain boundaries dynamically
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(1)
 *
 */

function trap(height) {
  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let water = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= leftMax) {
        leftMax = height[left];
      } else {
        water += leftMax - height[left];
      }
      left++;
    } else {
      if (height[right] >= rightMax) {
        rightMax = height[right];
      } else {
        water += rightMax - height[right];
      }
      right--;
    }
  }

  return water;
}

// Test Cases
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // 6
console.log(trap([4, 2, 0, 3, 2, 5])); // 9
