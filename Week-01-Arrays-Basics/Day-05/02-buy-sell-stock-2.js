/*
 * Name: Best Time to Buy and Sell Stock II

 * Approach: Greedy

 * Input: prices = [7,1,5,3,6,4]

 * Output: 7

 * Explanation:
 * Add all positive differences
 * 
 * Algorithm Used: Greedy
 * 
 * Key Learning: Capture every profit opportunity
 * 
 * Time Complexity: O(n)
 * 
 * Space Complexity: O(1)
 * 
 */

function maxProfit(prices) {
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      profit += prices[i] - prices[i - 1];
    }
  }

  return profit;
}

// Test Cases
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 7
console.log(maxProfit([1, 2, 3, 4, 5])); // 4
