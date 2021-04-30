// function assertEqual(actual, expected) {
//   if(actual === expected) {
//     console.log(`🟢🟢🟢Assertion Passed: ${actual} === ${expected}!`)
//   } else (console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}!`));
// };

function assertArraysEqual(firstArr, secondArr){
  for(let i = 0; i < firstArr.length; i++){
    if(firstArr[i] !== secondArr[i]) {
      return console.log(`🔴🔴🔴Assertion Failed! Arrays are not equal!`); 
    };
  };
  return console.log(`🟢🟢🟢Assertion Passed! Arrays are equal!`);
};

function middle(arrMiddle) {
  let midArr = [];
  for(let i = 0; i < arrMiddle.length; i++);{
    if(arrMiddle.length % 2 === 0){
      let x = (arrMiddle.length / 2) - 1;
      let y = (arrMiddle.length / 2);
      midArr.push(arrMiddle[x]);
      midArr.push(arrMiddle[y]);
    } else{
      let z = (arrMiddle.length / 2);
      z = Math.floor(z);
      midArr.push(arrMiddle[z]);
    }
  } 
  return midArr;
};

console.log(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]));