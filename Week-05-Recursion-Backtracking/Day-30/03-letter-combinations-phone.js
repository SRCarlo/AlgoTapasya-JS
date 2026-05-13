/*
 * Name: Letter Combinations of Phone Number
 *
 * Approach: Backtracking
 *
 * Input: "23"
 *
 * Output: All letter combinations
 *
 * Explanation: Build combinations recursively
 *
 * Algorithm Used: Backtracking
 *
 * Key Learning: Recursive branching
 *
 * Time Complexity: O(4^n)
 *
 * Space Complexity: O(n)
 */

function letterCombinations(digits) {
  if (digits.length === 0) {
    return [];
  }

  const phoneMap = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  const result = [];

  function backtrack(index, currentString) {
    // Combination completed
    if (index === digits.length) {
      result.push(currentString);
      return;
    }

    const letters = phoneMap[digits[index]];

    for (let char of letters) {
      backtrack(index + 1, currentString + char);
    }
  }

  backtrack(0, "");

  return result;
}

// Test Cases
console.log(letterCombinations("23")); //['ad', 'ae', 'af','bd', 'be', 'bf','cd', 'ce', 'cf']
console.log(letterCombinations("")); //[]
