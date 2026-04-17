/*
 * Name: Product of Array Except Self

 * Approach: Prefix + Suffix Product

 * Input: [1,2,3,4]

 * Output: [24,12,8,6]

 * Explanation:
 * Each element = product of left * product of right
 * 
 * Algorithm Used: Prefix & Suffix
 * 
 * Key Learning: Avoid division
 * 
 * Time Complexity: O(n)
 * 
 * Space Complexity: O(1) (excluding output)
 * 
 */

function productExceptSelf(nums) {
    let n = nums.length;
    let result = new Array(n).fill(1);

    let prefix = 1;
    for (let i = 0; i < n; i++) {
        result[i] = prefix;
        prefix *= nums[i];
    }

    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= suffix;
        suffix *= nums[i];
    }

    return result;
}

// Test Cases
console.log(productExceptSelf([1,2,3,4])); // [24,12,8,6]
console.log(productExceptSelf([0,1,2,3])); // [6,0,0,0]