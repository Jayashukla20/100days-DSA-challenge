// 1.answer
let Orders = [
  { id: 1, time: "12:00" },
  { id: 2, time: "12:30" }
];
let inserted = false;  // step 1
let newOrder = { id: 3, time: "12:15" };  //  Define the new order

for (let i = 0; i < Orders.length; i++) {
  if (newOrder.time < Orders[i].time) {
    Orders.splice(i, 0, newOrder);  // insert at the correct index
    inserted = true;               // step 2
    break;
  }
}

if (!inserted) {
  Orders.push(newOrder);           // step 3
}

console.log(Orders)


// 2.answer
let users = [
  { username: "ali", isActive: true },
  { username: "sara", isActive: false },
  { username: "john", isActive: true }
];
let activeUsers = users.filter(user => user.isActive); 
console.log(activeUsers);


//3.answer
let movieDurations = [90, 85, 75, 60, 120, 150, 125];
let targetTime = 250;

// Create a list with durations and original indices
let movieList = movieDurations.map((duration, index) => ({
  duration,
  index
}));

// Sort by duration
movieList.sort((a, b) => a.duration - b.duration);

let left = 0;
let right = movieList.length - 1;
let found = false;

while (left < right) {
  let sum = movieList[left].duration + movieList[right].duration;

  if (sum === targetTime) { // use targetTime here
    console.log("Found pair:", movieList[left].duration, movieList[right].duration);
    console.log("Original indices:", movieList[left].index, movieList[right].index);
    found = true;
    break;
  } else if (sum < targetTime) {
    left++;
  } else {
    right--;
  }
}

if (!found) {
  console.log("No valid pair found");
}

