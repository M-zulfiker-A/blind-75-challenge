function maxProfit(prices: number[]): number {
  let start, end;
  start = 0;
  end = 1;
  let profit = 0;
  while (end < prices.length) {
    const difference = prices[end] - prices[start];
    if (difference > 0) {
      end += 1;
      profit = Math.max(profit, difference);
    } else {
      start = end;
      end += 1;
    }
  }
  return profit;
}
