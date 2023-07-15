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
    console.log(indexArray);
    return indexArray;
};
toggleDoors(10);
module.exports = toggleDoors;
