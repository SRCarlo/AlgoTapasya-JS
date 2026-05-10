/*
 * Name: Fruit Into Baskets
 *
 * Approach: Sliding Window + Hash Map
 *
 * Input: [1,2,1]
 *
 * Output: 3
 *
 * Explanation:
 * Keep at most 2 fruit types in window
 *
 * Algorithm Used: Sliding Window
 *
 * Key Learning: Distinct count constraint
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(1)
 */

function totalFruit(fruits) {
  const basketMap = new Map();

  let left = 0;
  let maxFruits = 0;

  for (let right = 0; right < fruits.length; right++) {
    basketMap.set(fruits[right], (basketMap.get(fruits[right]) || 0) + 1);

    while (basketMap.size > 2) {
      basketMap.set(fruits[left], basketMap.get(fruits[left]) - 1);

      if (basketMap.get(fruits[left]) === 0) {
        basketMap.delete(fruits[left]);
      }

      left++;
    }

    maxFruits = Math.max(maxFruits, right - left + 1);
  }

  return maxFruits;
}

// Test Cases
console.log(totalFruit([1, 2, 1])); // 3
console.log(totalFruit([0, 1, 2, 2])); // 3
console.log(totalFruit([1, 2, 3, 2, 2])); // 4
