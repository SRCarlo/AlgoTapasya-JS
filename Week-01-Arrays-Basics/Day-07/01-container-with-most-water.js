/*
 * Name: Container With Most Water
 *
 * Approach: Two Pointer
 *
 * Input: height = [1,8,6,2,5,4,8,3,7]
 *
 * Output: 49
 *
 * Explanation:
 * Area depends on min height and width.
 * Move smaller height pointer to maximize area.
 *
 * Algorithm Used: Two Pointer
 *
 * Key Learning: Greedy movement based on constraint
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(1)
 *
 */

function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let maxWater = 0;

  while (left < right) {
    let width = right - left;
    let h = Math.min(height[left], height[right]);

    maxWater = Math.max(maxWater, width * h);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxWater;
}

// Test Cases
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
console.log(maxArea([1, 1])); // 1
