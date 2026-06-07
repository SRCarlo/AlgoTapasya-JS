/*
 * Name: Open the Lock
 *
 * Approach: Use BFS to explore all possible lock states.
 *
 * Input: deadends = ["0201","0101"]
 *
 * target = "0202"
 *
 * Output: 6
 *
 * Algorithm Used: BFS
 *
 * Key Learning: State-space traversal.
 *
 * Time Complexity: O(10⁴)
 *
 * Space Complexity: O(10⁴)
 */

function openLock(deadends, target) {
  const dead = new Set(deadends);

  const queue = [["0000", 0]];

  const visited = new Set(["0000"]);

  while (queue.length) {
    const [node, moves] = queue.shift();

    if (dead.has(node)) continue;

    if (node === target) return moves;

    for (let i = 0; i < 4; i++) {
      for (const delta of [-1, 1]) {
        let arr = node.split("");

        arr[i] = ((+arr[i] + delta + 10) % 10).toString();

        const next = arr.join("");

        if (!visited.has(next)) {
          visited.add(next);

          queue.push([next, moves + 1]);
        }
      }
    }
  }

  return -1;
}

// Input
console.log(openLock(["0201", "0101"], "0202")); // 6
