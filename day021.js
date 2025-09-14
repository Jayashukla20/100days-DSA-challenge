days = [1, 0, 1, 1, 0, 0, 1, 1, 1, 0]
k = 2
let left = 0;
let max_length = 0;
let zero_count = 0;
for (let right = 0; right < days.length; right++) {
    console.log("Right pointer is at:", right)
    if (days[right] == 0) {
        zero_count += 1 //Count zeros in the window
    }
    while (zero_count > k) {
        if (days[left] == 0) {
            zero_count -= 1;
        }
        left += 1// Shrink from left
    }
    max_length = Math.max(max_length, right - left + 1) // Update max window size for valid window 
    console.log("Maximum Productive Streak is:", max_length);

}
return max_length;

