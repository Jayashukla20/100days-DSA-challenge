// Problem Statement:
// You're building a calendar integration tool. Two people share their schedules in the form of sorted busy time intervals (start and end times). 
// You need to merge both their busy slots into a single calendar and combine any overlapping or touching intervals.

userA = [[9, 11], [13, 15], [18, 20]];
userB = [[10, 12], [14, 16], [17, 18]];

function mergeSchedules(userA, userB) {
    let i = 0;   // pointer for userA
    let j = 0;   // pointer for userB
    let merged = [];

    while (i < userA.length && j < userB.length) {
        let current;
        if (userA[i][0] <= userB[j][0]) {
            current = userA[i];
            i += 1;
        } else {
            current = userB[j];
            j += 1;
        }

        if (merged.length === 0 || current[0] > merged[merged.length - 1][1]) {
            merged.push(current);
        } else {
            merged[merged.length - 1][1] = Math.max(
                merged[merged.length - 1][1],
                current[1]
            );
        }
    }

    // Append remaining intervals from userA
    while (i < userA.length) {
        let current = userA[i];
        i += 1;
        if (current[0] > merged[merged.length - 1][1]) {
            merged.push(current);
        } else {
            merged[merged.length - 1][1] = Math.max(
                merged[merged.length - 1][1],
                current[1]
            );
        }
    }

    // Append remaining intervals from userB
    while (j < userB.length) {
        let current = userB[j];
        j += 1;
        if (current[0] > merged[merged.length - 1][1]) {
            merged.push(current);
        } else {
            merged[merged.length - 1][1] = Math.max(
                merged[merged.length - 1][1],
                current[1]
            );
        }
    }

    return merged;
}

console.log(mergeSchedules(userA, userB)); 
// Expected: [[9, 12], [13, 16], [17, 20]]
