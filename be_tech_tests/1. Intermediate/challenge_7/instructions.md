# 7. Implement Bubble Sort
## Free Code Camp <a href="https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-bubble-sort">link</a>
Bubble sort is one of the original sorting algorithms.

The bubble sort method starts at the beginning of an unsorted array and 'bubbles up' unsorted larger values towards the end of the array, continuing the process until the array is completely sorted. It does this by comparing adjacent items and swapping them if they are out of order. The method continues looping through the array until no swaps occur at which point the array is sorted.

For example, let's say we have this array to start with:

[0, 2, 1, 4, 3]

After one loop it should look like this:

[0, 1, 2, 3, 4]

We get here by first comparing 0 with 2, is 0 greater than 2? No, so we do nothing and move on. Next, is 2 greater than 1? Yes, swap 2 and 1's positions in the array. Next, is 2 greater than 4 (remember we're on index 3 but still on number 2 because we swapped 2 and 1)? No, so keep them the same. Last in this loop, is 4 greater than 3? Yes, so swap.

As we have made changes, we would need to loop again to make sure that the array is sorted, or if changes still need to be made.

## Task:
Our goal here is to recreate the bubble sort method on an array of numbers. BUT, we do not want to mutate the original array or them to have the same memory reference!
