function palindrome() {
    let product = 0; 
    let palindrome = 0;

    for (let i = 100; i <= 999; i++) {
        for (let j = 100; j <= 999; j++) {
            product = i * j;
            if(product === Number(String(product).split('').reverse().join('')) && product > palindrome) {
                palindrome = product;
            }
        }
    }
    return palindrome;
}

module.exports = palindrome;