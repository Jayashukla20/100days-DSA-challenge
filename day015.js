let pages = ["home", "about", "products", "home", "cart", "checkout"];
let k = 3;
let n = pages.length;

let foundUniqueWindow = false; // store result

for (let i = 0; i <= n - k; i++) {
    let isUnique = true;

    for (let x = i; x < i + k; x++) {
        for (let y = x + 1; y < i + k; y++) {
            if (pages[x] === pages[y]) {
                isUnique = false;
                break; // break out of inner loop
            }
        }
        if (!isUnique) break; // break outer loop early for this window
    }

    if (isUnique) {
        foundUniqueWindow = true;
        break; // we can stop checking once we find one
    }
}

console.log(foundUniqueWindow);
