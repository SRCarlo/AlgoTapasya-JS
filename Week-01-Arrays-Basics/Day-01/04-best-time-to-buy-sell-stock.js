/*
 * Name: Best Time to Buy and Sell Stock
 *
 * Approach: Greedy (Single Pass)
 *
 * Input: prices = [7,1,5,3,6,4]
 *
 * Output: 5
 *
 * Explanation:
 * Track minimum price so far and calculate profit at each step.
 *
 * Algorithm Used: Greedy
 *
 * Key Learning: Always update minimum before calculating profit
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(1)
 */

function maxProfit(prices) {
  // Edge case
  if (!prices || prices.length === 0) return 0;

  let minimumPrice = Infinity;
  let maximumProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    const currentPrice = prices[i];

    // Update minimum price
    minimumPrice = Math.min(minimumPrice, currentPrice);

    // Calculate profit
    const profit = currentPrice - minimumPrice;

    // Update max profit
    maximumProfit = Math.max(maximumProfit, profit);
  }

  return maximumProfit;
}

// Test Cases
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit([7, 6, 4, 3, 1])); // 0
console.log(maxProfit([2, 4, 1])); // 2
