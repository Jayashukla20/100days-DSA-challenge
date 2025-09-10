<<<<<<< HEAD
let inventory = [
    { id: 101, name: 'Laptop' },
    { id: 102, name: 'Mobile' },
    { id: 103, name: 'laptop' },
    { id: 104, name: 'Tablet' },
    { id: 105, name: 'MOBILE' },
    { id: 106, name: 'Camera' }
];
let seen = [];
let filtered = inventory.filter(item => {
    let lowerName = item.name.toLowerCase();
    // console.log('Checking:', lowerName, '| Seen:', seen);
    if (!seen.includes(lowerName)) {
        seen.push(lowerName);
        return true;
    }

    return false;
});
console.log(filtered)
// Expected Output:
// [
//   { id: 101, name: 'Laptop' },
//   { id: 102, name: 'Mobile' },
//   { id: 104, name: 'Tablet' },
//   { id: 106, name: 'Camera' }
// ]


let transactions = [
    { category: 'Food', amount: 120 },
    { category: 'Transport', amount: 50 },
    { category: 'Food', amount: 80 },
    { category: 'Shopping', amount: 300 },
    { category: 'Transport', amount: 70 },
];
let acc = {}
let total = transactions.reduce((acc, item) => {
    if (acc[item.category]) {
        acc[item.category] += item.amount
    } else {
        acc[item.category] = item.amount;
    }
    return acc;
}, {});
console.log(total)
// Expected Output:
// {
//   Food: 200,
//   Transport: 120,
//   Shopping: 300
// }
=======
let inventory = [
    { id: 101, name: 'Laptop' },
    { id: 102, name: 'Mobile' },
    { id: 103, name: 'laptop' },
    { id: 104, name: 'Tablet' },
    { id: 105, name: 'MOBILE' },
    { id: 106, name: 'Camera' }
];
let seen = [];
let filtered = inventory.filter(item => {
    let lowerName = item.name.toLowerCase();
    // console.log('Checking:', lowerName, '| Seen:', seen);
    if (!seen.includes(lowerName)) {
        seen.push(lowerName);
        return true;
    }

    return false;
});
console.log(filtered)
// Expected Output:
// [
//   { id: 101, name: 'Laptop' },
//   { id: 102, name: 'Mobile' },
//   { id: 104, name: 'Tablet' },
//   { id: 106, name: 'Camera' }
// ]


let transactions = [
    { category: 'Food', amount: 120 },
    { category: 'Transport', amount: 50 },
    { category: 'Food', amount: 80 },
    { category: 'Shopping', amount: 300 },
    { category: 'Transport', amount: 70 },
];
let acc = {}
let total = transactions.reduce((acc, item) => {
    if (acc[item.category]) {
        acc[item.category] += item.amount
    } else {
        acc[item.category] = item.amount;
    }
    return acc;
}, {});
console.log(total)
// Expected Output:
// {
//   Food: 200,
//   Transport: 120,
//   Shopping: 300
// }
>>>>>>> 8f41fdd (adding file)
