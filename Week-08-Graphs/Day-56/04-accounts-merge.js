/*
 * Name: Accounts Merge
 *
 * Approach:
 * Use Union Find
 * to merge emails.
 *
 * Input:
 * Accounts list
 *
 * Output:
 * Merged accounts
 *
 * Algorithm Used:
 * Disjoint Set Union
 *
 * Key Learning:
 * Component merging.
 *
 * Time Complexity:
 * O(N α(N))
 *
 * Space Complexity:
 * O(N)
 */

function accountsMerge(accounts) {
  const emailMap = new Map();

  const parent = [];

  function find(x) {
    if (parent[x] !== x) {
      parent[x] = find(parent[x]);
    }

    return parent[x];
  }

  function union(a, b) {
    parent[find(a)] = find(b);
  }

  for (let i = 0; i < accounts.length; i++) {
    parent[i] = i;

    for (let j = 1; j < accounts[i].length; j++) {
      const email = accounts[i][j];

      if (emailMap.has(email)) {
        union(i, emailMap.get(email));
      } else {
        emailMap.set(email, i);
      }
    }
  }

  return parent;
}

// Input
console.log(
  accountsMerge([
    ["John", "a@mail.com"],
    ["John", "a@mail.com"],
  ]),
); // [ 0, 0 ] // Merged Group

