function maxArea(height: number[]): number {
  let maxContainer = 0;
  let maxLine = 0;
  for (let i = 0; i < height.length; i++) {
    if (!height[i + 1] && typeof height[i + 1] != 'number') return maxContainer;
    if (height[i] <= maxLine) continue;
    let counter = 1;
    for (let j = i + 1; j < height.length; j++) {
      let shorter = height[i] > height[j] ? height[j] : height[i];

      let area = shorter * counter;
      if (area > maxContainer) {
        maxContainer = area;
        maxLine = shorter;
      }
      counter++;
    }
  }

  return maxContainer;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
