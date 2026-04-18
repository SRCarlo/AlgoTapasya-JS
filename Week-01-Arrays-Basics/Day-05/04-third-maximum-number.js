/*
 * Name: Third Maximum Number

 * Approach: Track Top 3

 * Input: nums = [2,2,3,1]

 * Output: 1

 * Explanation:
 * Maintain 3 distinct maximum values
 * 
 * Algorithm Used: Greedy tracking
 * 
 * Key Learning: Handle duplicates carefully
 * 
 * Time Complexity: O(n)
 * 
 * Space Complexity: O(1)
 * 
 */

function thirdMax(nums) {
    let first = -Infinity;
    let second = -Infinity;
    let third = -Infinity;

    for (let num of nums) {
        if (num === first || num === second || num === third) continue;

        if (num > first) {
            [first, second, third] = [num, first, second];
        } else if (num > second) {
            [second, third] = [num, second];
        } else if (num > third) {
            third = num;
        }
    }

    return third === -Infinity ? first : third;
}

// Test Cases
console.log(thirdMax([3,2,1])); // 1
console.log(thirdMax([1,2]));   // 2