function reduceString(str: string): string {
    // If the string has length 1 or all characters are the same, return it as it is already minimized
    if (str.length <= 1 || new Set(str).size === 1) {
        return str;
    }

    // Function to replace two distinct adjacent characters
    const replacePair = (a: string, b: string): string => {
        const set = new Set([a, b]);
        if (set.has("a") && set.has("b")) return "c";
        if (set.has("a") && set.has("c")) return "b";
        if (set.has("b") && set.has("c")) return "a";
        return "";
    };

    // Main loop to perform the replacements until no more are possible
    while (str.length > 1) {
        let found = false;
        let newStr = "";

        // Iterate through the string, checking adjacent pairs
        for (let i = 0; i < str.length - 1; i++) {
            const a = str[i];
            const b = str[i + 1];
            if (a !== b) {
                // Replace the pair with the third character
                newStr += replacePair(a, b);
                found = true;
                i++; // Skip the next character, as it's part of the replaced pair
            } else {
                newStr += a; // If characters are the same, add the current character
            }
        }

        // If the last character wasn't included, add it
        if (newStr.length < str.length) {
            newStr += str[str.length - 1];
        }

        // If no replacements were found, we are done
        if (!found) break;

        // Update the string for the next iteration
        str = newStr;
    }

    return str;
}

// Example usage
console.log(reduceString("abcbac")); // Example input
