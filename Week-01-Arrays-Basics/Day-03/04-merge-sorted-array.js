/*
 * Name: Merge Sorted Array
 * 
 * Approach: Two Pointer (Reverse merge)
 * 
 * Input: nums1 = [1,2,3,0,0,0], nums2 = [2,5,6]
 * 
 * Output: [1,2,2,3,5,6]
 * 
 * Explanation:
 * Fill nums1 from the end to avoid overwriting elements.
 * Compare largest elements first.
 * 
 * Algorithm Used: Two Pointer
 * 
 * Key Learning: Reverse traversal avoids extra space
 * 
 * Time Complexity: O(n + m)
 * 
 * Space Complexity: O(1)
 */

function merge(nums1, m, nums2, n) {
    // Edge case
    if (!nums1 || !nums2) return nums1;

    let pointer1 = m - 1;
    let pointer2 = n - 1;
    let insertPosition = m + n - 1;

    while (pointer2 >= 0) {
        if (pointer1 >= 0 && nums1[pointer1] > nums2[pointer2]) {
            nums1[insertPosition] = nums1[pointer1];
            pointer1--;
        } else {
            nums1[insertPosition] = nums2[pointer2];
            pointer2--;
        }
        insertPosition--;
    }

    return nums1;
}

// Test Cases
console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3)); // [1,2,2,3,5,6]
console.log(merge([1], 1, [], 0));                // [1]
console.log(merge([0], 0, [1], 1));               // [1]