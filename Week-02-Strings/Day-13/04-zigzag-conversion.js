/*
 * Name: Zigzag Conversion
 *
 * Approach: Simulation
 *
 * Input: s = "PAYPALISHIRING", numRows = 3
 *
 * Output: "PAHNAPLSIIGYIR"
 *
 * Explanation:
 * Move down and up diagonally
 *
 * Algorithm Used: Simulation
 *
 * Key Learning: Pattern simulation
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(n)
 *
 */

function convert(s, numRows) {
  if (numRows === 1) return s;

  let rows = new Array(numRows).fill("").map(() => "");
  let currentRow = 0;
  let goingDown = false;

  for (let char of s) {
    rows[currentRow] += char;

    if (currentRow === 0 || currentRow === numRows - 1) {
      goingDown = !goingDown;
    }

    currentRow += goingDown ? 1 : -1;
  }

  return rows.join("");
}

// Test Cases
console.log(convert("PAYPALISHIRING", 3)); // PAHNAPLSIIGYIR
console.log(convert("ABC", 1)); // ABC
