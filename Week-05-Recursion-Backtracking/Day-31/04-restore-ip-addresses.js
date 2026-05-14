/*
 * Name: Restore IP Addresses
 *
 * Approach: Backtracking
 *
 * Input: "25525511135"
 *
 * Output: Valid IP addresses
 *
 * Explanation:
 * Build valid segments recursively
 *
 * Algorithm Used: Backtracking
 *
 * Key Learning: Recursive partition validation
 *
 * Time Complexity: O(1)
 *
 * Space Complexity: O(1)
 */

function restoreIpAddresses(s) {
  const result = [];

  function backtrack(start, parts, currentIP) {
    // Valid IP formed
    if (parts === 4 && start === s.length) {
      result.push(currentIP.join("."));
      return;
    }

    // Invalid path
    if (parts > 4) {
      return;
    }

    for (let length = 1; length <= 3; length++) {
      if (start + length > s.length) {
        break;
      }

      const segment = s.substring(start, start + length);

      // Leading zero invalid
      if (segment.length > 1 && segment[0] === "0") {
        continue;
      }

      // Range invalid
      if (Number(segment) > 255) {
        continue;
      }

      // Choose
      currentIP.push(segment);

      // Explore
      backtrack(start + length, parts + 1, currentIP);

      // Undo
      currentIP.pop();
    }
  }

  backtrack(0, 0, []);

  return result;
}

// Test Cases
console.log(restoreIpAddresses("25525511135")); // [ '255.255.11.135', '255.255.111.35' ]
console.log(restoreIpAddresses("0000")); // [ '0.0.0.0' ]
