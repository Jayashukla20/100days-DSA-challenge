let visits = [10, 20, 30, 40, 50, 60, 70];

function maxSum(visits, k) {
    let n = visits.length;

    if (k > n) {
        return null; // window size larger than array
    }

    let max_sum = -Infinity; // very small number to start

    for (let start_index = 0; start_index <= n - k; start_index++) {
        let current_sum = 0;
        for (let offset = 0; offset < k; offset++) {
            current_sum += visits[start_index + offset];
        }
        if (current_sum > max_sum) {
            max_sum = current_sum;
        }
    }

    return max_sum;
}

console.log(maxSum(visits, 3)); // 180
