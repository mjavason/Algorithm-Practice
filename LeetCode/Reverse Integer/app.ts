function reverse(x: number): number {
  let sign = x.toString()[0] == '-' ? -1 : 1;
  x = parseInt(x.toString().split('').reverse().join(''));

  if (x >= 2 ** 31 - 1) return 0;
  return x * sign;
}

console.log(reverse(-123455555555));
