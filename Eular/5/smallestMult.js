function smallestMult() {

    let isSmallest = false;
    let smallestMult = 0;
    
    while (!isSmallest) {
        smallestMult += 20;
        for (let i = 20; i >= 1; i--) {
            if (smallestMult % i !== 0) {
                break;
            }
            if (i === 1) {
                isSmallest = true;
            }
        }
    }
    return smallestMult;
}

module.exports = smallestMult;