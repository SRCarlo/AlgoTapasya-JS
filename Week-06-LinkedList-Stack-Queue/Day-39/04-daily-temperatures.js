/*
 * Name: Daily Temperatures
 *
 * Approach: Monotonic Stack
 *
 * Input: [73,74,75,71,69,72,76,73]
 *
 * Output: [1,1,4,2,1,1,0,0]
 *
 * Explanation: Find days until warmer temperature appears.
 *
 * Algorithm Used: Monotonic Stack
 *
 * Key Learning: Next greater traversal
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(n)
 */

function dailyTemperatures(temperatures) {
  const result = new Array(temperatures.length).fill(0);

  const stack = [];

  for (let index = 0; index < temperatures.length; index++) {
    while (
      stack.length > 0 &&
      temperatures[index] > temperatures[stack[stack.length - 1]]
    ) {
      let previousIndex = stack.pop();

      result[previousIndex] = index - previousIndex;
    }

    stack.push(index);
  }

  return result;
}

// Test Case
console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])); // [1,1,4,2,1,1,0,0]
