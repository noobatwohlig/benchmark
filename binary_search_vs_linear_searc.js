let linearCount = (binaryCount = 0);

let binarySearch = (arr, x) => {
    let start = 0,
        end = arr.length - 1;
    while (start <= end) {
        binaryCount++;
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] === x) return true;
        else if (arr[mid] < x) start = mid + 1;
        else end = mid - 1;
    }
    return false;
};

let linearSearch = (arr, x) => {
    for (let index = 0; index < arr.length; index++) {
        linearCount++;
        if (arr[index] === x) return true;
    }
    return false;
};

let arr = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
];

let x = 28;

console.log("Binary : ", binarySearch(arr, x), "Count: ", binaryCount);
console.log("Linear : ", linearSearch(arr, x), "Count: ", linearCount);
