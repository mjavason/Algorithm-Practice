// Sam's house has an apple tree and an orange tree that yield an abundance of fruit.
// Using the information given below, determine the number of apples and oranges that land on the house.

// In the diagram below:
// The red region denotes the house. Where s is the start point and t is the endpoint. 
// The apple tree is to the left of the house, and the orange tree is to its right.

// • Assume the trees are located at a single point. Where the apple tree is at point a, 
// and the orange tree is at point b.

// When a fruit falls from its tree, it lands d units of distance from its tree of origin along the x-axis.
// • A negative value of d means the fruit fell d units to the tree's left, and a positive value of d means it falls d units to the tree's right.

// Given the value of d for m apples and n oranges, determine how many apples and oranges will fall on Sam's house (i.e., in the inclusive range [s, t]).

// For example, Sam's house is between s = 7 and t = 10. The apple tree is located at a = 4 and the orange tree at b = 12. 
// There are m = 3 apples and n = 3 oranges. Apples are thrown d = [2, 3, -4] units distance from a, 
// and oranges are thrown d = [3, -2, -4] units distance. Adding each apple distance to the position of the tree, they land at 
// [4 + 2, 4 + 3, 4 - 4] = [6, 7, 0]. Oranges land at 
// [12 + 3, 12 - 2, 12 - 4] = [15, 10, 8]. One apple and two oranges land in the inclusive range 7 - 10, 
// so we print:
// 1
// 2

function countApplesAndOranges(
  s: number,
  t: number,
  a: number,
  b: number,
  apples: number[],
  oranges: number[]
): void {
  // Write your code here
  let applesInRange = 0;
  let orangesInRange = 0;
  let appleDistanceCalculated: number[] = [];
  let orangeDistanceCalculated: number[] = [];

  //calculating apples
  for (let i = 0; i < apples.length; i++) {
    appleDistanceCalculated.push(a + apples[i]);
  }

  //  calculating oranges
  for (let i = 0; i < oranges.length; i++) {
    orangeDistanceCalculated.push(b + oranges[i]);
  }

  //count how many apples are in range
  for (let i = 0; i < appleDistanceCalculated.length; i++) {
    if (appleDistanceCalculated[i] >= s && appleDistanceCalculated[i] <= t)
      applesInRange++;
  }

  //count how many oranges are in range
  for (let i = 0; i < orangeDistanceCalculated.length; i++) {
    if (orangeDistanceCalculated[i] >= s && orangeDistanceCalculated[i] <= t)
      orangesInRange++;
  }

  console.log(applesInRange);
  console.log(orangesInRange);
}
