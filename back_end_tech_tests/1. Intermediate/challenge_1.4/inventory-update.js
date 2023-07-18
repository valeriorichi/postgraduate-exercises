function updateInventory(curInv, newInv) {
    let updatedInv = [];
    newInv.forEach(newElement => {
        updatedInv = curInv.forEach(curElement => {
            if (curElement[1] === newElement[1]) {
                curElement[0] += newElement[0];
            } else {
                console.log(newElement);
            }
        });
    });
    console.log(curInv);
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