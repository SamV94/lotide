function assertEqual(actual, expected) {
  if(actual === expected) {
    console.log(`🟢🟢🟢Assertion Passed: ${actual} === ${expected}!`)
  } else (console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}!`))
}


function eqArrays(firstArr, secondArr) {
  for(let i = 0; i < firstArr.length; i++){
    if(firstArr[i] !== secondArr[i]) {
      return false } 
  };
  return true;
};


assertEqual(eqArrays([1, 2, 3], [1, 4, 3]), true);