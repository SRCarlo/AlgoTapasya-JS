/*
 * Name: Word Search
 *
 * Approach: Use DFS + Backtracking.
 *
 * Input:
 * board =
 * [
 * ["A","B","C","E"],
 * ["S","F","C","S"],
 * ["A","D","E","E"]
 * ]
 *
 * word = "ABCCED"
 *
 * Output: true
 *
 * Algorithm Used: DFS + Backtracking
 *
 * Key Learning: Graph traversal on grid.
 *
 * Time Complexity: O(rows × cols × 4^L)
 *
 * Space Complexity: O(L)
 */

function exist(board, word) {
  const rows = board.length;

  const cols = board[0].length;

  function dfs(r, c, idx) {
    if (idx === word.length) return true;

    if (r < 0 || c < 0 || r >= rows || c >= cols || board[r][c] !== word[idx])
      return false;

    const temp = board[r][c];

    board[r][c] = "#";

    const found =
      dfs(r + 1, c, idx + 1) ||
      dfs(r - 1, c, idx + 1) ||
      dfs(r, c + 1, idx + 1) ||
      dfs(r, c - 1, idx + 1);

    board[r][c] = temp;

    return found;
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (dfs(r, c, 0)) return true;
    }
  }

  return false;
}

// Input
console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCCED",
  ),
); // true
