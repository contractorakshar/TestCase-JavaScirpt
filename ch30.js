var assert = require('assert');
const myMap=new Map();
describe('Map', function() {
    it('Empty map', function() {
    
        console.log(myMap);
        assert.equal(myMap.size,0);
    

  });
});
const myMap1=new Map([
    [1, 'one'],
  [2, 'two'],
  [3, 'three']
]);
describe('Map', function() {
    it(' map with array', function() {
    
        console.log(myMap1);
        assert.equal(myMap1.size,3);
    

  });
});
const myMap2=new Map()
.set(1,'one')
.set(2,'two');
describe('Map', function() {
    it(' map with set', function() {
        it('should return undefined',function(){

        
    
        console.log(myMap2);
        assert.equal(myMap2.size,2);
        assert.equal(myMap2.get('bar'),1);

    });
  });
});
