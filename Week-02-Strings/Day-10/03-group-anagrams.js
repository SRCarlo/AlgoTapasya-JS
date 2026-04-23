/*
 * Name: Group Anagrams
 *
 * Approach: HashMap + Sorted Key
 *
 * Input: ["eat","tea","tan","ate","nat","bat"]
 *
 * Output: grouped arrays
 *
 * Explanation:
 * Sorted string acts as unique key
 *
 * Algorithm Used: Hashing
 *
 * Key Learning: Grouping via transformation
 *
 * Time Complexity: O(n * k log k)
 *
 * Space Complexity: O(n)
 */

function groupAnagrams(strs) {
  let map = new Map();

  for (let str of strs) {
    let key = str.split("").sort().join("");

    if (!map.has(key)) {
      map.set(key, []);
    }

    map.get(key).push(str);
  }

  return Array.from(map.values());
}

// Test Cases
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagrams([""]));
