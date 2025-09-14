
let colors = ["blue", "orange", "white", "blue", "green", "orange"]
let left = 0;
let min_length = Infinity;
let map = {
    orange: 0,
    white: 0,
    green: 0
}
let have = 0;
let need = 3; // total colors to find
for (let right = 0; right < colors.length; right++) {
    if (map.hasOwnProperty(colors[right])) {
        map[colors[right]]++;
        if (map[colors[right]] == 1) {    //first time this color on window
            have += 1;
        }
    }
    while (have == need) {  //current window has all colors
        min_length = Math.min(min_length, right - left + 1);
        if (map.hasOwnProperty(colors[left])) {
            map[colors[left]]--;
            if (map[colors[left]] == 0) {   //color completely removed
                have--
            }
        }
        left++;//shrink the window from the left
    }
}
console.log(min_length === Infinity ? -1 : min_length);
if (min_length === Infinity) {
    return -1;
} else {
    return min_length;
}

