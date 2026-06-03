/*
 * Name: Number of Provinces
 *
 * Approach:
 * Convert adjacency matrix traversal
 * into DFS exploration.
 *
 * Input:
 * [
 *  [1,1,0],
 *  [1,1,0],
 *  [0,0,1]
 * ]
 *
 * Output:
 * 2
 *
 * Explanation:
 * Cities [0,1] form one province.
 * City [2] forms another.
 *
 * Algorithm Used:
 * DFS
 *
 * Key Learning:
 * Connected components in graph.
 *
 * Time Complexity:
 * O(n²)
 *
 * Space Complexity:
 * O(n)
 */

function findCircleNum(isConnected) {
  const visited = new Array(isConnected.length).fill(false);

  let provinces = 0;

  function dfs(city) {
    visited[city] = true;

    for (let next = 0; next < isConnected.length; next++) {
      if (isConnected[city][next] && !visited[next]) {
        dfs(next);
      }
    }
  }

  for (let city = 0; city < isConnected.length; city++) {
    if (!visited[city]) {
      provinces++;

      dfs(city);
    }
  }

  return provinces;
}

// Input
const isConnected = [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
];

// Output
console.log(findCircleNum(isConnected)); // 2
