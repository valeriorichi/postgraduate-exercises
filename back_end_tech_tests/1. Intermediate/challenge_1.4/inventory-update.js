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

    return updatedInv;
}

module.exports = updateInventory;

