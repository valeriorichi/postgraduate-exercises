Find the Symmetric Difference The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in either of the two sets but not in both. For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.Symmetric difference is a binary operation, which means it operates on only two elements. So to evaluate an expression involving symmetric differences among three elements (A △ B △ C), you must complete one operation at a time. Thus, for sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.Create a function that takes two or more arrays and returns an array of their symmetric difference. The returned array must contain only unique values (no duplicates).Tests Waiting:sym([1, 2, 3], [5, 2, 1, 4]) should return [3, 4, 5]. Waiting:sym([1, 2, 3], [5, 2, 1, 4]) should contain only three elements. Waiting:sym([1, 2, 3, 3], [5, 2, 1, 4]) should return [3, 4, 5]. Waiting:sym([1, 2, 3, 3], [5, 2, 1, 4]) should contain only three elements. Waiting:sym([1, 2, 3], [5, 2, 1, 4, 5]) should return [3, 4, 5]. Waiting:sym([1, 2, 3], [5, 2, 1, 4, 5]) should contain only three elements. Waiting:sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) should return [1, 4, 5]. Waiting:sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) should contain only three elements. Waiting:sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) should return [1, 4, 5]. Waiting:sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) should contain only three elements. Waiting:sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) should return [2, 3, 4, 6, 7]. Waiting:sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) should contain only five elements. Waiting:sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) should return [1, 2, 4, 5, 6, 7, 8, 9]. Waiting:sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) should contain only eight elements.

function sym(...arrays) {
      function diff(a, b) {
          const setA = new Set(a);
              const setB = new Set(b);
                  return [...a.filter(item => !setB.has(item)), ...b.filter(item => !setA.has(item))];
                    }

                      let result = arrays[0];
                        for (let i = 1; i < arrays.length; i++) {
                            result = diff(result, arrays[i]);
                              }

                                return [...new Set(result)];
                                }
  
sym([1, 2, 3], [5, 2, 1, 4]);



function sym(...args) {
  // Return the symmetric difference of 2 arrays
  const getDiff = (arr1, arr2) => {
    // Returns items in arr1 that don't exist in arr2
    function filterFunction(arr1, arr2) {
      return arr1.filter(item => arr2.indexOf(item) === -1);
    }

    // Run filter function on each array against the other
    return filterFunction(arr1, arr2).concat(filterFunction(arr2, arr1));
  };

  // Reduce all arguments getting the difference of them
  const summary = args.reduce(getDiff, []);

  // Run filter function to get the unique values
  const unique = summary.filter((elem, index, arr) => index === arr.indexOf(elem));
  return unique;
                              }





const diff = (arr1, arr2) => [
  ...arr1.filter(e => !arr2.includes(e)),
  ...arr2.filter(e => !arr1.includes(e))
];

const sym = (...args) => [...new Set(args.reduce(diff))];

// test here
sym([1, 2, 3], [5, 2, 1, 4]);



Inventory Update
Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.


function updateInventory(arr1, arr2) {
  // Variable for location of product
  var index;

  // A helper method to return the index of a specified product (undefined if not found)
  var getProductIndex = function(name) {
    for (var i = 0; i < this.length; i++) {
      if (this[i][1] === name) {
        return i;
      }
    }
    return undefined;
  };

  // For each item of the new Inventory
  for (var i = 0; i < arr2.length; i++) {
    // Invoke our helper function using arr1 as this
    index = getProductIndex.call(arr1, arr2[i][1]);

    // If the item doesn't exist
    if (index === undefined) {
      // Push the entire item
      arr1.push(arr2[i]);
    } else {
      // Add the new quantity of the current item
      arr1[index][0] += arr2[i][0];
    }
  }

  // Sort alphabetically, by the product name of each item
  arr1.sort(function(a, b) {
    if (a[1] > b[1]) {
      return 1;
    }
    if (a[1] < b[1]) {
      return -1;
    }
    return 0;
  });

  return arr1;
}

// test here
// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"]
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"]
];

updateInventory(curInv, newInv);


function updateInventory(arr1, arr2) {
  // All inventory must be accounted for or you're fired!

  var index;
  var arrCurInvName = []; // Names of arr1's items
  var arrNeInvName = []; // Names of arr2's items

  // Same as using two for loops, this takes care of increasing the number of stock quantity.
  arr1.forEach(function(item1) {
    arr2.forEach(function(item2) {
      if (item1[1] === item2[1]) {
        item1[0] = item1[0] + item2[0]; //Increase number of stock
      }
    });
  });

  // Get item's name for new Inventory
  arr2.forEach(function(item) {
    arrNeInvName.push(item[1]);
  });

  // Get item's name for Current Inventory
  arr1.forEach(function(item) {
    arrCurInvName.push(item[1]);
  });

  // Add new inventory items to current inventory.
  arrNeInvName.forEach(function(item) {
    if (arrCurInvName.indexOf(item) === -1) {
      index = arrNeInvName.indexOf(item);
      arr1.push(arr2[index]);
    }
  });

  // Sort the array alphabetically using the second element of the array as base.
  arr1.sort(function(currItem, nextItem) {
    //Ternary function to avoid using if else
    return currItem[1] > nextItem[1] ? 1 : -1;
  });

  return arr1;
}

// test here
// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"]
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"]
];

updateInventory(curInv, newInv);






function permAlone(str) {
  // Create a regex to match repeated consecutive characters.
  let regex = /(.)\1+/;

  // Split the string into an array of characters.
  const arr = str.split("");
  const permutations = [];
  let tmp;

  // Return 0 if str contains same character.
  if (str.match(regex) !== null && str.match(regex)[0] === str) return 0;

  // Function to swap variables' content.
  function swap(index1, index2) {
    tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
  }

  // Generate arrays of permutations using the algorithm.
  function generate(int) {
    if (int === 1) {
      // Make sure to join the characters as we create  the permutation arrays
      permutations.push(arr.join(""));
    } else {
      for (let i = 0; i != int; ++i) {
        generate(int - 1);
        swap(int % 2 ? 0 : i, int - 1);
      }
    }
  }

  generate(arr.length);

  // Filter the array of repeated permutations.
  const filtered = permutations.filter(function(string) {
    return !string.match(regex);
  });

  // Return how many have no repetitions.
  return filtered.length;
}



function pairwise(arr, arg) {
  let pairIndices = [];
  // Check every pair
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      // Exclude pairs that contain previously paired elements
      if (arr[i] + arr[j] == arg
          && !pairIndices.includes(i)
          && !pairIndices.includes(j)) {
        pairIndices.push(i, j);
        break;
      }
    }
  }

  return pairIndices.reduce((sum, curr, index) => sum + curr, 0);
}

pairwise([1,4,2,3,0,5], 7);


function swap(a, b, arr) {
  let tmp = arr[a];
  arr[a] = arr[b];
  arr[b] = tmp;
}
function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      // -i because the largest element will be bubbled at the end so we don't have to compare.
      if (array[j] > array[j + 1]) {
        swap(j, j + 1, array);
      }
    }
  }
  return array;
}
// Test here.
permAlone("aab");

function pairwise(arr, arg) {
  let pairIndices = {};
  let sum = 0;

  // Potential matches are stored in `pairIndices`
  //
  // For example, if
  //  arr = [1, 4, 2, 3, 2, 5]
  //  arg = 7
  //
  // then after the first two loop iterations
  //
  //  pairIndices = {6: [0], 3: [1]}
  //
  // because 1 = 7 - 6 is at index 0
  //  and    4 = 7 - 3 is at index 1
  //
  // The object has an array of indices to handle
  // duplicate entries in `arr`
  for (let i = 0; i < arr.length; i++) {
    if (pairIndices[arr[i]]) {
      // add indices to sum if matching pair found
      sum += i + pairIndices[arr[i]].shift();
      if (pairIndices[arr[i]].length === 0) {
        delete pairIndices[arr[i]];
      }
    } else {
      // mark index as posibility if no matching pair
      pairIndices[arg - arr[i]] = pairIndices[arg - arr[i]] || [];
      pairIndices[arg - arr[i]].push(i);
    }
  }

  return sum;
}

function merger(arr1, arr2) {
  let i = 0,
    j = 0,
    mergedArr = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) mergedArr.push(arr2[j++]);
    else mergedArr.push(arr1[i++]);
  }
  while (i < arr1.length) {
    mergedArr.push(arr1[i++]);
  }
  while (j < arr2.length) {
    mergedArr.push(arr2[j++]);
  }
  return mergedArr;
}
function mergeSort(array) {
  //Array of length 1 is sorted so we return the same array back
  if (array.length == 1) return array;

  //Break down the array to half from middle into left and right
  let middle = Math.floor(array.length / 2);
  let left = mergeSort(array.slice(0, middle));
  let right = mergeSort(array.slice(middle));

  //Return the merged sorted array
  return merger(left, right);
}


var str = ???;
permAlone(current position in original string, characters used already in original string, created string) {
  if (current string is finished) {
    print current string;
  } else {
    for (var i = 0; i < str.length; i++) {
      if (str[i] has not been used) {
        put str[i] into the current position of new string;
        mark str[i] as used;
        permAlone(current position in original string, characters used already in original string, created string);
        remove str[i] as used because another branch in the tree for i + 1 will likely use it;
      }
    }
  }
}
permAlone(0, nothing used yet, empty new string (or array the same size as str));k



function mergeSort(array) {
  if (array.length === 1) {
    return array;
  } else {
    const splitIndex = Math.floor(array.length / 2);
    return merge(
      mergeSort(array.slice(0, splitIndex)),
      mergeSort(array.slice(splitIndex))
    );
  }
  // Merge two sorted arrays
  function merge(array1, array2) {
    let merged = [];
    while (array1.length && array2.length) {
      if (array1[0] < array2[0]) {
        merged.push(array1.shift());
      } else if (array1[0] > array2[0]) {
        merged.push(array2.shift());
      } else {
        merged.push(array1.shift(), array2.shift());
      }
    }
    // After looping ends, one array is empty, and other array contains only
    // values greater than all values in `merged`
    return [...merged, ...array1, ...array2];
  }
}


function mergeSort(array) {
  if (array.length === 1) {
    return array;
  } else {
    const splitIndex = Math.floor(array.length / 2);
    return merge(
      mergeSort(array.slice(0, splitIndex)),
      mergeSort(array.slice(splitIndex))
    );
  }
  // Merge two sorted arrays
  function merge(array1, array2) {
    let merged = [];
    while (array1.length && array2.length) {
      if (array1[0] < array2[0]) {
        merged.push(array1.shift());
      } else if (array1[0] > array2[0]) {
        merged.push(array2.shift());
      } else {
        merged.push(array1.shift(), array2.shift());
      }
    }
    // After looping ends, one array is empty, and other array contains only
    // values greater than all values in `merged`
    return [...merged, ...array1, ...array2];
  }
}



function mergeSort(array) {
  if (array.length === 1) {
    return array;
  } else {
    const splitIndex = Math.floor(array.length / 2);
    return merge(
      mergeSort(array.slice(0, splitIndex)),
      mergeSort(array.slice(splitIndex))
    );
  }
  // Merge two sorted arrays
  function merge(array1, array2) {
    let merged = [];
    while (array1.length && array2.length) {
      if (array1[0] < array2[0]) {
        merged.push(array1.shift());
      } else if (array1[0] > array2[0]) {
        merged.push(array2.shift());
      } else {
        merged.push(array1.shift(), array2.shift());
      }
    }
    // After looping ends, one array is empty, and other array contains only
    // values greater than all values in `merged`
    return [...merged, ...array1, ...array2];
  }
}


function swap(arr, x, y) {
  [arr[x], arr[y]] = [arr[y], arr[x]];
}

//Pivot function returns the fixed pivot point
function pivot(arr, left = 0, right = arr.length - 1) {
  let shift = left;
  for (let i = left + 1; i <= right; i++) {
    //Move all the small elements on the left side
    if (arr[i] < arr[left]) swap(arr, i, ++shift);
  }

  //Finally swapping the last element with the left
  swap(arr, left, shift);
  return shift;
}

function quickSort(array, left = 0, right = array.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(array, left, right);

    //Recusrively calling the function to the left of the pivot and to the right of the pivot
    quickSort(array, left, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, right);
  }
  return array;
}




function updateInventory(arr1, arr2) {
  // All inventory must be accounted for or you're fired!

  // convert current inventory (arr1) to an one-dimensional array
  const inventory = Array.prototype.concat.apply([], arr1);

  // loop through new delivery (arr2)
  for (let i = 0; i < arr2.length; i++) {
    // extract item properties for easy reference
    const item = arr2[i][1];
    const quantity = arr2[i][0];

    // check if item already exists in inventory
    const position = inventory.indexOf(item);

    // exsisting item: update quantity
    if (position !== -1) {
      const row = Math.floor(position / 2);
      arr1[row][0] += quantity;
      continue;
    }

    // alien item: add to inventory
    arr1.push([quantity, item]);
  }

  // sort inventory in alphabetical order
  arr1.sort((previous, next) => (previous[1] > [next[1]] ? 1 : -1));

  return arr1;
}

// test here
// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"]
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"]
];

updateInventory(curInv, newInv);


function quickSort(array) {
  if (array.length === 0) {
    return [];
  } else {
    const pivotValue = array[0];
    // Sort elements into three piles
    let lesser = [];
    let equal = [];
    let greater = [];
    for (let e of array) {
      if (e < pivotValue) {
        lesser.push(e);
      } else if (e > pivotValue) {
        greater.push(e);
      } else {
        equal.push(e);
      }
    }
    return [...quickSort(lesser), ...equal, ...quickSort(greater)];
  }
}


const toggleDoors = (n) => {
    const doors = Array(n).fill(1);
    const indexArray = [];
    for (y = 2; y <= n; y++) {
        for (i = y - 1; i < n; i = i + y) {
            doors[i] === 0 ? doors[i] = 1 : doors[i] = 0;
        }
    }
    for (i = 0; i < n; i++) {
        if (doors[i] === 1) {
            indexArray.push(i + 1);
        }
    }
    return indexArray;
};
module.exports = toggleDoors;


function permAlone(str) {
  // Create a regex to match repeated consecutive characters.
  let regex = /(.)\1+/;

  // Split the string into an array of characters.
  const arr = str.split("");
  const permutations = [];
  let tmp;

  // Return 0 if str contains same character.
  if (str.match(regex) !== null && str.match(regex)[0] === str) return 0;

  // Function to swap variables' content.
  function swap(index1, index2) {
    tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
  }

  // Generate arrays of permutations using the algorithm.
  function generate(int) {
    if (int === 1) {
      // Make sure to join the characters as we create  the permutation arrays
      permutations.push(arr.join(""));
    } else {
      for (let i = 0; i != int; ++i) {
        generate(int - 1);
        swap(int % 2 ? 0 : i, int - 1);
      }
    }
  }

  generate(arr.length);

  // Filter the array of repeated permutations.
  const filtered = permutations.filter(function(string) {
    return !string.match(regex);
  });

  // Return how many have no repetitions.
  return filtered.length;
}

// Test here.
permAlone("aab");



function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let curr = array[i];
    for (var j = i - 1; j >= 0 && array[j] > curr; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = curr;
  }
  return array;
}



function mergeSort(array) {
  if (array.length === 1) {
    return array;
  } else {
    const splitIndex = Math.floor(array.length / 2);
    return merge(
      mergeSort(array.slice(0, splitIndex)),
      mergeSort(array.slice(splitIndex))
    );
  }
  // Merge two sorted arrays
  function merge(array1, array2) {
    let merged = [];
    while (array1.length && array2.length) {
      if (array1[0] < array2[0]) {
        merged.push(array1.shift());
      } else if (array1[0] > array2[0]) {
        merged.push(array2.shift());
      } else {
        merged.push(array1.shift(), array2.shift());
      }
    }
    // After looping ends, one array is empty, and other array contains only
    // values greater than all values in `merged`
    return [...merged, ...array1, ...array2];
  }
}
