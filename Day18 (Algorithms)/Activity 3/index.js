function frequencyCount(str) {
    let count = {};
    for (const char of str) {
        count[char] = count[char] + 1 || 1;
    }
    return count;
}

console.log(frequencyCount("mathematics")); //Task 6

function longestSubstring(str) {
    let seen = new Map();
    let start = 0, maxLen = 0;

    for (let i = 0; i < str.length; i++) {
        if (seen.has(str[i])) {
            start = Math.max(seen.get(str[i]) + 1, start);
        }
        seen.set(str[i], i);
        maxLen = Math.max(maxLen, i - start + 1);
    }
    return maxLen;
}

console.log(longestSubstring("abcddcbae")); //Task 7
