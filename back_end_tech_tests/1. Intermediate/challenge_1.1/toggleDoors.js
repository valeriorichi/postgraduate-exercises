const toggleDoors = (n) => {
    const doors = Array(n).fill(1);

    for (y = 2; y <= n; y++) {
        console.log("y=", y);
        for (i = y - 1; i < n; i = i + y) {

            doors[i] = 0 ? doors[i] = 1 : doors[i] = 0;
            console.log("i=", i, doors);
        }
    }
    console.log(doors);
};
toggleDoors(10);
module.exports = toggleDoors;