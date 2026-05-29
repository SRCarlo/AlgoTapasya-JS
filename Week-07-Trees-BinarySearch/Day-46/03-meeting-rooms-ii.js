/*
 * Name: Meeting Rooms II
 *
 * Approach: Greedy Sorting
 *
 * Input: [[0,30],[5,10],[15,20]]
 *
 * Output: 2
 *
 * Explanation: Minimum rooms needed for overlapping meetings.
 *
 * Algorithm Used: Interval Scheduling
 *
 * Key Learning: Overlap detection
 *
 * Time Complexity: O(n log n)
 *
 * Space Complexity: O(n)
 */

function minMeetingRooms(intervals) {
  if (intervals.length === 0) {
    return 0;
  }

  let starts = intervals.map((i) => i[0]).sort((a, b) => a - b);

  let ends = intervals.map((i) => i[1]).sort((a, b) => a - b);

  let rooms = 0;

  let endPointer = 0;

  for (let i = 0; i < starts.length; i++) {
    if (starts[i] < ends[endPointer]) {
      rooms++;
    } else {
      endPointer++;
    }
  }

  return rooms;
}

// Test Case
console.log(
  minMeetingRooms([
    [0, 30],
    [5, 10],
    [15, 20],
  ]),
); // 2
