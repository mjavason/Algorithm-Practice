// You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

function birthdayCakeCandles(candles: number[]): number {
  // Write your code here
  let tallestCandle = 0;
  let tallestCandleOccurence = 0;
  for (let i = 0; i < candles.length; i++) {
    if (candles[i] > tallestCandle) tallestCandle = candles[i];
  }

  for (let i = 0; i < candles.length; i++) {
    if (candles[i] == tallestCandle) tallestCandleOccurence++;
  }

  return tallestCandleOccurence;
}
