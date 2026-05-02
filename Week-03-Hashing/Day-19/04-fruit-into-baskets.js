/*
 * Name: Fruit Into Baskets
 *
 * Approach: Sliding Window (At Most 2 Distinct)
 *
 * Input: [1,2,1]
 *
 * Output: 3
 *
 * Explanation:
 * Maintain window with max 2 distinct fruits
 *
 * Algorithm Used: Sliding Window
 *
 * Key Learning: At most 2 pattern
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(1)
 */

function totalFruit(fruits) {
  let map = new Map();
  let left = 0;
  let maxLen = 0;

  for (let right = 0; right < fruits.length; right++) {
    map.set(fruits[right], (map.get(fruits[right]) || 0) + 1);

    while (map.size > 2) {
      map.set(fruits[left], map.get(fruits[left]) - 1);
      if (map.get(fruits[left]) === 0) map.delete(fruits[left]);
      left++;
    }

    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}

// Test Cases
console.log(totalFruit([1, 2, 1])); // 3
console.log(totalFruit([0, 1, 2, 2])); // 3
