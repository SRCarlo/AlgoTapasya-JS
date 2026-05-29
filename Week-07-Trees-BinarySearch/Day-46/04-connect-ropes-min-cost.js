/*
 * Name: Connect Ropes to Minimize Cost
 *
 * Approach: Greedy Min Heap
 *
 * Input: [4,3,2,6]
 *
 * Output: 29
 *
 * Explanation: Combine smallest ropes first.
 *
 * Algorithm Used: Greedy Heap Strategy
 *
 * Key Learning: Cost minimization
 *
 * Time Complexity: O(n log n)
 *
 * Space Complexity: O(n)
 */

function connectRopes(ropes) {
  let totalCost = 0;

  ropes.sort((a, b) => a - b);

  while (ropes.length > 1) {
    let first = ropes.shift();

    let second = ropes.shift();

    let cost = first + second;

    totalCost += cost;

    ropes.push(cost);

    ropes.sort((a, b) => a - b);
  }

  return totalCost;
}

// Test Case
console.log(connectRopes([4, 3, 2, 6])); //29
