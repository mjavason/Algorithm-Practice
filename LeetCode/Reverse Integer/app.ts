function reverse(x: number): number {
  let xString = x.toString();
  let sign = xString[0] == '-' ? '-' : '';

  xString = `${sign}${xString.split('').reverse().join('')}`;
  x = parseInt(xString);

  if (x <= -(2 ** 31) || x >= 2 ** 31 - 1) return 0;
  return x;
}

console.log(reverse(-12345));
