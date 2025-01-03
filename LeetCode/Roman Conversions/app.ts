function romanToInt(s: string): number {
  const symbols = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let total = 0;

  for (let i = 0; i < s.length; i++) {
    if (symbols[s[i]] < symbols[s[i + 1]]) {
      total -= symbols[s[i]];
    } else {
      total += symbols[s[i]];
    }
  }

  return total;
}

console.log(romanToInt('III'));

// Input: s = "III"
// Output: 3
// Explanation: III = 3.

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
