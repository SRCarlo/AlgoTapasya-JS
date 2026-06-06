/*
 * Name: Disjoint Set Union
 *
 * Approach: Use parent array with path compression.
 *
 * Input:
 * union(1,2)
 * union(2,3)
 *
 * Output: true
 *
 * Algorithm Used: Union Find
 *
 * Key Learning: Component management.
 *
 * Time Complexity: O(α(n))
 *
 * Space Complexity: O(n)
 */

class DSU {
  constructor(n) {
    this.parent = Array(n)
      .fill()
      .map((_, i) => i);
  }

  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }

    return this.parent[x];
  }

  union(a, b) {
    this.parent[this.find(a)] = this.find(b);
  }

  connected(a, b) {
    return this.find(a) === this.find(b);
  }
}

// Input
const dsu = new DSU(5);

dsu.union(1, 2);

dsu.union(2, 3);

// Output
console.log(dsu.connected(1, 3)); // true
