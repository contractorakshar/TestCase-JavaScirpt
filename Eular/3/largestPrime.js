function largestPrime() {

    var divisor = 2;
    var number = 600851475143;

    while (number / 2 > 1) { // Divide by 2 for reduce time complexity
        if (number % divisor === 0) {
            number /= divisor; // To break loop
        } else {
            divisor++;
        }
    }
    return divisor;
}

module.exports = largestPrime;