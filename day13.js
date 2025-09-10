let days = [1, 0, 1, 1, 0, 0, 1, 1, 1, 0];
let k = 2;

let maxLength = 0;
let n = days.length;

for (let i = 0; i < n; i++) {              // start index
    for (let j = i; j < n; j++) {          // end index
        let zeros = 0;
        for (let x = i; x <= j; x++) {     // count zeros in subarray
            if (days[x] === 0) {
                zeros++;
            }
        }
        if (zeros <= k) {                  // valid streak
            let length = j - i + 1;
            if (length > maxLength) {
                maxLength = length;
            }
        }
    }
}

console.log(maxLength);
