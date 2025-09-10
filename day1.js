<<<<<<< HEAD
let products = ['laptop', 'mobile', 'tablet', 'camera', 'watch']
products.splice(2, 2)
console.log(products)
// expected output ['laptop', 'mobile', 'watch']

let students = ['Ali', 'Sara', 'Zoya'];
students.splice(1, 0, 'Nina', 'Omar')
console.log(students)
// Expected Output: ['Ali', 'Nina', 'Omar', 'Sara', 'Zoya']

let scores = ['Zainab', 'Ali', 'Farhan', 'Nida', 'Ayaan'];
scores.splice(3, 2)
console.log(scores)
// Expected Output: ['Zainab', 'Ali', 'Farhan']

let sales = [220, 300, 280, 150, 400, 390, 310];
let sale = sales.slice(-2)
console.log(sale)
// Expected Output: [390, 310]

let users = [
    { name: 'Ahmed', active: true },
    { name: 'Mira', active: false },
    { name: 'John', active: true },
];
activeUsers = users.filter(
    user => user.active === true
)
console.log(activeUsers)
// Expected Output: [{name: 'Ahmed', active: true}, {name: 'John', active: true}]

let phoneNumbers = ['1234567890', '12345', '9876543210', '678901234'];
correctNum = phoneNumbers.filter(
    phoneNumber => phoneNumber.length >= 10
)
console.log(correctNum)
// Expected Output: ['1234567890', '9876543210']

let prices = [100, 200, 300];
withTax = prices.map(price => price * 1.18)
console.log(withTax)
// Expected Output: [118, 236, 354]

let sites = ['google', 'amazon', 'microsoft'];
let site = sites.map(site => site + ".com")
console.log(site)
// Expected Output: ['google.com', 'amazon.com', 'microsoft.com']

let cart = [499, 1299, 299, 799];
let total = cart.reduce((a, b) => a + b, 0);
console.log(total)
// Expected Output: 2896

let votes = ['A', 'B', 'A', 'C', 'B', 'A'];
let voteCount=votes.reduce((acc,vote)=>{
    acc[vote]=(acc[vote]||0)+1;
    return acc;
},{}
);
console.log(voteCount)
=======
let products = ['laptop', 'mobile', 'tablet', 'camera', 'watch']
products.splice(2, 2)
console.log(products)
// expected output ['laptop', 'mobile', 'watch']

let students = ['Ali', 'Sara', 'Zoya'];
students.splice(1, 0, 'Nina', 'Omar')
console.log(students)
// Expected Output: ['Ali', 'Nina', 'Omar', 'Sara', 'Zoya']

let scores = ['Zainab', 'Ali', 'Farhan', 'Nida', 'Ayaan'];
scores.splice(3, 2)
console.log(scores)
// Expected Output: ['Zainab', 'Ali', 'Farhan']

let sales = [220, 300, 280, 150, 400, 390, 310];
let sale = sales.slice(-2)
console.log(sale)
// Expected Output: [390, 310]

let users = [
    { name: 'Ahmed', active: true },
    { name: 'Mira', active: false },
    { name: 'John', active: true },
];
activeUsers = users.filter(
    user => user.active === true
)
console.log(activeUsers)
// Expected Output: [{name: 'Ahmed', active: true}, {name: 'John', active: true}]

let phoneNumbers = ['1234567890', '12345', '9876543210', '678901234'];
correctNum = phoneNumbers.filter(
    phoneNumber => phoneNumber.length >= 10
)
console.log(correctNum)
// Expected Output: ['1234567890', '9876543210']

let prices = [100, 200, 300];
withTax = prices.map(price => price * 1.18)
console.log(withTax)
// Expected Output: [118, 236, 354]

let sites = ['google', 'amazon', 'microsoft'];
let site = sites.map(site => site + ".com")
console.log(site)
// Expected Output: ['google.com', 'amazon.com', 'microsoft.com']

let cart = [499, 1299, 299, 799];
let total = cart.reduce((a, b) => a + b, 0);
console.log(total)
// Expected Output: 2896

let votes = ['A', 'B', 'A', 'C', 'B', 'A'];
let voteCount=votes.reduce((acc,vote)=>{
    acc[vote]=(acc[vote]||0)+1;
    return acc;
},{}
);
console.log(voteCount)
>>>>>>> 8f41fdd (adding file)
// Expected Output: { A: 3, B: 2, C: 1 }