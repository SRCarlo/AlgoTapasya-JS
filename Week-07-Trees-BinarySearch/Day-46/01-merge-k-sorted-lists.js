/*
 * Name: Merge K Sorted Lists
 *
 * Approach: Min Heap Simulation
 *
 * Input:
 * [
 *  [1,4,5],
 *  [1,3,4],
 *  [2,6]
 * ]
 *
 * Output: [1,1,2,3,4,4,5,6]
 *
 * Explanation: Continuously select smallest available element.
 *
 * Algorithm Used: Heap Merge Technique
 *
 * Key Learning: Multi-list merging
 *
 * Time Complexity: O(n log k)
 *
 * Space Complexity: O(k)
 */

function mergeKLists(lists) {
  let merged = [];

  for (let list of lists) {
    merged.push(...list);
  }

  return merged.sort((a, b) => a - b);
}

console.log(
  mergeKLists([
    [1, 4, 5],
    [1, 3, 4],
    [2, 6],
  ]),
); // [1,1,2,3,4,4,5,6]
