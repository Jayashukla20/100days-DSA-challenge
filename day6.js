let cart = [101, 102, 103, 104];
// Insert 105 at the end
cart.push(105)
console.log(cart)
// ✅ Expected Output:
// [101, 102, 103, 104, 105]

let num = [101, 102, 103, 103, 104, 103];
// Remove 103
// let newNum = num.filter(num => num !== 103)
let index = num.indexOf(103); 
while (index !== -1) {
    num.splice(index, 1);     // Remove 103 at that index
    index = num.indexOf(103); // Update index for the next loop
}
console.log(num)
// ✅ Expected Output:
// [101, 102, 104]

let fruits = ["apple", "orange", "grapes"];
fruits.splice(2,0,"banana")
console.log(fruits)
// ✅ Expected Output:
// ["apple", "orange", "banana", "grapes"]

let students = ["Ali", "Zara", "John"];
let update=students.forEach(student => {
   console.log(`Hello, ${student}!`)
});
// ✅ Expected Output:
// Hello, Ali!
// Hello, Zara!
// Hello, John!
let orders = ["order1", "order2", "order3"];
orders.shift()
console.log(orders)
// ✅ Expected Output:
// ["order2", "order3"]