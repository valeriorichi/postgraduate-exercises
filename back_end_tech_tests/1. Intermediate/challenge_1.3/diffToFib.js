function diffToFib(number) {
    let n1 = Math.sqrt(5 * number * number + 4);
    let n2 = Math.sqrt(5 * number * number - 4);
    if ((n1 - Math.round(n1)) === 0 || (n2 - Math.round(n2)) === 0) return 0;

    const a = (1 + Math.sqrt(5)) / 2;
    const b = number * Math.sqrt(5);
    let n = Math.ceil(Math.log(b) / Math.log(a));
    return Math.round(Math.pow((1 + Math.sqrt(5)) / 2, n) / Math.sqrt(5)) - number;
}
module.exports = diffToFib;


