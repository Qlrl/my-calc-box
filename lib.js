function avg(numbers) {
    let s = numbers.reduce((prev, curr) => prev + curr, 0);
    return s / numbers.length;
}
function prime(num) {
    return false;
}
function fact(num) {
    return -1;
}
module.exports = {
    avg,
    prime,
    fact
}
