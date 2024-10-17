function myAtoi(s: string): number {
  let sign = 1;
  let num = '0';
  let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let foundSign = false;

  for (let i = 0; i < s.length; i++) {
    if (s[i] == ' ' && num.length == 1 && !foundSign) continue;
    if ((s[i] == '-' || s[i] == '+') && num.length == 1 && !foundSign) {
      sign = parseInt(`${s[i]}1`);
      foundSign = true;
      continue;
    }
    if (numbers.includes(s[i])) {
      num += s[i];
      continue;
    } else {
      break;
    }
  }

  if (parseInt(num) == 0) return 0;
  let numInt = parseInt(num) * sign;

  if (numInt > 2 ** 31 * -1 && numInt < 2 ** 31) return numInt;
  if (numInt <= 2 ** 31 * -1) return 2 ** 31 * -1;
  return 2 ** 31 - 1;
}

console.log(myAtoi('0-1'));
console.log(myAtoi('   -042'));
console.log(myAtoi('+-12'));
console.log(myAtoi('-91283472332'));
console.log(myAtoi('   +0 123'));
console.log(myAtoi('-2147483648'));
console.log(myAtoi("  +  413"))
