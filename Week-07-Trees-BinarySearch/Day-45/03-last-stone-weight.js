/*
 * Name: Last Stone Weight
 *
 * Approach: Max Heap Simulation
 *
 * Input: [2,7,4,1,8,1]
 *
 * Output: 1
 *
 * Explanation: Smash two heaviest stones.
 *
 * Algorithm Used: Greedy Heap Simulation
 *
 * Key Learning: Repeated maximum extraction
 *
 * Time Complexity: O(n log n)
 *
 * Space Complexity: O(n)
 */

function lastStoneWeight(stones) {
  while (stones.length > 1) {
    stones.sort((a, b) => b - a);

    let first = stones.shift();

    let second = stones.shift();

    if (first !== second) {
      stones.push(first - second);
    }
  }

  return stones.length === 1 ? stones[0] : 0;
}

// Test Case
console.log(lastStoneWeight([2, 7, 4, 1, 8, 1])); // 1
