let visitors = [120, 80, 100, 90, 150, 110, 70];
let k = 3;

let minSum = Infinity;
let n = visitors.length;

for (let i = 0; i <= n - k; i++) {
    let sum = 0;
    for (let j = i; j < i + k; j++) {
        sum += visitors[j];
    }
    if (sum < minSum) {
        minSum = sum;
    }
}

console.log(minSum); // Expected: 270
