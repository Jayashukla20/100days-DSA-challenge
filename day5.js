<<<<<<< HEAD
const phoneNumbers = [
    "+919876543210",
    "+14085551234",
    "+918888777666",
    "+12345678901",
    "+917654321098"
];
function separateContact(phoneNumbers) {
    let ind = phoneNumbers.filter(x => x.startsWith("+91"))
    let us = phoneNumbers.filter(y => y.startsWith("+1"))
    return {
        indianNumbers: ind,
        usNumbers: us
    }
 }
 console.log(separateContact(phoneNumbers))

// ✅ Output:
// {
//   indianNumbers: ["+919876543210", "+918888777666", "+917654321098"],
//   usNumbers: ["+14085551234", "+12345678901"]
// }
let cart = [101, 102, 104];
let newProduct = 103;
let newCart = cart.splice(1, 0, newProduct)
console.log(cart)
// ✅ Output:
// [101, 103, 102, 104]

let waitingList = ["Ali", "John", "Sara"];
let newStudent = "Aarav";
waitingList.push(newStudent)
console.log(waitingList)
// ✅ Output:
// ["Ali", "John", "Sara", "Aarav"]
=======
// const phoneNumbers = [
//     "+919876543210",
//     "+14085551234",
//     "+918888777666",
//     "+12345678901",
//     "+917654321098"
// ];
// function separateContact(phoneNumbers) {
//     let ind = phoneNumbers.filter(x => x.startsWith("+91"))
//     let us = phoneNumbers.filter(y => y.startsWith("+1"))
//     return {
//         indianNumbers: ind,
//         usNumbers: us
//     }
// }
// console.log(separateContact(phoneNumbers))

// ✅ Output:
// {
//   indianNumbers: ["+919876543210", "+918888777666", "+917654321098"],
//   usNumbers: ["+14085551234", "+12345678901"]
// }
let cart = [101, 102, 104];
let newProduct = 103;
let newCart = cart.splice(1, 0, newProduct)
console.log(cart)
// ✅ Output:
// [101, 103, 102, 104]

let waitingList = ["Ali", "John", "Sara"];
let newStudent = "Aarav";
waitingList.push(newStudent)
console.log(waitingList)
// ✅ Output:
// ["Ali", "John", "Sara", "Aarav"]
>>>>>>> 8f41fdd (adding file)
