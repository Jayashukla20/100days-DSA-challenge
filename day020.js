function minVisitorsInKHours(visitors, k) {
    let windowSum = 0;
    let minSum = Infinity;

    // Compute initial window sum for first k hours
    for (let i = 0; i < k; i++) {
        windowSum += visitors[i];
    }
    // to store the value in minsum and compare with another values
    minSum = windowSum;

    // Slide the window from start till end of array
    for (let i = k; i < visitors.length; i++) {
        windowSum = windowSum - visitors[i - k] + visitors[i]; // Remove leftmost, add new rightmost

        if (windowSum < minSum) {
            minSum = windowSum;
        }
    }

    return minSum;
}

let visitors = [120, 80, 100, 90, 150, 110, 70];
let k = 3;
console.log(minVisitorsInKHours(visitors, k));  // Output: 270
