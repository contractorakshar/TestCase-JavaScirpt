var assert = require('assert');
describe('Variable', function() {
    describe('const', function() {
      it('should return error if value assign to const ', function() {
        const a=5;
        
        
        assert.equal(a=5, 'type error');
        
      });
    });
  }); 
describe('let', function() {
      it('assign value ', function() {  
        let b=4;
        assert.equal(b=7, 7);
        console.log(b);    
      });
    });