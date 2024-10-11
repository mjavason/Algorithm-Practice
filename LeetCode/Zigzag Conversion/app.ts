let zigzagArr: string[][] = [];
function convert(s: string, numRows: number): string {
  let middle = numRows - 2;
  if (middle % 2) {
    middle += numRows % 2;
  } else {
    middle++;
  }
  let currentLine: string[] = [];
  let finalString = '';
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    let column = count % 2;
    // console.log(column);

    if (column == 0) {
      let addCount = 0;
      for (let k = 0; k < numRows; k++) {
        if (addCount > 0) i++;
        currentLine.push(s[i]);
        addCount++;
      }
      // console.log(currentLine)
    } else {
      let addCount = 0;
      for (let k = 1; k < middle; k++) {
        for (let j = 0; j < numRows; j++) {
          if (k >= j && k <= j) {
            if (addCount > 0) i++;
            currentLine.push(s[i]);
            addCount++;
          } else {
            currentLine.push('');
          }
        }
        zigzagArr.push(currentLine);
        currentLine = [];
      }
    }

    if (currentLine.length >= numRows || i + 1 >= s.length) {
      zigzagArr.push(currentLine);
      currentLine = [];
    }

    count++;
  }

  for (let i = 0; i < zigzagArr.length; i++) {
    for (let k = 0; k < zigzagArr[i].length; k++) {
      for (let j = 0; j < zigzagArr.length; j++) {
        if (zigzagArr[j][k]) finalString += zigzagArr[j][k];
        if (finalString.length >= s.length) return finalString;
      }
    }
  }

  return finalString;
}

console.log(convert('PAYPALISHIRING', 4));
console.log(zigzagArr);
