function lengthOfLongestSubstring(s: string): number {
  if (!s[0]) return 0;
  let longestString = s[0];
  let currentString = s[0];

  for (let i = 0; i < s.length; i++) {
    while (currentString.includes(s[i])) {
      currentString = currentString.slice(1);
    }
    currentString += s[i];
    console.log(currentString);

    if (currentString.length > longestString.length)
      longestString = currentString;
  }

  console.log(longestString);
  return longestString.length;
}

console.log(lengthOfLongestSubstring('qrsvbspk'));
