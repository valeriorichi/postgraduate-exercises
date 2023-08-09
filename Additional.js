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
