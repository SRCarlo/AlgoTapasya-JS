/*
 * Name: 3Sum Closest
 *
 * Approach: Sorting + Two Pointers
 *
 * Input: [-1,2,1,-4], target = 1
 *
 * Output: 2
 *
 * Explanation:
 * Track closest difference
 *
 * Algorithm Used: Two Pointers
 *
 * Key Learning: Min difference tracking
 *
 * Time Complexity: O(n^2)
 *
 * Space Complexity: O(1)
 */

function threeSumClosest(nums, target) {
  nums.sort((a, b) => a - b);
  let closest = Infinity;

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];

      if (Math.abs(target - sum) < Math.abs(target - closest)) {
        closest = sum;
      }

      if (sum < target) left++;
      else right--;
    }
  }

  return closest;
}

// Test Cases
console.log(threeSumClosest([-1, 2, 1, -4], 1)); // 2
console.log(threeSumClosest([0, 0, 0], 1)); // 0
