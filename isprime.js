function isprime(){
var num = 13195;
var largestFact = 0;
var result=[];
for (let i = 2; i < num; i++) {
    if (num % i == 0) {
        result.push(i);
         var isPrime = true;
         for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            largestFact = i;
        }
    }
    
}
console.log(result);
return largestFact;

}
module.exports =isprime;