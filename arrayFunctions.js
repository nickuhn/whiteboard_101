exports.shifty = function(array) {
  item = array[0];
  for (var i = 1; i < array.length; i++) {
    array[i-1] = array[i];
  };
  delete array[array.length-1];
  return item;
}

exports.unshifty = function(array, item) {
  for (var i = array.length; i > 0; i--) {
    array[i] = array[i-1];
  };
  array[0] = item;
  return array;
}

exports.popy = function(array) {
  item = array[array.length - 1];
  delete array[array.length - 1];
  return item;
}

exports.pushy = function(array, item) {
  array[array.length] = item;
  return array;
}


