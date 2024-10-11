function convert(s: string, numRows: number): string {
  // If only one row or the string is too short, no need for zigzagging
  if (numRows <= 1 || s.length <= 1) return s;

  // Create an array for each row in the zigzag pattern
  let rows: string[] = new Array(Math.min(numRows, s.length)).fill('');
  console.log(rows);

  let currentRow = 0;
  let goingDown = false;

  // Traverse the string, placing each character in the correct row
  for (let i = 0; i < s.length; i++) {
    rows[currentRow] += s[i];

    // Reverse the direction when reaching the top or bottom row
    if (currentRow === 0 || currentRow === numRows - 1) goingDown = !goingDown;

    // Update the row index based on the current direction
    currentRow += goingDown ? 1 : -1;
    console.log(rows)
  }

  // Join all the rows together to form the final zigzag string
  return rows.join('');
}

console.log(convert('PAYPALISHIRING', 3));
