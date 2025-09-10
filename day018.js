function longestSubarray(nums, k) {
    let start = 0;
    let sum = 0;
    let maxLength = 0;

    for (let end = 0; end < nums.length; end++) {
        sum += nums[end];

        while (sum > k) {
            sum -= nums[start];
            start++;
        }

        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

let nums = [4, 2, 1, 7, 8, 1, 2, 8, 1];
let k = 8;
console.log(longestSubarray(nums, k));  // Output: 3
