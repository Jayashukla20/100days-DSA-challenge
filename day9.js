// ✅ Q1. Remove Duplicate Emails (Like Gmail cleanup)
// 📧 Problem:
// 📝 Input:
// emails = ["ali@gmail.com", "ali@gmail.com", "sara@gmail.com", "sara@gmail.com", "zayn@gmail.com"]
emails = ["ali@gmail.com", "ali@gmail.com", "sara@gmail.com", "sara@gmail.com", "zayn@gmail.com"]

slow = 0

for (fast = 1; fast < emails.length; fast++) {
    if (emails[fast] != emails[slow]) {
        slow++
        emails[slow] = emails[fast]
    }
}

console.log(emails.slice(0, slow + 1))

// ✅ Q2. Playlist Duration Matcher (Music App Feature)
// 🎵 Problem:
// You’re building a music app. Users want to create a 2-song playlist that exactly matches their commute time.

// You're given an array of song durations (in minutes), and a targetDuration.
// Find one pair of songs (different songs) that exactly add up to the target.

songs = [3, 5, 8, 2, 7, 4]
targetDuration = 10

// Step 1: Sort the array
songs.sort((a, b) => a - b) // [2, 3, 4, 5, 7, 8]

let left = 0
let right = songs.length - 1

while (left < right) {
    let sum = songs[left] + songs[right]

    if (sum === targetDuration) {
        console.log([songs[left], songs[right]])
        break // found a pair, stop
    }
    else if (sum < targetDuration) {
        left++ // need a bigger sum
    }
    else {
        right-- // need a smaller sum
    }
}
// console.log("Sorted array:", songs)