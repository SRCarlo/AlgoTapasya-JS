/*
 * Name: Subarray Sums Divisible by K
 * 
 * Approach: Prefix Sum + Modulo Hashing
 * 
 * Input: nums = [4,5,0,-2,-3,1], k = 5
 * 
 * Output: 7
 * 
 * Explanation:
 * Same remainder → divisible subarray
 * 
 * Algorithm Used: Prefix Sum
 * 
 * Key Learning: remainder grouping
 * 
 * Time Complexity: O(n)
 * 
 * Space Complexity: O(k)
 */

function subarraysDivByK(nums, k) {
    let map = new Map();
    map.set(0, 1);

    let sum = 0;
    let count = 0;

    for (let num of nums) {
        sum += num;
        let mod = ((sum % k) + k) % k;

        if (map.has(mod)) {
            count += map.get(mod);
        }

        map.set(mod, (map.get(mod) || 0) + 1);
    }

    return count;
}

// Test Cases
console.log(subarraysDivByK([4,5,0,-2,-3,1], 5)); // 7
console.log(subarraysDivByK([5], 5)); // 1