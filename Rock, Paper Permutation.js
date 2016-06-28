function rockPaperPermutation (roundCount) {
  // Write your code here, and
  // return your final answer.
var result = [];
var choices = ['r','p','s'];

if (roundCount === 0) {
  return [];
}
var recurse = function(combo) {
  if(combo.length === roundCount){
    result.push(combo);
    return;
  }
  for (var i = 0; i < choices.length; i++) {
    recurse(combo + choices[i]);
  }
};
recurse('');
return result;
}

console.log(rockPaperPermutation(2));
