function fibonacci() {
    let i = 1, j = 1, sum = 0;
    while (i < 4000000) {
        i = i + j;
        j = i - j;
        if (i % 2 == 0)
        sum += i;
    }
    return sum;
}

module.exports = fibonacci;