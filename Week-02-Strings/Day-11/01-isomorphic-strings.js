/*
 * Name: Isomorphic Strings
 *
 * Approach: Two HashMaps
 *
 * Input: s = "egg", t = "add"
 *
 * Output: true
 *
 * Explanation:
 * Maintain one-to-one mapping both ways
 *
 * Algorithm Used: Hashing
 *
 * Key Learning: Bidirectional mapping
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(n)
 */

function isIsomorphic(s, t) {
  let mapST = new Map();
  let mapTS = new Map();

  for (let i = 0; i < s.length; i++) {
    let c1 = s[i];
    let c2 = t[i];

    if (
      (mapST.has(c1) && mapST.get(c1) !== c2) ||
      (mapTS.has(c2) && mapTS.get(c2) !== c1)
    ) {
      return false;
    }

    mapST.set(c1, c2);
    mapTS.set(c2, c1);
  }

  return true;
}

// Test Cases
console.log(isIsomorphic("egg", "add")); // true
console.log(isIsomorphic("foo", "bar")); // false
