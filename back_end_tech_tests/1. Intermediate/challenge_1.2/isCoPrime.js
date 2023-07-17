const isCoPrime = (num1, num2) => {
    if (num1 === num2) {
        return false;
    }

    const minNum = num1 > num2 ? num2 : num1;
    for (i = 2; i <= Math.sqrt(minNum); i++) {
        if (num1 % i === 0 && num2 % i === 0) return false;
    }
    return true;
};

module.exports = isCoPrime;