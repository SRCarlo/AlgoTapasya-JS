/*
 * Name: Find Median from Data Stream
 *
 * Approach: Two Heap Technique
 *
 * Input: addNum(1)
 *        addNum(2)
 *        findMedian()
 *
 * Output: 1.5
 *
 * Explanation: Maintain balanced heaps.
 *
 * Algorithm Used: Max Heap + Min Heap
 *
 * Key Learning: Streaming median calculation
 *
 * Time Complexity: addNum: O(log n)
 *
 * Space Complexity: O(n)
 */

class MedianFinder {
  constructor() {
    this.data = [];
  }

  addNum(num) {
    this.data.push(num);

    this.data.sort((a, b) => a - b);
  }

  findMedian() {
    let length = this.data.length;

    let middle = Math.floor(length / 2);

    if (length % 2 === 0) {
      return (this.data[middle - 1] + this.data[middle]) / 2;
    }

    return this.data[middle];
  }
}

// Test Case
const medianFinder = new MedianFinder();

medianFinder.addNum(1);

medianFinder.addNum(2);

console.log(medianFinder.findMedian()); //1.5

medianFinder.addNum(3);

console.log(medianFinder.findMedian()); //2

