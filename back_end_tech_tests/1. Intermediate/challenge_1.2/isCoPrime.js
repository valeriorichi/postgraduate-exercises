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

/*
implementing the Euclidean algorithm
const gcd = (num1, num2) => {
    while (num2 !== 0) {
      let temp = num2;
      num2 = num1 % num2;
      num1 = temp;
    }
    return num1;
  };
  
  const isCoPrime = (num1, num2) => {
    return gcd(num1, num2) === 1;
  };
  */