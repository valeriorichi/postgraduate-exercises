function updateInventory(curInv, newInv) {
    const updatedInv = [...curInv];
    newInv.forEach(newElement => {
        let foundMatch = false;

        updatedInv.forEach(curElement => {
            if (curElement[1] === newElement[1]) {
                curElement[0] += newElement[0];
                foundMatch = true;
            }
        });

        if (!foundMatch) {
            updatedInv.push(newElement);
        }
    });

    updatedInv.sort((a, b) => {
        if (a[1] < b[1]) {
            return -1;
        }
        if (a[1] > b[1]) {
            return 1;
        }
        return 0;
    });

    console.log(updatedInv);
}


// module.exports = updateInventory;


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