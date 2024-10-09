function longestPalindrome(s: string): string {
  let longestString = s[0];
  let currentString;

  for (let i = 0; i < s.length; i++) {
    currentString = s[i];
    for (let k = i + 1; k < s.length; k++) {
      currentString += s[k];
      if (s[i] == s[k] && currentString.length > longestString.length) {
        if (currentString == currentString.split('').reverse().join(''))
          longestString = currentString;
      }
    }
    if (longestString.length >= s.length - i + 1) return longestString;
  }

  return longestString;
}

console.log(longestPalindrome('acabbbbbbb'));
