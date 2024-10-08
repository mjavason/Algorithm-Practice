function lengthOfLongestSubstring(s: string): number {
  let longestString = '';

  for (let i = 0; i < s.length; i++) {
    let currentString = s[i];

    for (let k = 1; k < s.length; k++) {
      if (currentString.includes(s[k])) {
        currentString = s[k];
      } else {
        currentString += s[k];
      }

      if (currentString.length > longestString.length)
        longestString = currentString;
    }
  }
  
  console.log(longestString);
  return longestString.length;
}

console.log(lengthOfLongestSubstring('pwwkew'));
