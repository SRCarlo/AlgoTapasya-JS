/*
 * Name: Majority Element
 * 
 * Approach: Boyer-Moore Voting Algorithm
 * 
 * Input: nums = [2,2,1,1,1,2,2]
 * 
 * Output: 2
 * 
 * Explanation:
 * Cancel out different elements.
 * 
 * Majority element survives as final candidate.
 * 
 * Algorithm Used: Greedy / Voting Algorithm
 * 
 * Key Learning: Candidate elimination logic
 * 
 * Time Complexity: O(n)
 * 
 * Space Complexity: O(1)
 */

function majorityElement(nums) {
    // Edge case
    if (!nums || nums.length === 0) return null;

    let candidate = null;
    let count = 0;

    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }

        if (num === candidate) {
            count++;
        } else {
            count--;
        }
    }

    return candidate;
}

// Test Cases
console.log(majorityElement([3,2,3]));           // 3
console.log(majorityElement([2,2,1,1,1,2,2]));   // 2
console.log(majorityElement([1]));               // 1