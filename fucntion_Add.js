function multiple() {
    var sum=0;
    for(let i=0;i<1000;i++){
        if(i%3==0 || i%5==0){        
          sum+=i;
        }       
    }
    
    return sum;

  }
  module.exports =multiple;