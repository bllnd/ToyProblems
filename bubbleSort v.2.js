gitfunction bubbleSort (input) {

  var decrementing = input.length;
  while(decrementing >= 0){
    for (var i = 0; i < input.length; i++) {
      if(input[i] > input[i+1]) {
        var temp;
        temp = input[i];
        input[i] = input[i+1];
        input[i+1] = temp;
      }
    }
  decrementing--;
  }
  return input;
}



console.log(bubbleSort([5,3,8,4,1]));
