function uniqueString() {
    let s = "abcabcbb"
    let set_chars = new Set();
    let left = 0, max_length = 0;
    for (let right = 0; right < s.length; right++) {
        while (set_chars.has(s[right])) {
            set_chars.delete(s[left]);
            left++;
        }
        set_chars.add(s[right]);
        max_length = Math.max(max_length,right - left + 1);
    }
    return max_length
}
console.log(uniqueString())