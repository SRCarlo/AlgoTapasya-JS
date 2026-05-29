/*
 * Name: Task Scheduler
 *
 * Approach: Greedy Frequency Counting
 *
 * Input: tasks = ["A","A","A","B","B","B"]
 *
 * n = 2
 *
 * Output: 8
 *
 * Explanation: Schedule tasks while respecting cooldown.
 *
 * Algorithm Used: Greedy Scheduling
 *
 * Key Learning: Frequency optimization
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(1)
 */

function leastInterval(tasks, n) {
  const frequency = new Array(26).fill(0);

  for (let task of tasks) {
    frequency[task.charCodeAt(0) - 65]++;
  }

  frequency.sort((a, b) => b - a);

  let maxFrequency = frequency[0] - 1;

  let idleSlots = maxFrequency * n;

  for (let i = 1; i < 26; i++) {
    idleSlots -= Math.min(maxFrequency, frequency[i]);
  }

  idleSlots = Math.max(0, idleSlots);

  return tasks.length + idleSlots;
}

// Test Case
console.log(leastInterval(["A", "A", "A", "B", "B", "B"], 2)); // 8


