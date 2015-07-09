Array.prototype.shifty = function() {
  var item = this[0];
  for (var i = 1; i < this.length; i++) {
    this[i-1] = this[i];
  }
  delete this[this.length-1];
  return item;
};

Array.prototype.unshifty = function(item) {
  for (var i = this.length; i > 0; i--) {
    this[i] = this[i-1];
  }
  this[0] = item;
  return this.length;
};

Array.prototype.popy = function() {
  var item = this[this.length - 1];
  delete this[this.length - 1];
  return item;
};

Array.prototype.pushy = function(item) {
  this[this.length] = item;
  return this.length;
};

Array.prototype.unique = function() {
  var checkHash = {};
  var arraydeduped = [];
  for (var i = 0; i < this.length; i++) {
    if(!checkHash[this[i]]) {
      checkHash[this[i]] = 1;
      arraydeduped.push(this[i]);
    }
  }
  return arraydeduped;
};

Array.prototype.frequency2 = function() {
  var startHash = {};
  var highestCount = 0;
  var commonLetter = [];
  var arrayJoined = this.join('');
  for (var i = 0; i < arrayJoined.length; i++) {
    var currentLetter = arrayJoined.charAt(i);
    if (currentLetter !== ' ') {
      if (startHash[currentLetter]) {
        startHash[currentLetter] ++;
      } else {
        startHash[currentLetter] = 1;
      }
    }
  }
  for (var letter in startHash) {
    if (startHash[letter] > highestCount) {
      commonLetter = [letter];
      highestCount = startHash[letter];
    } else if (startHash[letter] === highestCount) {
      commonLetter.push(letter);
    }
  }
  return commonLetter;
};
