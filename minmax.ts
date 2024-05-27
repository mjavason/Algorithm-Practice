// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

function miniMaxSum(arr: number[]): void {
  // Write your code here
  let minimum = 0;
  let maximum = 0;
  
  for (let i = 0; i < arr.length; i++) {
    let total = 0;

    //splice affects the calling array, so we always make a copy to avoid this effect
    let arrayCopy = [...arr];
    //remove one element from the array.
    arrayCopy.splice(i, 1);

    for (let j = 0; j < arrayCopy.length; j++) {
      total = total + arrayCopy[j];
    }

    if (minimum > total) minimum = total;
    if (total > maximum) maximum = total;
    if (i == 0) minimum = total;
  }

  console.log(minimum, maximum);
}
