deliveries = ["tomato", "onion", "bread", "lettuce", "tomato", "cheese", "onion"]
required = ["tomato", "cheese", "onion"]

let map_required = {};
let map_window = {};
let have = 0;
let need = new Set(required).size;
required.forEach(ing => {
    map_required[ing] = 1;
    if (current_ing = map_required) {
        map_window[current_ing] = 1;
    }
}); let left = 0;
let minLength = Infinity;

for (let right = 0; right < deliveries.length; right++) {
    let current_ing = deliveries[right];

    if (map_required.hasOwnProperty(current_ing)) {
        map_window[current_ing] = (map_window[current_ing] || 0) + 1;
        if (map_window[current_ing] === map_required[current_ing]) {
            have += 1;
        }
    }

    // Window shrink logic
    while (have === need) {
        minLength = Math.min(minLength, right - left + 1);

        let left_ing = deliveries[left];
        if (map_required.hasOwnProperty(left_ing)) {
            map_window[left_ing]--;
            if (map_window[left_ing] < map_required[left_ing]) {
                have -= 1;
            }
        }
        left++;
    }
}
console.log(minLength === Infinity ? -1 : minLength);
