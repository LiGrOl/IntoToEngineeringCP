const fs = require("fs");                                                   // Including FS function for reading data from file

let data = fs.readFileSync("text.txt", "utf8");                             // Reading from text.txt

const validArr = validateArr(data);                                         // Calling validateArr function for validated data from text.txt

const sortedArr = bubbleSorting(validArr);                                  // Calling bubbleSorting function for sorting of validated array

fs.writeFileSync("text.txt", sortedArr);                                    // Writing data to the text.txt

data = fs.readFileSync("text.txt", "utf8");                                 // Reading from text.txt

console.log("Результат сортировки: " + sortedArr);

// Validation of initial data
function validateArr(str) {
    const numberRegEx = /(\d+)((\.?|,?)(\d+))?/g;                           // RegEx for checking items from data

    const arr = str.match(numberRegEx);                                     // Getting items from data by RegEx

    return arr.map(item => parseFloat(item.replace(',', '.')));   // Validating and return array
}

// Sorting of array
function bubbleSorting(arr) {
    for (let i = 0, endI = arr.length - 1; i < endI; i++) {                 // Start of first cycle
        let wasSwap = false;                                                // Adding variable for checking swap
        for (let j = 0, endJ = endI - i; j < endJ; j++) {                   // Start of second cycle
            if (arr[j] > arr[j + 1]) {                                      // Checking of items
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];                // Swap of items
                wasSwap = true;                                             // Setting of variable
            }
        }
        if (!wasSwap) break;                                                // Checking variable
    }
    return arr;                                                             // Return sorted array
}
