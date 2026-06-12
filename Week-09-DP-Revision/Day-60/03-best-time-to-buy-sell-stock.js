/*
 * Name: Best Time to Buy and Sell Stock
 *
 * Approach: Track minimum price and maximum profit.
 *
 * Input: [7,1,5,3,6,4]
 *
 * Output: 5
 *
 * Algorithm Used: Greedy + DP Thinking
 *
 * Key Learning: State Optimization
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(1)
 */

function maxProfit(prices) {
  let buy = Infinity;

  let profit = 0;

  for (const price of prices) {
    buy = Math.min(buy, price);

    profit = Math.max(profit, price - buy);
  }

  return profit;
}

// Input
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
