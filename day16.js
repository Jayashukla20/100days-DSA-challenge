let txt = "forxxorfxdofr";
let pat = "for";
let m = pat.length;
let n = txt.length;
let count = 0;

function isAnagram(a, b) {
    return a.split("").sort().join("") === b.split("").sort().join("");
}
for (let i = 0; i <= n - m; i++) {
    let sub = txt.substring(i, i + m);
    if (isAnagram(sub, pat)) {
        count++;
    }
}
console.log(count); // Expected: 3
