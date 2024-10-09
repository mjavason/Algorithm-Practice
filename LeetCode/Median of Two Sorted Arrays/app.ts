function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  let combinedNums = [...nums1, ...nums2];
  combinedNums.sort((a, b) => a - b);

  console.log(combinedNums);

  if (combinedNums.length % 2)
    return combinedNums[Math.floor(combinedNums.length / 2)];

  return (
    (combinedNums[combinedNums.length / 2 - 1] +
      combinedNums[combinedNums.length / 2]) /
    2
  );
}

console.log(findMedianSortedArrays([2, 3, 4], [1, 7, 9]));
let ar = [1,2 ,3]
console.log(ar[0.5])