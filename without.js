// function assertEqual(actual, expected) {
//   if(actual === expected) {
//     console.log(`🟢🟢🟢Assertion Passed: ${actual} === ${expected}!`)
//   } else (console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}!`))
// }


// function eqArrays(firstArr, secondArr) {
//   for(let i = 0; i < firstArr.length; i++){
//     if(firstArr[i] !== secondArr[i]) {
//       return false } 
//   };
//   return true;
// };

// assertEqual(eqArrays([1, 2, 3], [1, 4, 3]), true);

//File split


function assertArraysEqual(firstArr, secondArr){
  for(let i = 0; i < firstArr.length; i++){
    if(firstArr[i] !== secondArr[i]) {
      return console.log(`🔴🔴🔴Assertion Failed! Arrays are not equal!`); 
    }; 
  };
  return console.log(`🟢🟢🟢Assertion Passed! Arrays are equal!`);
};

// assertArraysEqual([1, 2, 3], [1, 4, 3])

//File Split

function without(source, itemsToRemove){
  let nonDisposable = [];
  for(let i = 0; i < source.length; i++){
    if(!itemsToRemove.includes(source[i])){
      nonDisposable.push(source[i]);
    };
  };
  console.log(nonDisposable);
};

const words = [1, 2, 3];

without(words, [1]);

assertArraysEqual(words, [1, 2, 3]);