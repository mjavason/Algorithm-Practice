function longestPalindrome(s: string): string {
  if (s == s.split('').reverse().join('')) return s;
  let longestString = s[0];

  for (let i = 0; i < s.length; i++) {
    let currentString = s[i];
    for (let k = i + 1; k < s.length; k++) {
      currentString += s[k];
      if (
        s[i] == s[k] &&
        currentString == currentString.split('').reverse().join('') &&
        currentString.length > longestString.length
      )
        longestString = currentString;
    }
  }

  return longestString;
}

console.log(longestPalindrome('abcacac'));
