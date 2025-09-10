// 1.

arr = [1, 2, 3, 4, 5, 6, 7]
target = 8
left = 0
right = arr.length - 1
count = 0

while (left < right) {
    sum = arr[left] + arr[right]
    if (sum == target) {
        count = count + 1
        left = left + 1
        right = right - 1
    }
    // If sum is less than target, move left pointer rightward
    else if (sum < target) {
        left = left + 1
    }

    // If sum is greater than target, move right pointer leftward
    else {
        right = right - 1
    }
}

console.log(count)

// 2.
// You're given an array. Move all 0s to the end while maintaining the order of non-zero elements.
// Do it in-place, using two pointers.

arr = [0, 1, 0, 3, 12]
slow = 0

for (fast = 0; fast < arr.length; fast++) {
    if (arr[fast] != 0) {
        // swap arr[slow] and arr[fast]
        temp = arr[slow]
        arr[slow] = arr[fast]
        arr[fast] = temp

        slow++
    }
}
console.log(arr)