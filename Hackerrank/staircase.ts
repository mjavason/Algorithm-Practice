// Staircase detail
// This is a staircase of size n = 4:
//    #
//   ##
//  ###
// ####
// Its base and height are both equal to n. It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

function staircase(n: number): void {
  // Write your code here

  //Loop that prints a line
  for (let i = 1; i <= n; i++) {
    let line = '';

    // Loop that concatenates the characters, whether space or '#'
    for (let j = 1; j <= n; j++) {
      //whitespace is derived by subtracting the total line, and the current point in the loop.
      //example: if i'm printing a total line of 10, and i'm at line 2, then the number of '#' i want to see is 2, the rest whitespace.
      let whiteSpace = n - i;
      if (j <= whiteSpace) {
        line = line.concat(' ');
        continue;
      }
      line = line.concat('#');
    }
    console.log(line);
  }
}
