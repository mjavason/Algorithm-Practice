let zigzagArr: string[][] = [];
function convert(s: string, numRows: number): string {
  let middle = Math.ceil(numRows / 2) - 1;
  let currentLine: string[] = [];
  let finalString = '';
  let count = 0;
  let isOdd = numRows % 2;

  for (let i = 0; i < s.length; i++) {
    let isntMiddle = (count + 1) % (numRows + 1);
    // console.log(isntMiddle);
    if (!isntMiddle) {
      let addCount = 0;
      for (let k = 0; k < numRows; k++) {
        if (isOdd) {
          if (k >= middle && k <= middle) {
            if (addCount > 0) i++;
            currentLine.push(s[i]);
            addCount++;
          } else {
            currentLine.push('');
          }
        } else {
          if (k >= middle && k <= middle + 1) {
            if (addCount > 0) i++;
            currentLine.push(s[i]);
            addCount++;
          } else {
            currentLine.push('');
          }
        }
      }
    } else {
      currentLine.push(s[i]);
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
console.log(zigzagArr)
