/*
 * Name: Alien Dictionary
 *
 * Approach: Build graph and perform topological sort.
 *
 * Input:
 * [
 * "baa",
 * "abcd",
 * "abca",
 * "cab",
 * "cad"
 * ]
 *
 * Output: "bdac"
 *
 * Algorithm Used: Topological Sort
 *
 * Key Learning: Ordering dependencies.
 *
 * Time Complexity: O(V + E)
 *
 * Space Complexity: O(V)
 */

function alienOrder(words) {
  const graph = {};

  for (const word of words) {
    for (const ch of word) {
      graph[ch] = [];
    }
  }

  for (let i = 0; i < words.length - 1; i++) {
    const a = words[i];

    const b = words[i + 1];

    for (let j = 0; j < Math.min(a.length, b.length); j++) {
      if (a[j] !== b[j]) {
        graph[a[j]].push(b[j]);

        break;
      }
    }
  }

  const visited = new Set();

  const result = [];

  function dfs(node) {
    visited.add(node);

    for (const next of graph[node]) {
      if (!visited.has(next)) {
        dfs(next);
      }
    }

    result.push(node);
  }

  for (const node in graph) {
    if (!visited.has(node)) {
      dfs(node);
    }
  }

  return result.reverse().join("");
}

// Input
console.log(alienOrder(["baa", "abcd", "abca", "cab", "cad"])); // bdac
