<<<<<<< HEAD
let items = [
  { name: "Pen", qty: 3, price: 10 },
  { name: "Notebook", qty: 2, price: 50 },
  { name: "Bag", qty: 1, price: 400 }
];
billItems = items.map(item => {
  return {
    name: item.name,
    total: item.qty * item.price
  }
})
console.log(billItems)

//✅ Expected Output:

// [
//   { name: "Pen", total: 30 },
//   { name: "Notebook", total: 100 },
//   { name: "Bag", total: 400 }
// ]

//2.answer
let users = ['Ali', 'Sara', 'Zoya', 'Ali', 'Zara', 'Sara'];
let count = users.reduce((acc, user) => {
  if (acc[user]) {
    acc[user] += 1;
  } else {
    acc[user] = 1;
  }
  return acc;
}, {});
let max = users.filter((user, index) => {
  return count[user] >= 2 && users.indexOf(user) === index;
});
console.log(max);

// ✅ Expected Output:

// ['Ali', 'Sara']


// You're analyzing orders. Find the product with the highest quantity sold.
let orders = [
  { product: 'Pen', qty: 10 },
  { product: 'Notebook', qty: 5 },
  { product: 'Pen', qty: 15 },
  { product: 'Bag', qty: 1 },
  { product: 'Notebook', qty: 10 }
];
let totals = orders.reduce((acc, order) => {
  acc[order.product] = (acc[order.product] || 0) + order.qty;
  return acc;
}, {});
let maxQty = 0;
let maxProduct = '';
for (let [product, qty] of Object.entries(totals)) {
    if (qty > maxQty) {
        maxQty = qty;
        maxProduct = product;
    }
}
console.log(maxProduct)

// ✅ Expected Output:
=======
let items = [
  { name: "Pen", qty: 3, price: 10 },
  { name: "Notebook", qty: 2, price: 50 },
  { name: "Bag", qty: 1, price: 400 }
];
billItems = items.map(item => {
  return {
    name: item.name,
    total: item.qty * item.price
  }
})
console.log(billItems)

//✅ Expected Output:

// [
//   { name: "Pen", total: 30 },
//   { name: "Notebook", total: 100 },
//   { name: "Bag", total: 400 }
// ]

//2.answer
let users = ['Ali', 'Sara', 'Zoya', 'Ali', 'Zara', 'Sara'];
let count = users.reduce((acc, user) => {
  if (acc[user]) {
    acc[user] += 1;
  } else {
    acc[user] = 1;
  }
  return acc;
}, {});
let max = users.filter((user, index) => {
  return count[user] >= 2 && users.indexOf(user) === index;
});
console.log(max);

// ✅ Expected Output:

// ['Ali', 'Sara']


// You're analyzing orders. Find the product with the highest quantity sold.
let orders = [
  { product: 'Pen', qty: 10 },
  { product: 'Notebook', qty: 5 },
  { product: 'Pen', qty: 15 },
  { product: 'Bag', qty: 1 },
  { product: 'Notebook', qty: 10 }
];
let totals = orders.reduce((acc, order) => {
  acc[order.product] = (acc[order.product] || 0) + order.qty;
  return acc;
}, {});
let maxQty = 0;
let maxProduct = '';
for (let [product, qty] of Object.entries(totals)) {
    if (qty > maxQty) {
        maxQty = qty;
        maxProduct = product;
    }
}
console.log(maxProduct)

// ✅ Expected Output:
>>>>>>> 8f41fdd (adding file)
// 'Pen'