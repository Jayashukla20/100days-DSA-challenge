function hasUniqueWindow(pages, k) {
    let start = 0;
    let seen = new Set();

    for (let end = 0; end < pages.length; end++) {

        while (seen.has(pages[end])) {
            seen.delete(pages[start]);
            start++;
        }

        seen.add(pages[end]);


        if (end - start + 1 === k) {
            return true;
        }
    }

    return false;
}

let pages = ["home", "about", "products", "home", "cart", "checkout"];
let k = 6;
console.log(hasUniqueWindow(pages, k));  // Output: true
