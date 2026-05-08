/*
 * Name: Count Number of Nice Subarrays
 *
 * Approach: Sliding Window (At Most Trick)
 *
 * Input: [1,1,2,1,1], k = 3
 *
 * Output: 2
 *
 * Explanation:
 * exactly(k) = atMost(k) - atMost(k - 1)
 *
 * Algorithm Used: Sliding Window
 *
 * Key Learning: Exact count transformation
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(1)
 */

function numberOfSubarrays(nums, k) {
  return atMost(nums, k) - atMost(nums, k - 1);
}

function atMost(nums, k) {
  let left = 0;
  let count = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] % 2 !== 0) {
      k--;
    }

    while (k < 0) {
      if (nums[left] % 2 !== 0) {
        k++;
      }
      left++;
    }

    count += right - left + 1;
  }

  return count;
}

// Test Cases
console.log(numberOfSubarrays([1, 1, 2, 1, 1], 3)); // 2
console.log(numberOfSubarrays([2, 4, 6], 1)); // 0
