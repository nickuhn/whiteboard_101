exports.shifty = function(array) {
  var item = array[0];
  for (var i = 1; i < array.length; i++) {
    array[i-1] = array[i];
  }
  delete array[array.length-1];
  return item;
};

exports.unshifty = function(array, item) {
  for (var i = array.length; i > 0; i--) {
    array[i] = array[i-1];
  }
  array[0] = item;
  return array;
};

exports.popy = function(array) {
  var item = array[array.length - 1];
  delete array[array.length - 1];
  return item;
};

exports.pushy = function(array, item) {
  array[array.length] = item;
  return array;
};

exports.findDuplicates = function(array) {
  var checkHash = {};
  for (var i = 0; i < array.length; i++) {
    if(checkHash[array[i]]) {
      return true;
    } else {
      checkHash[array[i]] = 1;
    }
  }
};

exports.deduplicate = function(array) {
  var checkHash = {};
  var arraydeduped = [];
  for (var i = 0; i < array.length; i++) {
    if(!checkHash[array[i]]) {
      checkHash[array[i]] = 1;
      arraydeduped.push(array[i]);
    }
  }
  return arraydeduped;
};


exports.commonStartingLetter = function(array) {
  var startHash = {};
  var highestCount = 0;
  var commonLetter = [];
  for (var i = 0; i < array.length; i++) {
    var first = array[i].charAt(0);
    if (first !== ' ') {
      if (startHash[first]) {
        startHash[first] ++;
      } else {
        startHash[first] = 1;
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

exports.commonLetter = function(array) {
  var startHash = {};
  var highestCount = 0;
  var commonLetter = [];
  var arrayJoined = array.join('');
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

















