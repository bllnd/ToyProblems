function evenOccurrence (arr) {
  var counter = {}, i;
  for (var i = 0; i < arr.length; i++) {
    counter[arr[i]] = !counter[arr[i]];
  }
for (var i = 0; i < arr.length; i++) {
  if (!counter[arr[i]]) {
    return arr[i];
  }
}
  return null;
}

console.log(evenOccurrence([1, 3, 3, 3, 2, 4, 4, 2, 5 ]));