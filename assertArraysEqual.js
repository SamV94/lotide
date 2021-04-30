function assertArraysEqual(firstArr, secondArr){
  for(let i = 0; i < firstArr.length; i++){
    if(firstArr[i] !== secondArr[i]) {
      return console.log(`🔴🔴🔴Assertion Failed! Arrays are not equal!`) 
    } 
  };
  return console.log(`🟢🟢🟢Assertion Passed! Arrays are equal!`)
}

assertArraysEqual([1, 2, 3], [1, 4, 3])