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

        let currentLength = end - start + 1;
        maxLength = Math.max(maxLength, currentLength);
    }

    return maxLength;
}
let nums = [2, 1, 5, 1, 3, 2];
let k = 8;
console.log(longestSubarray(nums, k)); 
