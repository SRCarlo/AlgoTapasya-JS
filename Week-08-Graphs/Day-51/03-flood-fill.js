/*
 * Name: Flood Fill
 *
 * Approach:
 * Replace connected cells
 * recursively.
 *
 * Input:
 * image =
 * [
 * [1,1,1],
 * [1,1,0],
 * [1,0,1]
 * ]
 *
 * sr = 1
 * sc = 1
 * color = 2
 *
 * Output:
 * [
 * [2,2,2],
 * [2,2,0],
 * [2,0,1]
 * ]
 *
 * Algorithm Used:
 * DFS
 *
 * Key Learning:
 * Grid coloring traversal.
 *
 * Time Complexity:
 * O(rows × cols)
 *
 * Space Complexity:
 * O(rows × cols)
 */

function floodFill(image, sr, sc, color) {
  const old = image[sr][sc];

  if (old === color) return image;

  function dfs(r, c) {
    if (
      r < 0 ||
      c < 0 ||
      r >= image.length ||
      c >= image[0].length ||
      image[r][c] !== old
    ) {
      return;
    }

    image[r][c] = color;

    dfs(r + 1, c);

    dfs(r - 1, c);

    dfs(r, c + 1);

    dfs(r, c - 1);
  }

  dfs(sr, sc);

  return image;
}

// Input
const image = [
  [1, 1, 1],
  [1, 1, 0],
  [1, 0, 1],
];

// Output
console.log(floodFill(image, 1, 1, 2));

/*
Output:
[
 [2,2,2],
 [2,2,0],
 [2,0,1]
]
*/
