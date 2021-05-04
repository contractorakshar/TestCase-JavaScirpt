function diffSum(n){
  let sum=0,a=0,b=0;
  for(let i = 1;i<=n;i++){
    sum+= (Math.pow(i,2));
    a+=i
  }
  b=Math.pow(a,2);
  console.log(b +' - ' +sum +' = ' + (b-sum));  
  return b-sum;  
}
module.exports=diffSum;