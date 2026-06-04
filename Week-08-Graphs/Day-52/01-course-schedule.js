/*
 * Name: Course Schedule
 *
 * Approach:
 * Build graph and use DFS.
 * Detect cycle to determine
 * if all courses can be completed.
 *
 * Input:
 * numCourses = 2
 * prerequisites = [[1,0]]
 *
 * Output: true
 *
 * Explanation: Complete course 0 first, then course 1.
 *
 * Algorithm Used: DFS + Cycle Detection
 *
 * Key Learning: DAG validation.
 *
 * Time Complexity: O(V + E)
 *
 * Space Complexity: O(V)
 */

function canFinish(numCourses, prerequisites) {
  const graph = Array(numCourses)
    .fill()
    .map(() => []);

  for (const [a, b] of prerequisites) {
    graph[b].push(a);
  }

  const visited = new Set();

  const path = new Set();

  function dfs(node) {
    if (path.has(node)) {
      return false;
    }

    if (visited.has(node)) {
      return true;
    }

    visited.add(node);

    path.add(node);

    for (const next of graph[node]) {
      if (!dfs(next)) {
        return false;
      }
    }

    path.delete(node);

    return true;
  }

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) {
      return false;
    }
  }

  return true;
}

// Input
console.log(canFinish(2, [[1, 0]])); // true
