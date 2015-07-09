var customArrayPrototypes = require('../customArrayPrototypes');
var expect = require('chai').expect;


describe('customArrayPrototypes', function(){
  describe('#shifty', function(){
    var testArray = [1, 2, 3, 4];
    var shifted = 0;
    before(function(){
      shifted = testArray.shifty();
    });
    it('should return 1 when passed [1, 2, 3, 4]', function(){
      expect(shifted).to.deep.equal(1);
    });
    it('should make [1, 2, 3, 4] into [2, 3, 4]', function(){
      expect(testArray).to.deep.equal([2, 3, 4]);
    });
  });
  describe('#unshifty', function(){
    var testArray = [2, 3, 4];
    var length = 0;
    before(function(){
      length = testArray.unshifty(1);
    });
    it('should add the variable passed to the front of the array', function(){
      expect(testArray).to.deep.equal([1, 2, 3, 4]);
    });
    it('should return the new length of the array', function(){
      expect(length).to.deep.equal(4);
    });
  });
    describe('#popy', function(){
    var testArray = [1, 2, 3, 4];
    var popped = 0;
    before(function(){
      popped = testArray.popy();
    });
    it('should return 4 when passed [1, 2, 3, 4]', function(){
      expect(popped).to.deep.equal(4);
    });
    it('should make [1, 2, 3, 4] into [1, 2, 3]', function(){
      expect(testArray).to.deep.equal([1, 2, 3]);
    });
  });
  describe('#pushy', function(){
    var testArray = [1, 2, 3];
    var length = 0;
    before(function(){
      length = testArray.pushy(4);
    });
    it('should make [1, 2, 3] into [1, 2, 3, 4]', function(){
      expect(testArray).to.deep.equal([1, 2, 3, 4]);
    });
     it('should return the new length of the array', function(){
      expect(length).to.deep.equal(4);
    });
  });
  describe('#unique', function(){
    var testArray = [1, 1, 2, 3, 4];
    it('should return an array with duplicates removed', function(){
      expect(testArray.unique()).to.deep.equal([1, 2, 3, 4]);
    });
  });
  describe('#frequency2', function(){
    var testArray = ['everything ', ' in ', ' here ', ' is ', 'a', 'string'];
    it('should return the most common letter in the array', function(){
      expect(testArray.frequency2()).to.deep.equal(['e', 'i']);
    });
  });
});
