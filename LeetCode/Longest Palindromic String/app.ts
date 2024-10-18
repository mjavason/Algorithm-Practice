function longestPalindrome(s: string): string {
  if (s.length <= 1) return s; // Handle edge cases for short strings.

  let longestString = s[0];

  // Helper function to expand around a center and check for palindrome.
  const expandAroundCenter = (left: number, right: number) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return s.slice(left + 1, right); // Return the palindrome found.
  };

  for (let i = 0; i < s.length; i++) {
    // Check for odd-length palindromes (single character center).
    let oddPalindrome = expandAroundCenter(i, i);
    if (oddPalindrome.length > longestString.length) {
      longestString = oddPalindrome;
    }

    // Check for even-length palindromes (two character center).
    let evenPalindrome = expandAroundCenter(i, i + 1);
    if (evenPalindrome.length > longestString.length) {
      longestString = evenPalindrome;
    }
  }

  return longestString;
}

console.log(longestPalindrome('acabbbbbbb'));
