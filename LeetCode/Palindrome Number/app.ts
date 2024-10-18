function isPalindrome(x: number): boolean {
    if (x < 0) return false;

    const num = x;
    let ans = 0;

    while (x > 0) {
        const last_digit = x % 10;
        ans = ans * 10 + last_digit;
        x = Math.floor(x / 10);
    }

    return num === ans;
}

console.log(isPalindrome(12321))