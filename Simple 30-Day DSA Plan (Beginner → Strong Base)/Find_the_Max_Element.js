

// let arr = [3, 7, 2, 9, 4];
// let arr = [1, 2, 3, 4, 5];
let arr = [-3, -7, -2, -9, -4];

let max = arr[0];

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (max < element) {
        max = element;
    }
    else {
        max = max;
    }

}

console.log(max);





