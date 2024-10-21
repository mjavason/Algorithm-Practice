function isMatch(s: string, p: string): boolean {
  if (s == p) return true;
  //   if (p.length == 1 && !'*.'.includes(p) && s != p) return false;
  if (!p.includes('*') && !p.includes('.') && s != p) return false;

  for (let i = 0; i < p.length; i++) {
    if (p[i] == '*') continue;

    if (p[i] == '.') {
      if (!p[i + 1] || p[i + 1] == '*') continue;
      if (!s.includes(p[i + 1])) return false;
    }

    if (!s.includes(p[i]) && !'*.'.includes(p[i + 1])) return false;
  }

  return true;
}

console.log(isMatch('aa', 'a'));
