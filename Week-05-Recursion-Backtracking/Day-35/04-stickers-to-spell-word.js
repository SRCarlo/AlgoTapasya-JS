/*
 * Name: Stickers to Spell Word
 *
 * Approach: DFS + Memoization
 *
 * Input: Stickers array + target
 *
 * Output: Minimum stickers required
 *
 * Explanation: Build target recursively using sticker characters.
 *
 * Algorithm Used: DFS + Memoization
 *
 * Key Learning: State compression recursion
 *
 * Time Complexity: Exponential
 *
 * Space Complexity: O(states)
 */

function minStickers(stickers, target) {
  const memo = new Map();

  memo.set("", 0);

  function dfs(remaining) {
    // Memoized state
    if (memo.has(remaining)) {
      return memo.get(remaining);
    }

    let answer = Infinity;

    for (let sticker of stickers) {
      // Optimization
      if (!sticker.includes(remaining[0])) {
        continue;
      }

      let leftover = remaining;

      for (let char of sticker) {
        leftover = leftover.replace(char, "");
      }

      // Skip useless sticker
      if (leftover.length === remaining.length) {
        continue;
      }

      const next = dfs(leftover);

      if (next !== -1) {
        answer = Math.min(answer, 1 + next);
      }
    }

    memo.set(remaining, answer === Infinity ? -1 : answer);

    return memo.get(remaining);
  }

  return dfs(target);
}

// Test Case
console.log(minStickers(["with", "example", "science"], "thehat")); // 3
