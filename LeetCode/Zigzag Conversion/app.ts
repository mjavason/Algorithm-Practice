let zigzagArr: string[][] = [];
function convert(s: string, numRows: number): string {
  if (s.length <= 1 || numRows <= 1) return s;

  let middle = numRows - 2;
  if (middle % 2) {
    middle += numRows % 2;
  } else {
    middle++;
  }
  if (middle == 1) middle++;

  let currentLine: string[] = [];
  let finalString = '';
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    let column = count % 2;

    if (column == 0) {
      let addCount = 0;
      for (let k = 0; k < numRows; k++) {
        if (numRows == 2 && i > 0) {
          if (k % 2) {
            currentLine.push(s[i]);
          } else {
            currentLine.push('');
          }
        } else {
          if (addCount > 0) i++;
          currentLine.push(s[i]);
          addCount++;
        }
      }
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
        currentLine = currentLine.reverse();
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

// const testCase = 'PAYPALISHIRING';
const testCase = 'ABCDE';

console.log(convert(testCase, 2));
console.log(zigzagArr);
