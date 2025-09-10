arr = [-1, 0, 1, 2, -1, -4]

function findTriplets(arr) {
    arr.sort((a, b) => a - b);
    let result = [];

    // console.log("Sorted array:", arr);

    for (let i = 0; i <= arr.length - 3; i++) {
        if (i > 0 && arr[i] === arr[i - 1]) {
            continue;
        }

        let left = i + 1;
        let right = arr.length - 1;

        while (left < right) {
            let sum = arr[i] + arr[left] + arr[right];

            // console.log(`Checking: i=${i} (${arr[i]}), left=${left} (${arr[left]}), right=${right} (${arr[right]}), sum=${sum}`);

            if (sum === 0) {
                // console.log("Found triplet:", [arr[i], arr[left], arr[right]]);
                result.push([arr[i], arr[left], arr[right]]);

                while (left < right && arr[left] === arr[left + 1]) {
                    left++;
                }

                while (left < right && arr[right] === arr[right - 1]) {
                    right--;
                }

                left++;
                right--;
            }
            else if (sum < 0) {
                left++;
            }
            else {
                right--;
            }
        }
    }

    console.log("Final result:", result);
    return result;
}

// Output: [[-1, -1, 2], [-1, 0, 1]]
